import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

interface Payload {
  plan: string;
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
  question6: string;
  name: string;
  age: string;
  phone: string;
}

export async function POST(request: NextRequest) {
  const body: Payload = await request.json();

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    const now = new Date().toLocaleString('pt-BR', {
      timeZone: 'America/Sao_Paulo',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    const htmlBody = `
      <div style="font-family: sans-serif; color: #333; line-height: 1.5;">
        <header style="text-align: center; margin-bottom: 20px;">
          <h1 style="color: #2a9d8f; margin: 0;">🎉 Novo Questionário Respondido! 🎉</h1>
          <p style="margin-top: 5px; font-size: 0.9em;">Respostas recebidas em ${now}</p>
        </header>

        <section>
          <h2 style="border-bottom: 2px solid #2a9d8f; padding-bottom: 5px;">Plano Escolhido</h2>
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li><strong>Plano:</strong> ${body.plan}</li>
          </ul>
        </section>

        <section>
          <h2 style="border-bottom: 2px solid #2a9d8f; padding-bottom: 5px;">Respostas do Questionário</h2>
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li><strong>1 – Apresentação:</strong> ${body.question1}</li>
            <li><strong>2 – How was your day?:</strong> ${body.question2}</li>
            <li><strong>3 – Pedir café:</strong> ${body.question3}</li>
            <li><strong>4 – Conversou em inglês:</strong> ${body.question4}</li>
            <li><strong>5 – Aula toda em inglês:</strong> ${body.question5}</li>
            <li><strong>6 – Conforto ao falar (1-5):</strong> ${body.question6}</li>
          </ul>
        </section>

        <section style="margin-top: 20px;">
          <h2 style="border-bottom: 2px solid #2a9d8f; padding-bottom: 5px;">Dados Pessoais</h2>
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li><strong>Nome:</strong> ${body.name}</li>
            <li><strong>Idade:</strong> ${body.age}</li>
            <li><strong>WhatsApp:</strong> ${body.phone}</li>
          </ul>
        </section>

        <footer style="margin-top: 30px; text-align: center; font-size: 0.9em; color: #666;">
          <p>Parabéns por mais um aluno, ótimas aulas!</p>
        </footer>
      </div>
    `;

    const mailOptions: nodemailer.SendMailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_TARGET,
      subject: '🎉 Novo Aluno - Parabéns, Ana! 🎉',
      html: htmlBody,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: 'Email enviado com sucesso!' }, { status: 200 });
  } catch (err) {
    console.error('Erro ao enviar email:', err);
    return NextResponse.json({ success: false, message: 'Falha ao enviar email.' }, { status: 500 });
  }
}

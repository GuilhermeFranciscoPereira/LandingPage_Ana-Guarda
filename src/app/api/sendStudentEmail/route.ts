import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface Payload {
    plan: string;
    name: string;
    email: string;
    phone: string;
    englishLevel: string;
    pronunciationLevel: string;
    studiedEnglish: string;
    studyDuration?: string;
    understandsSpoken: 'Sim' | 'Não';
    speaksWithConfidence: 'Sim' | 'Não';
    readsTexts: 'Sim' | 'Não';
    writesMessages: 'Sim' | 'Não';
    vocabularyRange: 'Básico' | 'Intermediário' | 'Avançado';
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

        const now = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });

        const htmlBody = `
      <div style="font-family: sans-serif; color: #333; line-height: 1.5;">
        <header style="text-align: center; margin-bottom: 20px;">
          <h1 style="color: #2a9d8f; margin: 0;">🎉 Olá, Ana! 🎉</h1>
          <p style="margin-top: 5px; font-size: 0.9em;">Você recebeu um novo aluno em ${now}</p>
        </header>

        <section>
          <h2 style="border-bottom: 2px solid #2a9d8f; padding-bottom: 5px;">Dados do Aluno</h2>
          <ul style="list-style: none; padding: 0; margin: 0;">
            <li><strong>Plano escolhido:</strong> ${body.plan}</li>
            <li><strong>Nome:</strong> ${body.name}</li>
            <li><strong>Email:</strong> ${body.email}</li>
            <li><strong>WhatsApp:</strong> ${body.phone}</li>
            <li><strong>Nível de Inglês:</strong> ${body.englishLevel}</li>
            <li><strong>Nível de Pronúncia:</strong> ${body.pronunciationLevel}</li>
            <li><strong>Já estudou inglês?</strong> ${body.studiedEnglish}</li>
            ${body.studiedEnglish === 'Sim'
                ? `<li><strong>Tempo de estudo:</strong> ${body.studyDuration}</li>`
                : ''
            }
            <li><strong>Entende inglês falado?</strong> ${body.understandsSpoken}</li>
            <li><strong>Fala com confiança?</strong> ${body.speaksWithConfidence}</li>
            <li><strong>Lê textos em inglês?</strong> ${body.readsTexts}</li>
            <li><strong>Escreve mensagens em inglês?</strong> ${body.writesMessages}</li>
            <li><strong>Vocabulário:</strong> ${body.vocabularyRange}</li>
          </ul>
        </section>

        <footer style="margin-top: 30px; text-align: center; font-size: 0.9em; color: #666;">
          <p>Parabéns por este novo aluno!</p>
        </footer>
      </div>
    `;

        const mailOptions: nodemailer.SendMailOptions = {
            from: process.env.MAIL_USER,
            to: process.env.MAIL_TARGET,
            subject: '🎉 Novo aluno! 🎉',
            html: htmlBody
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { success: true, message: 'Email enviado com sucesso!' },
            { status: 200 }
        );
    } catch (err) {
        console.error('Erro ao enviar email:', err);
        return NextResponse.json(
            { success: false, message: 'Falha ao enviar email.' },
            { status: 500 }
        );
    }
}

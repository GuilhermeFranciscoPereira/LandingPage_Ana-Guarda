import styles from '@/Sections/Faq/Faq.module.css';

export default function Faq(): React.ReactElement {
    return (
        <section id="faq" className={styles.faqSection} data-aos="fade-up">
            <div className={styles.headline} data-aos="fade-up">
                <h2>Perguntas Frequentes</h2>
                <p className={styles.subtitle}>Esclareça suas dúvidas antes de começar sua jornada rumo à fluência.</p>
            </div>
            <div className={styles.faqList}>
                <details className={styles.faqItem} data-aos="fade-up">
                    <summary className={styles.question}> O que preciso fazer depois de escolher um plano e preencher o formulário?</summary>
                    <p className={styles.answer}>Após enviar o formulário com seu plano escolhido, basta aguardar nosso contato em até 48 horas úteis. Entraremos em contato via WhatsApp no número que você informou para agendar a sua primeira aula e enviar todos os detalhes necessários para você começar!</p>
                </details>
                <details className={styles.faqItem} data-aos="fade-up">
                    <summary className={styles.question}>Como faço o agendamento e reagendamento de aulas?</summary>
                    <p className={styles.answer}>Você pode agendar diretamente em contato comigo via WhatsApp, e caso precise reagendar, basta avisar com no mínimo 6 horas de antecedência, e remarcamos sem custos adicionais!</p>
                </details>
                <details className={styles.faqItem} data-aos="fade-up">
                    <summary className={styles.question}>Qual a duração de cada aula?</summary>
                    <p className={styles.answer}>Cada aula tem 1 hora de duração, o tempo ideal para manter o foco e a produtividade sem sobrecarregar.</p>
                </details>
                <details className={styles.faqItem} data-aos="fade-up">
                    <summary className={styles.question}>Posso solicitar temas específicos para as aulas?</summary>
                    <p className={styles.answer}>Claro! As aulas são 100% personalizadas. Se quiser focar em apresentações, entrevistas de emprego, viagens, só jogar conversa fora ou qualquer outro assunto, é só me informar antes ou durante a aula!</p>
                </details>
                <details className={styles.faqItem} data-aos="fade-up">
                    <summary className={styles.question}>Preciso ter conhecimento de gramática antes de iniciar?</summary>
                    <p className={styles.answer}>Não! O foco é na conversação e na prática real. Você aprende gramática de forma implícita conforme usamos o idioma em situações do dia a dia.</p>
                </details>
                <details className={styles.faqItem} data-aos="fade-up">
                    <summary className={styles.question}>Quais as formas de pagamento?</summary>
                    <p className={styles.answer}>Você pode pagar via Pix, cartão de crédito ou transferência bancária.</p>
                </details>
                <details className={styles.faqItem} data-aos="fade-up">
                    <summary className={styles.question}>Em qual plataforma as aulas são realizadas?</summary>
                    <p className={styles.answer}>As aulas acontecem via Discord, Zoom, Google Meat ou a plataforma que for melhor para você, agendamos o melhor método e dia através do WhatsApp. Não é necessário instalar nada novo!</p>
                </details>
            </div>
        </section>
    );
}

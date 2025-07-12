import { MdChatBubble } from 'react-icons/md';
import { FaComments, FaChalkboardTeacher, FaHandshake } from 'react-icons/fa';
import styles from '@/components/WhyTakeClassWithMe/WhyTakeClassWithMe.module.css';

export default function WhyTakeClassWithMe(): React.ReactElement {
    return (
        <section className={styles.WhyTakeClassWithMe} id="beneficios">
            <div className={styles.containerWhyTakeClassWithMe} data-aos="fade-up" >
                <div className={styles.headlineWhyTakeClassWithMe}>
                    <div className={styles.textHeadlineWhyTakeClassWithMe} data-aos="fade-up">
                        <h2><span>Por que</span> ter aula comigo?</h2>
                        <p>
                            Aqui, você encontra um método focado na conversação, num ambiente descontraído e totalmente adaptado ao seu ritmo.
                            Praticamos situações reais do dia a dia para que você fale com naturalidade, desenvolva confiança e aprenda de forma leve e eficiente.
                        </p>
                    </div>
                </div>
                <div className={styles.contentBenefits}>
                    <div className={styles.boxBenefits} data-aos="fade-right">
                        <FaComments className={styles.icon} />
                        <h3>Conversação: o melhor método</h3>
                        <p>
                            Estudos mostram que o Communicative Language Teaching acelera a aquisição de vocabulário e a fluência ao priorizar a interação.
                            <br />
                            <span>• Fonte:</span>{' '}
                            <a href="https://en.wikipedia.org/wiki/Communicative_language_teaching" target="_blank" >
                                Communicative Language Teaching (Wikipedia)
                            </a>
                            <br />
                            <span>• Benefício:</span> Aprenda de forma dinâmica e aplique o inglês desde a primeira aula.
                        </p>
                    </div>

                    <div className={styles.boxBenefits} data-aos="fade-up">
                        <FaChalkboardTeacher className={styles.icon} />
                        <h3>Aulas particulares personalizadas</h3>
                        <p>
                            Aulas individuais permitem foco total nas suas necessidades, corrigindo erros em tempo real e ajustando o ritmo do curso ao seu aprendizado.
                            <br />
                            <span>• Fonte:</span>{' '}
                            <a href="https://www.ef.com/wwen/blog/language/5-reasons-why-private-tutoring-will-improve-your-language-learning/" target="_blank" >
                                EF Blog: Private Tutoring
                            </a>
                            <br />
                            <span>• Benefício:</span> Progresso rápido e material totalmente alinhado aos seus objetivos.
                        </p>
                    </div>

                    <div className={styles.boxBenefits} data-aos="fade-up">
                        <FaHandshake className={styles.icon} />
                        <h3>Inglês para trabalho e amizades</h3>
                        <p>
                            O inglês é a língua franca global, fundamental para oportunidades de carreira e conexões internacionais.
                            <br />
                            <span>• Fonte:</span>{' '}
                            <a href="https://www.britishcouncil.org/voices-magazine/why-learn-english" target="_blank" >
                                Why Learn English (British Council)
                            </a>
                            <br />
                            <span>• Benefício:</span> Amplie sua rede e acelere seu crescimento profissional.
                        </p>
                    </div>

                    <div className={styles.boxBenefits} data-aos="fade-left">
                        <MdChatBubble className={styles.icon} />
                        <h3>Você no comando</h3>
                        <p>
                            Aqui, suas metas e interesses guiam cada aula. Você escolhe os temas, cenários e desafios para tornar o aprendizado mais motivador e relevante.
                            <br />
                            <span>• Fonte:</span>{' '}
                            <a href="https://en.wikipedia.org/wiki/Autonomy_in_language_learning" target="_blank" >
                                Autonomy in language learning (Wikipedia)
                            </a>
                            <br />
                            <span>• Benefício:</span> Maior engajamento e responsabilidade pelo seu próprio progresso.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { MdChatBubble } from 'react-icons/md';
import { FaComments, FaChalkboardTeacher, FaHandshake } from 'react-icons/fa';
import styles from '@/Sections/WhyTakeClassWithMe/WhyTakeClassWithMe.module.css';

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
                            Estudos mostram que a abordagem comunicativa acelera a aquisição de vocabulário e a fluência ao priorizar a interação.
                            <br />
                            <span>• Fonte:</span>{' '}
                            <a
                                href="https://www.chatclass.ai/blog/communicative-language-teaching-clt-nas-salas-de-aula-do-brasil"
                                target="_blank"
                            >
                                CLT nas salas de aula do Brasil (ChatClass)
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
                            <a
                                href="https://www.ipschool.com.br/quais-sao-os-beneficios-de-aulas-particulares-de-ingles/"
                                target="_blank"
                            >
                                Benefícios de aulas particulares de inglês (IP School)
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
                            <a
                                href="https://athonedu.com.br/blog/importancia-do-ingles-mercado-de-trabalho/"
                                target="_blank"
                            >
                                A Importância do Inglês no Mercado de Trabalho (Athon Blog)
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
                            <a
                                href="https://www.scielo.br/j/edur/a/JyS8KLLrXfTP5Dz9QZgjtxv/"
                                target="_blank"
                            >
                                Autonomia no ensino-aprendizagem de línguas (SciELO)
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

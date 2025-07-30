'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { RiVipDiamondFill } from 'react-icons/ri';
import styles from '@/Sections/Plans/Plans.module.css';
import { FaCalendarAlt, FaPlayCircle } from 'react-icons/fa';

const QuestionnaireModal = dynamic(() => import('./QuestionnaireModal'), { ssr: false })

export default function Plans(): React.ReactElement {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [selectedPlan, setSelectedPlan] = useState<string>('');

    const openModal = (plano: string) => {
        setSelectedPlan(plano);
        setModalOpen(true);
    };

    return (
        <section id="planos" className={styles.plansSection} data-aos="fade-up">
            <div className={styles.headlinePlans}>
                <h2>Escolha o seu <span>plano</span></h2>
                <h3>* COM MEGA PROMOÇÃO ATIVA PARA O MÊS DE {new Date().toLocaleString('pt-BR', { month: 'long' }).toUpperCase()} DE {new Date().getFullYear()}</h3>
            </div>
            <div className={styles.cardsPlans}>

                {/* Aula Avulsa */}
                <div className={styles.cardPlans} data-aos="fade-up">
                    <FaPlayCircle className={styles.icon} />
                    <h3>Aula Avulsa</h3>
                    <p>
                        Uma aula feita sob medida pra sua necessidade do momento. Ideal pra testar o método, praticar conversação ou resolver dúvidas específicas, sem compromisso fixo, mas com resultado real!
                        <br />
                        Aula de 50 minutos.
                    </p>
                    <p className={styles.price}>
                        <span className={styles.oldPrice}>De R$180,00</span>
                        <br />
                        Por <span className={styles.newPrice}>R$95,00</span>
                    </p>
                    <button className={styles.buttonCTA} onClick={() => openModal('Aula Avulsa')}>
                        Entrar em contato
                    </button>
                </div>

                {/* Pacote Mensal */}
                <div className={`${styles.cardPlans} ${styles.cardFeatured}`} data-aos="fade-up">
                    <FaCalendarAlt className={styles.icon} />
                    <h3>Pacote Mensal</h3>
                    <p>
                        Aulas semanais. A escolha certa pra quem quer destravar de vez a conversação em inglês. São 4 aulas por mês, pensadas pra te ajudar a ganhar fluência de forma prática, leve e contínua. Ideal pra quem quer manter o inglês ativo na rotina sem complicação, no seu ritmo.
                        <br />
                        Aulas de 50 minutos.
                    </p>
                    <p className={styles.price}>
                        <span className={styles.oldPrice}>De R$599,90</span>
                        <br />
                        Por <span className={styles.newPrice}>R$339,00</span>
                    </p>
                    <button className={styles.buttonCTA} onClick={() => openModal('Pacote Mensal')}>
                        Entrar em contato
                    </button>
                </div>

                {/* Imersão VIP */}
                <div className={styles.cardPlans} data-aos="fade-up">
                    <RiVipDiamondFill className={styles.icon} />
                    <h3>Imersão VIP</h3>
                    <p>
                        Plano personalizado para quem precisa de suporte com o inglês em situações reais como reuniões, viagens internacionais a negócios, lazer ou eventos. Neste modelo, combinamos horários em que fico à disposição online, pronta para te ajudar na conversação, traduções, frases, revisões ou o que for preciso no momento.
                    </p>
                    <p className={styles.price}>
                        A partir de <span className={styles.newPrice}>R$499,00</span>
                    </p>
                    <button className={styles.buttonCTA} onClick={() => openModal('Imersão VIP')}>
                        Entrar em contato
                    </button>
                </div>

            </div>
            {isModalOpen && (
                <QuestionnaireModal planName={selectedPlan} onClose={() => setModalOpen(false)} />
            )}
        </section>
    );
}
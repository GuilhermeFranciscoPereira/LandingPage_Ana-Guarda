'use client';

import { RiVipDiamondFill } from 'react-icons/ri';
import { FaCalendarAlt, FaPlayCircle } from 'react-icons/fa';
import styles from '@/Sections/Plans/Plans.module.css';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const ModalForm = dynamic(() => import('./ModalForm'), { ssr: false })

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
            </div>
            <div className={styles.cardsPlans}>
                <div className={styles.cardPlans} data-aos="fade-up">
                    <FaCalendarAlt className={styles.icon} />
                    <h3>Pacote Mensal</h3>
                    <p>6 horas por semana, você escolhe a data, o horário e a frequência das aulas de acordo com sua disponibilidade, criando um cronograma 100% flexível para o seu dia a dia.</p>
                    <p className={styles.price}>R$350 / mês</p>
                    <button className={styles.buttonCTA} onClick={() => openModal('Pacote Mensal')}>Entrar em contato</button>
                </div>
                <div className={`${styles.cardPlans} ${styles.cardFeatured}`} data-aos="fade-up">
                    <FaPlayCircle className={styles.icon} />
                    <h3>Aula Avulsa</h3>
                    <p>Ideal para quem quer experimentar o método sem compromisso. Valor avulso e vantagem de avaliar o formato antes de escolher seu plano.</p>
                    <p className={styles.price}>R$100 / aula</p>
                    <button className={styles.buttonCTA} onClick={() => openModal('Aula Avulsa')}>Entrar em contato</button>
                </div>
                <div className={styles.cardPlans} data-aos="fade-up">
                    <RiVipDiamondFill className={styles.icon} />
                    <h3>Mentoria VIP</h3>
                    <p>Acompanhamento diário, materiais extras personalizados e feedback prioritário para acelerar seus resultados e garantir seu sucesso.</p>
                    <p className={styles.price}>A partir de R$500</p>
                    <button className={styles.buttonCTA} onClick={() => openModal('Mentoria VIP')}>Entrar em contato</button>
                </div>
            </div>
            {isModalOpen && (
                <ModalForm planName={selectedPlan} onClose={() => setModalOpen(false)} />
            )}
        </section>
    );
}
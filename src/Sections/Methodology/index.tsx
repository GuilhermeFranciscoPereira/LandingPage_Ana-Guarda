import React from 'react';
import styles from '@/Sections/Methodology/Methodology.module.css';
import { FaComments, FaCommentDots, FaClipboardList, FaChartLine, FaUserShield, FaChalkboardTeacher } from 'react-icons/fa';

export default function Methodology(): React.ReactElement {
    return (
        <section id="metodologia" className={styles.methodologySection} data-aos="fade-up">
            <div className={styles.container}>
                <h2 className={styles.title}>Minha Metodologia</h2>
                <div className={styles.cards}>
                    <div className={styles.card} data-aos="fade-right">
                        <FaComments className={styles.icon} /><p>1 - Imersão na Conversação<br /><span>Simulações de situações reais para falar desde o início</span></p>
                    </div>
                    <div className={styles.card} data-aos="fade-left">
                        <FaCommentDots className={styles.icon} /><p>2 - Feedback Imediato<br /><span>Correção de pronúncia e dicas contextuais na hora</span></p>
                    </div>
                    <div className={styles.card} data-aos="fade-right">
                        <FaClipboardList className={styles.icon} /><p>3 - Revisão Ativa<br /><span>Quizzes e desafios semanais para fixar o aprendizado</span></p>
                    </div>
                    <div className={styles.card} data-aos="fade-left">
                        <FaChartLine className={styles.icon} /><p>4 - Progressão Personalizada<br /><span>Material e ritmo adaptados ao seu estilo de aprendizado</span></p>
                    </div>
                    <div className={styles.card} data-aos="fade-right">
                        <FaChalkboardTeacher className={styles.icon} /><p>5 - Prática Guiada<br /><span>Atividades aplicadas em cenários reais do dia a dia</span></p>
                    </div>
                    <div className={styles.card} data-aos="fade-left">
                        <FaUserShield className={styles.icon} /><p>6 - Suporte Contínuo<br /><span>Acompanhamento e mentoria para garantir seu progresso</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
}
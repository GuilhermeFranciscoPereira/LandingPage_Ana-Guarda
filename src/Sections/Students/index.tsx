import Image from 'next/image';
import styles from '@/Sections/Students/Students.module.css';

export default function Students(): React.ReactElement {
    return (
        <section className={styles.studentsSection} id='alunos'>
            <div className={styles.studentsContainer} data-aos="fade-up">
                <div className={styles.headlineStudents}>
                    <h2 className={styles.titleStudents}>Alunos</h2>
                    <span className={styles.descriptionHeadlineStudents}>Conheça as histórias de quem conquistou a fluência com aulas personalizadas!</span>
                </div>
                <div className={styles.studentsCards}>
                    <div className={styles.student} data-aos="fade-right">
                        <div className={styles.imageWrapper}>
                            <Image src={process.env.URL_PHOTO_STUDENT1 || '/assets/images/AboutWhoAmISection/photo_anaFlaviaGuarda.jpg'} alt="Foto do Guilherme" width={100} height={100} quality={100} />
                        </div>
                        <div className={styles.studentText}>
                            <div className={styles.contentTextStudent}>
                                <h3>Guilherme</h3>
                                <p>Em apenas 6 meses de aulas, o Guilherme deixou de se sentir inseguro ao falar e já participava de reuniões em inglês sem medo. Ele destaca como a prática constante e o feedback instantâneo o ajudaram a ganhar confiança e a usar expressões reais no trabalho.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.student} data-aos="fade-left">
                        <div className={styles.imageWrapper}>
                            <Image src={process.env.URL_PHOTO_STUDENT2 || '/assets/images/AboutWhoAmISection/photo_anaFlaviaGuarda.jpg'} alt="Foto do João" width={100} height={100} quality={100} />
                        </div>
                        <div className={styles.studentText}>
                            <div className={styles.contentTextStudent}>
                                <h3>João</h3>
                                <p>Depois de 4 meses de aulas, o João superou a dificuldade em entender nativos e passou no TOEFL com nota acima do esperado. Ele valoriza o método de revisão ativa e a simulação de entrevistas, que o prepararam para provas e conversas cotidianas.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.student} data-aos="fade-right">
                        <div className={styles.imageWrapper}>
                            <Image src={process.env.URL_PHOTO_STUDENT3 || '/assets/images/AboutWhoAmISection/photo_anaFlaviaGuarda.jpg'} alt="Foto do Pedro" width={100} height={100} quality={100} />
                        </div>
                        <div className={styles.studentText}>
                            <div className={styles.contentTextStudent}>
                                <h3>Pedro</h3>
                                <p>Em 3 meses, o Pedro deixou a timidez de lado e passou a se comunicar com facilidade em viagens. Ele destaca a flexibilidade de horários e o suporte contínuo, que fizeram toda a diferença para manter o ritmo e aplicar o inglês no dia a dia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
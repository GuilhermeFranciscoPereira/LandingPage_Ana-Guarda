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
                            <Image src="/assets/images/StudentsSection/Guilherme.jpg" alt="Foto do Guilherme" width={100} height={100} quality={100} />
                        </div>
                        <div className={styles.studentText}>
                            <div className={styles.contentTextStudent}>
                                <h3>Guilherme Pereira</h3>
                                <p>Em 2 meses, o Guilherme, que já falava bem mas travava e sentia falta de vocabulário para conversas mais longas, evoluiu muito. Com práticas focadas em conversação e estratégias de expansão de vocabulário, ele agora mantém diálogos fluentes e se expressa com naturalidade e confiança.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.student} data-aos="fade-left">
                        <div className={styles.imageWrapper}>
                            <Image src="/assets/images/StudentsSection/Vitoria.jpg" alt="Foto da Vitória" width={100} height={100} quality={100} />
                        </div>
                        <div className={styles.studentText}>
                            <div className={styles.contentTextStudent}>
                                <h3>Vitória Rossini</h3>
                                <p>Em 3 meses de aulas, a Vitória superou o medo e a vergonha de falar em inglês. Apesar de já compreender bem o idioma, ela travava na hora do diálogo. Com prática guiada e feedback constante, desenvolveu confiança e hoje conversa naturalmente com nativos, sem hesitar.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.student} data-aos="fade-right">
                        <div className={styles.imageWrapper}>
                            <Image src="/assets/images/StudentsSection/Marcos.jpg" alt="Foto do Marcos" width={100} height={100} quality={100} />
                        </div>
                        <div className={styles.studentText}>
                            <div className={styles.contentTextStudent}>
                                <h3>Antonio Marcos</h3>
                                <p>Em 4 meses de aulas, o Marcos aos 48 anos de idade, superou o medo de falar em inglês e a falta de ter alguém para praticar. Com paciência e suporte contínuo, ele agora conversa naturalmente, fez novas amizades internacionais online e não trava mais em diálogos!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
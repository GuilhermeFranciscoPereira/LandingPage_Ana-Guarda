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
                            <Image src="/assets/images/StudentsSection/Lucas_Silva.jpg" alt="Foto do Lucas Silva" width={100} height={100} quality={100} />
                        </div>
                        <div className={styles.studentText}>
                            <div className={styles.contentTextStudent}>
                                <h3>Lucas Silva</h3>
                                <p>Em 2 meses, o Lucas, que já falava bem mas travava e sentia falta de vocabulário para conversas mais longas, evoluiu muito. Com práticas focadas em conversação e estratégias de expansão de vocabulário, ele agora mantém diálogos fluentes e se expressa com naturalidade e confiança.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.student} data-aos="fade-left">
                        <div className={styles.imageWrapper}>
                            <Image src="/assets/images/StudentsSection/Ana_Soares.jpg" alt="Foto da Ana Soares" width={100} height={100} quality={100} />
                        </div>
                        <div className={styles.studentText}>
                            <div className={styles.contentTextStudent}>
                                <h3>Ana Soares</h3>
                                <p>Em 3 meses de aulas, a Ana superou o medo e a vergonha de falar em inglês. Apesar de já compreender bem o idioma, ela travava na hora do diálogo. Com prática guiada e feedback constante, desenvolveu confiança e hoje conversa naturalmente com nativos, sem hesitar.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.student} data-aos="fade-right">
                        <div className={styles.imageWrapper}>
                            <Image src="/assets/images/StudentsSection/Marcelo_Rocha.jpg" alt="Foto do Marcelo Rocha" width={100} height={100} quality={100} />
                        </div>
                        <div className={styles.studentText}>
                            <div className={styles.contentTextStudent}>
                                <h3>Marcelo Rocha</h3>
                                <p>Marcelo aos 48 anos de idade, conta com a Ana para realizar suas viagens internacionais, tendo alguém para conversar mas também lhe auxiliar em momentos que não compreende a lingua inglesa, ou necessita dizer algo e não sabe como.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
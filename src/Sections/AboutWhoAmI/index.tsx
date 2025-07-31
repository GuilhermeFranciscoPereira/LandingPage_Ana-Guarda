'use client';
import Image from 'next/image';
import useAboutWhoAmI from '@/hooks/Sections/useAboutWhoAmI';
import styles from '@/Sections/AboutWhoAmI/AboutWhoAmI.module.css';

export default function AboutWhoAmI(): React.ReactElement {
    useAboutWhoAmI();

    return (
        <section id="sobre" className={styles.aboutSection}>
            <div className={styles.containerAbout}>
                <div className={styles.headlineAbout} data-aos="fade-up">
                    <div className={styles.headlineScroll} id="headline-scroll">
                        <span className={styles.bold}>ANA</span>
                        <span className={styles.divisor}></span>
                        <span className={styles.light}>FLÁVIA</span>
                        <span className={styles.divisor}></span>
                        <span className={styles.bold}>ANA</span>
                        <span className={styles.divisor}></span>
                        <span className={styles.light}>FLÁVIA</span>
                        <span className={styles.divisor}></span>
                        <span className={styles.bold}>ANA</span>
                        <span className={styles.divisor}></span>
                        <span className={styles.light}>FLÁVIA</span>
                        <span className={styles.divisor}></span>
                    </div>
                </div>
                <div className={styles.contentAbout}>
                    <div className={styles.leftAbout} data-aos="fade-right">
                        <div className={styles.textAbout}>
                            <h2>Quem é <span>Ana Flávia Guarda?</span></h2>
                            <h3>
                                <div data-aos="fade-left">
                                    Prazer, eu sou a Ana!, estudo inglês há muitos anos e, ao longo desse tempo, tive muitas experiências inclusive internacionais que transformaram minha forma de aprender — e de ensinar.
                                    Entendi, na prática, que a conversação é o que realmente aproxima a gente da fluência e da autoconfiança com o idioma.
                                </div>
                                <br />
                                <div data-aos="fade-right">
                                    Por isso, criei essas aulas com um objetivo claro: oferecer um ambiente leve, respeitoso e livre de julgamentos, onde você possa praticar, errar, se soltar e, acima de tudo, evoluir.
                                    Aqui, cada palavra falada é uma conquista — no seu ritmo, do seu jeito.
                                </div>
                            </h3>
                        </div>
                    </div>
                    <div className={styles.rightAbout} data-aos="fade-left">
                        <div className={`${styles.container} ${styles.noselect}`}>
                            <div className={styles.canvas}>
                                {Array.from({ length: 25 }, (_, i) => (
                                    <div
                                        key={i}
                                        className={`${styles.tracker} ${styles[`tr-${i + 1}`]}`}
                                    />
                                ))}
                                <div className={styles.card}>
                                    <Image
                                        src={'/assets/images/AboutWhoAmISection/photo_anaFlaviaGuarda.jpg'}
                                        width={2000}
                                        height={2000}
                                        alt="Foto do rosto da Ana Flávia Guarda"
                                        quality={100}
                                        className={styles.image}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
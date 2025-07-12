'use client';
import Image from 'next/image';
import useAboutWhoAmI from '@/hooks/Sections/useAboutWhoAmI';
import photo_anaFlaviaGuarda from '@/assets/photo_anaFlaviaGuarda.jpg';
import styles from '@/Sections/AboutWhoAmI/AboutWhoAmI.module.css';

export default function AboutWhoAmI(): React.ReactElement {
    useAboutWhoAmI();

    return (
        <section id="sobre" className={styles.aboutSection}>
            <div className={styles.containerAbout}>
                <div className={styles.headlineAbout} data-aos="fade-up" data-aos-duration="1500">
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
                    <div className={styles.leftAbout} data-aos="fade-right" data-aos-duration="1500">
                        <div className={styles.textAbout}>
                            <h2>Quem é <span>Ana Flávia Guarda?</span></h2>
                            <h3>
                                <div data-aos="fade-left">
                                    Eu sou Ana Flávia Guarda, tenho 20 anos e já visitei os Estados Unidos duas vezes, onde vivi experiências reais de imersão no idioma. Apaixonada por ensinar, vivo o inglês na prática e trago para cada aula situações cotidianas que estimulam você a falar com naturalidade e confiança.
                                </div>
                                <br />
                                <div data-aos="fade-right">
                                    Com paciência e dedicação, meu método valoriza a conversação acima da gramática engessada. Crio um ambiente acolhedor, onde cada erro se torna oportunidade de crescimento e cada palavra pronunciada é um passo rumo à verdadeira fluência. Aqui, você aprende a se comunicar de corpo e alma.
                                </div>
                            </h3>
                        </div>
                    </div>
                    <div className={styles.rightAbout} data-aos="fade-left" data-aos-duration="1500">
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
                                        src={photo_anaFlaviaGuarda}
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
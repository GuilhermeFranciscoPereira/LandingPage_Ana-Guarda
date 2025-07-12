import TypingWords from './TypingWords';
import styles from '@/Sections/MainSection/MainSection.module.css';

export default function MainSection(): React.ReactElement {
    return (
        <main className={styles.main} data-aos="fade-up" data-aos-duration="3000">
            <div className={styles.firstViewMainDiv}>
                <h1>Seu Passaporte para o Mundo</h1>
                <h2>Aprenda inglês prático com foco em conversação</h2>
            </div>
            <div className={styles.additionalText} data-aos="fade-up" data-aos-delay="200" data-aos-offset="0" data-aos-duration="3000">
                <TypingWords />
            </div>
            <a href="#sobre">
                <button className={styles.buttonAbout} data-aos="fade-up" data-aos-delay="400" data-aos-offset="0" data-aos-duration="3000">
                    <span>Quem sou eu?</span>
                    <svg width="15px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
            </a>
        </main>
    );
}

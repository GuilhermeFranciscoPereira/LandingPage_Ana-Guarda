import styles from '@/components/Footer/Footer.module.css';

export default function Footer(): React.ReactElement {
    return (
        <footer className={styles.footerSection}>
            <div className={styles.footerContainer}>
                <p className={styles.footerText}>© {new Date().getFullYear()} Ana Flávia Guarda. Todos os direitos reservados.</p>
                <p className={styles.footerText}>
                    Desenvolvido por{' '}
                    <a
                        href="https://www.linkedin.com/in/guilherme-francisco-pereira-4a3867283"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.footerLink}
                    >
                        Guilherme Francisco Pereira (yLottus)
                    </a>
                    .
                </p>
            </div>
        </footer>
    );
}

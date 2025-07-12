'use client';
import useHeader from '@/hooks/Header';
import styles from '@/components/Header/Header.module.css';
import ButtonDarkMode from '@/components/Buttons/ButtonDarkMode/index';

export default function Header(): React.ReactNode {
    const { modalIsOpen, doAnimation, fadeOut, toSetModalIsOpen } = useHeader();

    return (
        <header className={styles.header} id='inicio'>
            <section className={styles.menuClosed}>
                <label className={styles.hamburguerToToggleSection}>
                    <input type="checkbox" id="menuToggle" onChange={() => { toSetModalIsOpen() }} checked={doAnimation}></input>
                    <svg viewBox="0 0 32 32">
                        <path className={styles.lineTopBottom}
                            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22">
                        </path>
                        <path className={styles.line} d="M7 16 27 16"></path>
                    </svg>
                </label>
            </section>
            {modalIsOpen && <section className={styles.menuOpen}>
                <nav className={fadeOut ? styles.fadeOut : ''}>
                    <a href="#inicio" onClick={() => { toSetModalIsOpen() }}>INÍCIO</a>
                    <a href="#sobre" onClick={() => { toSetModalIsOpen() }}>SOBRE</a>
                    <a href="#SESSÃO" onClick={() => { toSetModalIsOpen() }}>SESSÃO</a>
                    <a href="#SESSÃO" onClick={() => { toSetModalIsOpen() }}>SESSÃO</a>
                    <a href="#SESSÃO" onClick={() => { toSetModalIsOpen() }}>SESSÃO</a>
                </nav>
            </section>}

            <div>
                <ButtonDarkMode />
            </div>
        </header>
    )
}
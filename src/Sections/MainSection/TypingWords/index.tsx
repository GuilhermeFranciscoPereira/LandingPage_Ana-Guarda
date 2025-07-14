'use client';
import useMainSection from '@/hooks/Sections/useMainSection';
import styles from '@/Sections/MainSection/MainSection.module.css';

export default function TypingWords(): React.ReactElement {
  const { currentWord } = useMainSection();

  return (
    <p>Não ofereço apenas aulas, eu entrego: <span className={styles.typingEffect}><span className={styles.hidenMobile}>..</span>{currentWord}</span></p>
  );
}

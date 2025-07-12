'use client';
import useMainSection from '@/hooks/useMainSection';
import styles from '@/components/MainSection/MainSection.module.css';

export default function TypingWords(): React.ReactNode {
  const { currentWord } = useMainSection();

  return (
    <p>Não ofereço apenas aulas, eu entrego: <span className={styles.typingEffect}>{currentWord}</span></p>
  );
}

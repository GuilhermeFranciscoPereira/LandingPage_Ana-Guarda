import { useState, useEffect } from 'react';

type useMainSectionProps = {
  currentWord: string;
}

const wordsToSwitch = [
  "Pronúncia impecável",
  "Fluência real",
  "Feedback personalizado",
  "Confiança na fala",
  "Conversação natural",
  "Segurança ao falar",
  "Sucesso profissional"
];

export default function useMainSection(): useMainSectionProps {
  const [index, setIndex] = useState<number>(0);
  const [currentWord, setCurrentWord] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    let timerToTheSetTimeOut: NodeJS.Timeout;

    function handleTyping() {
      if (isDeleting) {
        setCurrentWord((prev) => prev.slice(0, -1));
      } else {
        setCurrentWord(wordsToSwitch[index].slice(0, currentWord.length + 1));
      }

      if (!isDeleting && currentWord === wordsToSwitch[index]) {
        timerToTheSetTimeOut = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentWord === "") {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % wordsToSwitch.length);
      }
    }

    timerToTheSetTimeOut = setTimeout(handleTyping, isDeleting ? 50 : 100);

    return () => clearTimeout(timerToTheSetTimeOut);
  }, [currentWord, isDeleting, index]);

  return { currentWord };
}
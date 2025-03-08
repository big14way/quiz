import { useState } from 'react';
import questions from '../questions';

const useQuiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setCurrentIndex(0);
    setScore(0);
  };

  const selectAnswer = (answer: string) => {
    const correct = answer === questions[currentIndex].answer;
    if (correct) setScore((prev) => prev + 1);
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      return false; // Quiz continues
    }
    return true; // Quiz completed
  };

  const restartQuiz = () => startQuiz();
  const quitQuiz = () => {};

  return {
    currentQuestion: questions[currentIndex],
    selectAnswer,
    nextQuestion,
    score,
    startQuiz,
    restartQuiz,
    quitQuiz,
  };
};

export default useQuiz;
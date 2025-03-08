import React, { useState } from 'react';
import StartButton from './components/StartButton';
import QuizBox from './components/QuizBox';
import questions from './questions';

const App: React.FC = () => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleStartQuiz = () => {
    setIsQuizStarted(true);
    setScore(0);
    setCurrentIndex(0);
    setQuizCompleted(false);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleSelectAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleTimeUp = () => {
    if (currentIndex === questions.length - 1) {
      setQuizCompleted(true);
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#007bff',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {!isQuizStarted && !quizCompleted && <StartButton onClick={handleStartQuiz} />}
      {isQuizStarted && !quizCompleted && (
        <QuizBox
          question={questions[currentIndex]}
          onNext={handleNext}
          onSelectAnswer={handleSelectAnswer}
          onTimeUp={handleTimeUp}
        />
      )}
      {quizCompleted && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>Quiz Completed!</h2>
          <p>
            Your score: {score} out of {questions.length}
          </p>
          <button
            onClick={handleStartQuiz}
            style={{ marginTop: '20px', padding: '10px 20px' }}
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
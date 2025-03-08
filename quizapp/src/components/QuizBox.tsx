import React, { useState, useEffect } from 'react';

type Question = {
  question: string;
  options: string[];
  answer: string;
};

type QuizBoxProps = {
  question: Question;
  onNext: () => void;
  onSelectAnswer: (isCorrect: boolean) => void;
  onTimeUp: () => void;
};

const QuizBox: React.FC<QuizBoxProps> = ({ question, onNext, onSelectAnswer, onTimeUp }) => {
  // State variables
  const [timeLeft, setTimeLeft] = useState(10); // 10 seconds per question
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [timeUp, setTimeUp] = useState(false);

  // Reset state when the question changes
  useEffect(() => {
    setTimeLeft(10);          // Restart the timer
    setSelectedOption(null);  // Clear selected option
    setIsCorrect(false);      // Reset correctness flag
    setTimeUp(false);         // Reset time-up flag
  }, [question]); // Runs whenever the question prop changes

  // Timer logic
  useEffect(() => {
    if (timeLeft > 0 && !selectedOption && !timeUp) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer); // Cleanup on unmount or re-run
    } else if (timeLeft <= 0 && !timeUp) {
      setTimeUp(true);
      onSelectAnswer(false); // Mark as incorrect when time runs out
      onTimeUp();            // Notify parent component
    }
  }, [timeLeft, selectedOption, timeUp, onSelectAnswer, onTimeUp]);

  // Handle option selection
  const handleOptionClick = (option: string) => {
    if (selectedOption || timeUp) return; // Prevent clicking after answer/time-up
    setSelectedOption(option);
    const correct = option === question.answer;
    setIsCorrect(correct);
    onSelectAnswer(correct);
  };

  return (
    <div>
      <p>Time Left: {timeLeft}s</p>
      <h2>{question.question}</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {question.options.map((option) => (
          <li
            key={option}
            onClick={() => handleOptionClick(option)}
            style={{
              padding: '10px',
              margin: '5px 0',
              backgroundColor:
                selectedOption === option
                  ? isCorrect
                    ? 'lightgreen'  // Correct answer
                    : 'lightcoral'  // Wrong answer
                  : timeUp && option === question.answer
                  ? 'lightyellow'   // Highlight correct answer when time’s up
                  : 'aliceblue',    // Default
              cursor: selectedOption || timeUp ? 'default' : 'pointer',
            }}
          >
            {option}
            {selectedOption === option && (
              <span>{isCorrect ? ' ✅ Correct' : ' ❌ Wrong'}</span>
            )}
          </li>
        ))}
      </ul>
      {(selectedOption || timeUp) && (
        <div>
          <p>
            Correct Answer: <strong>{question.answer}</strong>
          </p>
          <button
            onClick={onNext}
            style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizBox;
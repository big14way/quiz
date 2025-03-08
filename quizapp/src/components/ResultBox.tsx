import React from 'react';
import questions from '../questions';

interface ResultBoxProps {
  score: number;
  onRestart: () => void;
  onQuit: () => void;
}

const ResultBox: React.FC<ResultBoxProps> = ({ score, onRestart, onQuit }) => {
  let message;
  if (score > 15) {
    message = `and congrats!, You got ${score} out of ${questions.length}`;
  } else if (score > 10) {
    message = `and nice, You got ${score} out of ${questions.length}`;
  } else {
    message = `and sorry, you got only ${score} out of ${questions.length}`;
  }

  return (
    <div className="result_box activeResult">
      <div className="icon">🏆</div>
      <div className="complete_text">You've completed the Quiz!</div>
      <div className="score_text">
        <span>{message}</span>
      </div>
      <div className="buttons">
        <button onClick={onRestart}>Restart Quiz</button>
        <button onClick={onQuit}>Quit Quiz</button>
      </div>
    </div>
  );
};

export default ResultBox;
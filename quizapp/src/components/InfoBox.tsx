import React from 'react';

interface InfoBoxProps {
  onExit: () => void;
  onContinue: () => void;
}

const InfoBox: React.FC<InfoBoxProps> = ({ onExit, onContinue }) => {
  return (
    <div className="info_box activeInfo">
      <div className="info_title">
        <span>Some Rules of this Quiz</span>
      </div>
      <div className="info_list">
        <div className="info">
          1. You will have only <span>15 seconds</span> per question.
        </div>
        <div className="info">
          2. Once you select your answer, it can't be undone.
        </div>
        <div className="info">
          3. You can't select an option once time runs out.
        </div>
      </div>
      <div className="buttons">
        <button className="quit" onClick={onExit}>
          Exit Quiz
        </button>
        <button className="restart" onClick={onContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default InfoBox;
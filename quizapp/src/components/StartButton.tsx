import React from 'react';

type StartButtonProps = {
  onClick: () => void;
};

const StartButton: React.FC<StartButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '20px 40px',
        fontSize: '18px',
        backgroundColor: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}
    >
      Start Quiz
    </button>
  );
};

export default StartButton;
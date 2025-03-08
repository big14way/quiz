import { useState, useEffect, useRef } from 'react';

interface UseTimerProps {
  initialTime: number;
  onTimeOut: () => void;
}

const useTimer = ({ initialTime, onTimeOut }: UseTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev > 0) {
            return prev - 1;
          } else {
            clearInterval(timerRef.current!);
            onTimeOut();
            setIsRunning(false);
            return 0;
          }
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning, onTimeOut]);

  const startTimer = () => {
    setTimeLeft(initialTime);
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  return { timeLeft, startTimer, stopTimer };
};

export default useTimer;
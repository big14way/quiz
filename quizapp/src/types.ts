export interface Question {
    numb: number;
    question: string;
    answer: string;
    options: string[];
  }
  
  export interface Answer {
    question: number;
    answer: string;
    correct: boolean;
  }
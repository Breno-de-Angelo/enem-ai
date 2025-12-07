"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { EnemQuestion } from "@/lib/data/enem-questions";

interface QuestionContextType {
  currentQuestion: EnemQuestion | null;
  setCurrentQuestion: (question: EnemQuestion | null) => void;
  userProgress: {
    totalQuestions: number;
    correctAnswers: number;
    currentStreak: number;
  };
  updateProgress: (isCorrect: boolean) => void;
}

const QuestionContext = createContext<QuestionContextType | undefined>(
  undefined
);

export function QuestionProvider({ children }: { children: ReactNode }) {
  const [currentQuestion, setCurrentQuestion] = useState<EnemQuestion | null>(
    null
  );
  const [userProgress, setUserProgress] = useState({
    totalQuestions: 0,
    correctAnswers: 0,
    currentStreak: 0,
  });

  const updateProgress = (isCorrect: boolean) => {
    setUserProgress((prev) => ({
      totalQuestions: prev.totalQuestions + 1,
      correctAnswers: isCorrect
        ? prev.correctAnswers + 1
        : prev.correctAnswers,
      currentStreak: isCorrect ? prev.currentStreak + 1 : 0,
    }));
  };

  return (
    <QuestionContext.Provider
      value={{
        currentQuestion,
        setCurrentQuestion,
        userProgress,
        updateProgress,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}

export function useQuestion() {
  const context = useContext(QuestionContext);
  if (context === undefined) {
    throw new Error("useQuestion must be used within a QuestionProvider");
  }
  return context;
}


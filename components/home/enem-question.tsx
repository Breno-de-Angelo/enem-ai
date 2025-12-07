"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getRandomQuestion } from "@/lib/data/enem-questions";
import { CheckCircle2, XCircle } from "lucide-react";
import { useQuestion } from "./question-context";

export function EnemQuestion() {
  const { currentQuestion, setCurrentQuestion, updateProgress } = useQuestion();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    loadNewQuestion();
  }, []);

  const loadNewQuestion = () => {
    const newQuestion = getRandomQuestion();
    setCurrentQuestion(newQuestion);
    setSelectedAnswer(null);
    setSubmitted(false);
  };

  const handleSubmit = () => {
    if (selectedAnswer && currentQuestion) {
      setSubmitted(true);
      const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
      updateProgress(isCorrect);
    }
  };

  const isCorrect = submitted && selectedAnswer === currentQuestion?.correctAnswer;

  if (!currentQuestion) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Carregando questão...</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col items-center justify-center p-6">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <CardTitle className="text-2xl">{currentQuestion.subject}</CardTitle>
            <span className="text-sm text-muted-foreground capitalize">
              {currentQuestion.difficulty}
            </span>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg leading-relaxed">{currentQuestion.question}</p>

          <div className="space-y-3">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedAnswer === option.label;
              const isCorrectOption = option.label === currentQuestion.correctAnswer;
              const showResult = submitted && isCorrectOption;

              return (
                <button
                  key={option.label}
                  onClick={() => !submitted && setSelectedAnswer(option.label)}
                  disabled={submitted}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    isSelected
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50"
                  } ${
                    showResult
                      ? "border-green-500 bg-green-500/10"
                      : ""
                  } ${
                    submitted && isSelected && !isCorrectOption
                      ? "border-red-500 bg-red-500/10"
                      : ""
                  } disabled:cursor-not-allowed`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-semibold">{option.label})</span>
                    <span className="flex-1">{option.text}</span>
                    {submitted && showResult && (
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                    )}
                    {submitted &&
                      isSelected &&
                      !isCorrectOption &&
                      isSelected && (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                  </div>
                </button>
              );
            })}
          </div>

          {submitted && currentQuestion.explanation && (
            <div className="p-4 rounded-lg bg-muted">
              <p className="font-semibold mb-2">Explicação:</p>
              <p className="text-sm">{currentQuestion.explanation}</p>
            </div>
          )}

          <div className="flex gap-3">
            {!submitted ? (
              <Button
                onClick={handleSubmit}
                disabled={!selectedAnswer}
                className="flex-1"
                size="lg"
              >
                Enviar Resposta
              </Button>
            ) : (
              <Button
                onClick={loadNewQuestion}
                className="flex-1"
                size="lg"
                variant="default"
              >
                Próxima Questão
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


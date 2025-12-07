"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Bot, User } from "lucide-react";
import type { EnemQuestion } from "@/lib/data/enem-questions";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatPanelProps {
  currentQuestion: EnemQuestion | null;
  userProgress: {
    totalQuestions: number;
    correctAnswers: number;
    currentStreak: number;
  };
}

export function ChatPanel({ currentQuestion, userProgress }: ChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize welcome message on client side only
  useEffect(() => {
    if (!isInitialized) {
      setMessages([
        {
          id: "1",
          role: "assistant",
          content:
            "Olá! Sou seu tutor de IA para o ENEM. Posso ajudá-lo a entender questões, explicar conceitos e acompanhar seu progresso. Como posso ajudar?",
          timestamp: new Date(),
        },
      ]);
      setIsInitialized(true);
    }
  }, [isInitialized]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: generateAIResponse(input, currentQuestion, userProgress),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const generateAIResponse = (
    userInput: string,
    question: EnemQuestion | null,
    progress: ChatPanelProps["userProgress"]
  ): string => {
    const lowerInput = userInput.toLowerCase();

    if (lowerInput.includes("questão") || lowerInput.includes("pergunta")) {
      if (question) {
        return `Estou vendo que você está trabalhando em uma questão de ${question.subject}. A questão é sobre: "${question.question.substring(0, 100)}...". Você gostaria de uma dica ou explicação sobre algum conceito específico?`;
      }
      return "Não há uma questão ativa no momento. Quando você começar uma nova questão, posso ajudá-lo!";
    }

    if (lowerInput.includes("progresso") || lowerInput.includes("estatística")) {
      const accuracy =
        progress.totalQuestions > 0
          ? Math.round(
              (progress.correctAnswers / progress.totalQuestions) * 100
            )
          : 0;
      if (progress.totalQuestions > 0) {
        return `Seu progresso atual:\n- Total de questões: ${progress.totalQuestions}\n- Acertos: ${progress.correctAnswers}\n- Taxa de acerto: ${accuracy}%\n- Sequência atual: ${progress.currentStreak} questões corretas\n\nContinue assim! 🎯`;
      }
      return "Você ainda não respondeu questões suficientes para ter estatísticas. Continue praticando!";
    }

    if (lowerInput.includes("ajuda") || lowerInput.includes("help")) {
      return "Posso ajudá-lo com:\n- Explicações sobre questões do ENEM\n- Conceitos de diferentes matérias\n- Dicas de estudo\n- Acompanhamento do seu progresso\n\nO que você gostaria de saber?";
    }

    return "Entendi sua pergunta. Posso ajudá-lo a entender melhor a questão atual ou explicar conceitos relacionados. O que você gostaria de saber?";
  };

  return (
    <div className="h-full flex flex-col border-l border-border bg-background">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-primary" />
          <h2 className="font-semibold">Tutor IA</h2>
        </div>
        {currentQuestion && (
          <p className="text-xs text-muted-foreground mt-1">
            Questão: {currentQuestion.subject} - {currentQuestion.difficulty}
          </p>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {message.role === "assistant" && (
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Bot className="h-4 w-4 text-primary" />
              </div>
            )}
            <Card
              className={`max-w-[80%] ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : ""
              }`}
            >
              <CardContent className="p-3">
                <p className="text-sm whitespace-pre-wrap">
                  {message.content}
                </p>
              </CardContent>
            </Card>
            {message.role === "user" && (
              <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                <User className="h-4 w-4" />
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Digite sua pergunta..."
            className="flex-1"
          />
          <Button onClick={handleSend} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}


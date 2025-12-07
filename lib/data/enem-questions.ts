export interface EnemQuestion {
  id: string;
  subject: string;
  difficulty: "easy" | "medium" | "hard";
  question: string;
  options: {
    label: string;
    text: string;
  }[];
  correctAnswer: string;
  explanation?: string;
}

export const enemQuestions: EnemQuestion[] = [
  {
    id: "1",
    subject: "Matemática",
    difficulty: "medium",
    question:
      "Uma empresa de delivery cobra uma taxa fixa de R$ 5,00 mais R$ 2,00 por quilômetro rodado. Qual é a função que representa o valor total a ser pago (y) em função da distância percorrida (x) em quilômetros?",
    options: [
      { label: "A", text: "y = 5x + 2" },
      { label: "B", text: "y = 2x + 5" },
      { label: "C", text: "y = 7x" },
      { label: "D", text: "y = 5x - 2" },
      { label: "E", text: "y = 2x - 5" },
    ],
    correctAnswer: "B",
    explanation:
      "A função é y = 2x + 5, onde 2 é o valor por quilômetro e 5 é a taxa fixa.",
  },
  {
    id: "2",
    subject: "Português",
    difficulty: "easy",
    question:
      "Assinale a alternativa em que todas as palavras estão grafadas corretamente:",
    options: [
      { label: "A", text: "exceção, excessão, concessão" },
      { label: "B", text: "excessão, exceção, concessão" },
      { label: "C", text: "exceção, excessão, concensão" },
      { label: "D", text: "exceção, exceção, concessão" },
      { label: "E", text: "excessão, excessão, concensão" },
    ],
    correctAnswer: "D",
    explanation:
      "A grafia correta é: exceção (com 'c'), exceção (com 'c'), concessão (com 'c' e 'ss').",
  },
  {
    id: "3",
    subject: "História",
    difficulty: "hard",
    question:
      "O movimento conhecido como 'Inconfidência Mineira' ocorreu em qual período histórico do Brasil?",
    options: [
      { label: "A", text: "Período Colonial, em 1789" },
      { label: "B", text: "Período Imperial, em 1822" },
      { label: "C", text: "Primeira República, em 1889" },
      { label: "D", text: "Era Vargas, em 1930" },
      { label: "E", text: "Regime Militar, em 1964" },
    ],
    correctAnswer: "A",
    explanation:
      "A Inconfidência Mineira ocorreu em 1789, durante o Período Colonial, como uma tentativa de independência do Brasil.",
  },
  {
    id: "4",
    subject: "Biologia",
    difficulty: "medium",
    question:
      "Qual é o processo pelo qual as plantas convertem luz solar em energia química?",
    options: [
      { label: "A", text: "Respiração celular" },
      { label: "B", text: "Fotossíntese" },
      { label: "C", text: "Fermentação" },
      { label: "D", text: "Quimiossíntese" },
      { label: "E", text: "Transpiração" },
    ],
    correctAnswer: "B",
    explanation:
      "A fotossíntese é o processo pelo qual as plantas convertem luz solar, água e dióxido de carbono em glicose e oxigênio.",
  },
  {
    id: "5",
    subject: "Química",
    difficulty: "medium",
    question:
      "Qual é o número atômico do elemento químico que possui 6 prótons no núcleo?",
    options: [
      { label: "A", text: "4" },
      { label: "B", text: "5" },
      { label: "C", text: "6" },
      { label: "D", text: "7" },
      { label: "E", text: "8" },
    ],
    correctAnswer: "C",
    explanation:
      "O número atômico é igual ao número de prótons. Portanto, um elemento com 6 prótons tem número atômico 6, que é o carbono.",
  },
];

export function getRandomQuestion(): EnemQuestion {
  const randomIndex = Math.floor(Math.random() * enemQuestions.length);
  return enemQuestions[randomIndex];
}


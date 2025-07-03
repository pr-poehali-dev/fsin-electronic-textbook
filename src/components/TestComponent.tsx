import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Какой федеральный орган осуществляет руководство ФСИН?",
    options: [
      "Министерство внутренних дел",
      "Министерство юстиции",
      "Министерство обороны",
      "Правительство РФ",
    ],
    correct: 1,
  },
  {
    id: 2,
    question: "Что означает аббревиатура ИК?",
    options: [
      "Исправительный комплекс",
      "Исправительная колония",
      "Исправительная коммиссия",
      "Исправительная комната",
    ],
    correct: 1,
  },
  {
    id: 3,
    question: "Какое минимальное условие для подачи ходатайства об УДО?",
    options: [
      "Отбытие 1/2 назначенного наказания",
      "Отбытие 1/3 назначенного наказания",
      "Отбытие 2/3 назначенного наказания",
      "Отбытие 3/4 назначенного наказания",
    ],
    correct: 1,
  },
  {
    id: 4,
    question:
      "Какое максимальное количество свиданий в год может получить осужденный в ИК общего режима?",
    options: [
      "2 кратковременных и 1 продолжительное",
      "3 кратковременных и 2 продолжительных",
      "4 кратковременных и 3 продолжительных",
      "6 кратковременных и 4 продолжительных",
    ],
    correct: 3,
  },
  {
    id: 5,
    question:
      "Какое максимальное взыскание может быть наложено за нарушение режима содержания?",
    options: [
      "15 суток штрафного изолятора",
      "30 суток помещения в ПКТ",
      "45 суток штрафного изолятора",
      "60 суток помещения в ПКТ",
    ],
    correct: 0,
  },
];

const TestComponent = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correct ? 1 : 0);
    }, 0);
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setIsStarted(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (!isStarted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="GraduationCap" size={24} />
            Тест по теме ФСИН
          </CardTitle>
          <CardDescription>
            Проверьте свои знания, ответив на 5 вопросов
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <Icon
              name="Play"
              size={48}
              className="mx-auto mb-4 text-blue-500"
            />
            <p className="text-lg mb-4">
              Тест содержит 5 вопросов по основам ФСИН
            </p>
            <p className="text-sm text-gray-600 mb-6">
              На каждый вопрос дано 4 варианта ответа
            </p>
            <Button
              onClick={() => setIsStarted(true)}
              className="bg-blue-500 hover:bg-blue-600"
            >
              Начать тест
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const percentage = (score / questions.length) * 100;

    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Trophy" size={24} />
            Результаты теста
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <div className="text-6xl mb-4">
              {percentage >= 80 ? "🎉" : percentage >= 60 ? "😊" : "😔"}
            </div>
            <h3 className="text-2xl font-bold mb-2">
              Вы набрали {score} из {questions.length} баллов
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Оценка:{" "}
              {percentage >= 80
                ? "Отлично!"
                : percentage >= 60
                  ? "Хорошо!"
                  : "Нужно подтянуть знания"}
            </p>

            <div className="space-y-4 mb-6">
              <h4 className="font-semibold">Правильные ответы:</h4>
              {questions.map((question, index) => (
                <div
                  key={question.id}
                  className="text-left bg-gray-50 p-3 rounded-lg"
                >
                  <p className="font-medium text-sm mb-1">
                    {index + 1}. {question.question}
                  </p>
                  <p className="text-sm text-green-600">
                    Правильный ответ: {question.options[question.correct]}
                  </p>
                  {selectedAnswers[index] !== question.correct && (
                    <p className="text-sm text-red-600">
                      Ваш ответ: {question.options[selectedAnswers[index]]}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <Button
              onClick={resetTest}
              className="bg-blue-500 hover:bg-blue-600"
            >
              Пройти тест снова
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const question = questions[currentQuestion];

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center mb-4">
          <CardTitle className="flex items-center gap-2">
            <Icon name="HelpCircle" size={24} />
            Вопрос {currentQuestion + 1} из {questions.length}
          </CardTitle>
          <Button variant="outline" size="sm" onClick={resetTest}>
            Завершить тест
          </Button>
        </div>
        <Progress value={progress} className="mb-4" />
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <h3 className="text-lg font-medium">{question.question}</h3>

          <RadioGroup
            value={selectedAnswers[currentQuestion]?.toString() || ""}
            onValueChange={(value) =>
              handleAnswerSelect(currentQuestion, parseInt(value))
            }
          >
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={index.toString()}
                  id={`q${currentQuestion}-${index}`}
                />
                <Label
                  htmlFor={`q${currentQuestion}-${index}`}
                  className="flex-1 cursor-pointer"
                >
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>

          <div className="flex justify-between pt-6">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Назад
            </Button>

            <Button
              onClick={handleNext}
              disabled={selectedAnswers[currentQuestion] === undefined}
              className="bg-blue-500 hover:bg-blue-600"
            >
              {currentQuestion === questions.length - 1 ? "Завершить" : "Далее"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestComponent;

import { useState } from "react";

const questionsData = [
  { id: 1, text: "What is React?", options: ["Library", "Framework", "Language", "Tool"] },
  { id: 2, text: "What is Tailwind?", options: ["CSS Framework", "JavaScript Library", "Database", "Compiler"] },
  { id: 3, text: "What is JSX?", options: ["Syntax Extension", "Programming Language", "Database", "Tool"] },
  { id: 4, text: "Which hook is used for state?", options: ["useState", "useEffect", "useRef", "useContext"] },
  { id: 5, text: "What does useEffect do?", options: ["Handles Side Effects", "Manages State", "Creates Components", "Styles Components"] },
  { id: 6, text: "What is the virtual DOM?", options: ["JavaScript Representation", "HTML Copy", "Database", "API"] },
  { id: 7, text: "What is Next.js?", options: ["React Framework", "JavaScript Library", "CSS Tool", "API"] },
  { id: 8, text: "What is useRef used for?", options: ["DOM Manipulation", "State Management", "API Calls", "Styling"] },
];

export default function QuestionPage() {
  const [answeredCount, setAnsweredCount] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAnswer = (questionId, option) => {
    if (selectedAnswers[questionId]) return;

    setSelectedAnswers((prev) => ({ ...prev, [questionId]: option }));
    setAnsweredCount((prev) => prev + 1);
    setCurrentIndex((prev) => prev + 2);
  };

  const progress = (answeredCount / questionsData.length) * 100;
  const currentQuestions = questionsData.slice(currentIndex, currentIndex + 2);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div className="h-full bg-blue-500 transition-all" style={{ width: `${progress}%` }}></div>
      </div>

      {currentQuestions.map((q) => (
        <div key={q.id} className="mb-6">
          <h3 className="text-lg font-semibold mb-2">{q.text}</h3>
          <div className="flex flex-col gap-2">
            {q.options.map((option) => (
              <button
                key={option}
                className={`py-2 px-4 border rounded ${
                  selectedAnswers[q.id] === option ? "bg-blue-500 text-white" : "bg-gray-100"
                }`}
                onClick={() => handleAnswer(q.id, option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ))}

      {answeredCount === questionsData.length && (
        <button className="w-full mt-4 py-2 bg-green-500 text-white font-semibold rounded">
          Next Step
        </button>
      )}
    </div>
  );
}

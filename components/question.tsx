"use client";

import { motion, AnimatePresence } from "framer-motion";
import { getRandomQuestion } from "@/lib/getRandomQuestions";
import { useState } from "react";

export default function Question() {
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState<number | undefined>(undefined);

  const handleNewQuestion = () => {
    const { question, category } = getRandomQuestion(level);
    setQuestion(question);
    setCategory(category);
  };
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6">
      <div className="absolute top-6 text-gray-400 text-sm">
        {category && `Category: ${category}`}
      </div>

      <AnimatePresence mode="wait">
        {question && (
          <motion.div
            key={question}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl px-4"
          >
            <p className="text-3xl md:text-4xl font-light leading-relaxed">
              {question}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-10 flex flex-col gap-4 items-center">
        <select
          className="p-2 rounded bg-gray-800 border border-gray-700 text-sm"
          value={level ?? ""}
          onChange={(e) =>
            setLevel(e.target.value ? Number(e.target.value) : undefined)
          }
        >
          <option value="">Random Level</option>
          <option value="1">Fun & Light</option>
          <option value="2">Personal</option>
          <option value="3">Deep</option>
          <option value="4">Extreme</option>
        </select>

        <button
          onClick={handleNewQuestion}
          className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition text-lg shadow-lg"
        >
          {question ? "Next Question" : "Start Game"}
        </button>
      </div>
    </main>
  );
}

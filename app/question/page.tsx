"use client";

import { motion, AnimatePresence } from "framer-motion";
import { getRandomQuestion } from "@/lib/getRandomQuestions";
import { useState } from "react";
import Link from "next/link";

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
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-amber-950 text-white p-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <Link
        href="/"
        className="absolute top-6 left-6 text-white/60 hover:text-white/90 transition-colors text-sm font-light"
      >
        ← Back to Home
      </Link>

      <div className="absolute top-6 text-white/60 text-sm font-light">
        {category && `${category}`}
      </div>
      <AnimatePresence mode="wait">
        {question && (
          <motion.div
            key={question}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl px-6 py-8 mx-auto rounded-2xl
                 bg-white/10 backdrop-blur-md border border-white/20
                 shadow-lg relative overflow-hidden"
          >
            {/* Grainy texture layer */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-10 pointer-events-none"></div>

            <p className="text-center text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-white/90 font-serif relative z-10">
              {question}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-10 flex flex-col gap-6 items-center">
        <select
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-light text-white/90 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
          value={level ?? ""}
          onChange={(e) =>
            setLevel(e.target.value ? Number(e.target.value) : undefined)
          }
        >
          <option value="" className="bg-slate-800">
            Random Level
          </option>
          <option value="1" className="bg-slate-800">
            Fun & Light
          </option>
          <option value="2" className="bg-slate-800">
            Personal
          </option>
          <option value="3" className="bg-slate-800">
            Deep
          </option>
          <option value="4" className="bg-slate-800">
            Extreme
          </option>
        </select>

        <button
          onClick={handleNewQuestion}
          className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all text-lg font-light text-white/90 shadow-lg hover:shadow-xl hover:scale-105 transform duration-300"
        >
          {question ? "Next Question" : "Start Game"}
        </button>
      </div>
    </main>
  );
}

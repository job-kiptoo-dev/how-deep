import questionsData from "@/utils/questions.json";

export function getRandomQuestion(level?: number) {
  let selectedLevel;

  if (level) {
    selectedLevel = questionsData.levels.find(l => l.level === level);
    if (!selectedLevel) throw new Error("Invalid level");
  } else {
    selectedLevel = questionsData.levels[Math.floor(Math.random() * questionsData.levels.length)];
  }

  const randomIndex = Math.floor(Math.random() * selectedLevel.questions.length);
  return {
    level: selectedLevel.level,
    category: selectedLevel.name,
    question: selectedLevel.questions[randomIndex]
  };
}


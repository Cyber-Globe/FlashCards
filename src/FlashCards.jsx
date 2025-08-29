import React from "react";
import questions from "./flash.js";
export default function FlashCards() {
  const [selectedId, setSelectedId] = React.useState(3457);

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}

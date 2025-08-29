import React from "react";
import questions from "./flash.js";
export default function FlashCards() {
  const [selectedId, setSelectedId] = React.useState(null);

  function handleClick(id) {
    setSelectedId(!id === selectedId ? null : id);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          onClick={() => handleClick(question.id)}
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

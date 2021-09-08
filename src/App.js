import React, { useState, useEffect } from "react";
import Question from "./Question";

export default function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=10")
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      setQuestions(response.results);
    })
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        border: "1px solid black",
        maxWidth: "40w",
        padding: "10px",
        margin: "20px"

      }}
    >
      <h1>Trivia Questions</h1>
      {questions.map((question) => (
        <Question question={question} />
      ))}
    </div>
  );
}


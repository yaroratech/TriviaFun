import React, { useState, useEffect } from "react";
import he from "he";
import Button from "@material-ui/core/Button";

export default function Question({ question, setNumAnswered }) {
    const [isAnswered, setIsAnswered] = useState(false);
    const decodedQuestion = he.decode(question.question);
    const decodedCorrectAnswer = he.decode(question.correct_answer);
  
    const decodedIncorrectAnswers = question.incorrect_answers.map(answer => he.decode(answer))
    const allAnswers = [decodedCorrectAnswer, ...decodedIncorrectAnswers]
  
    useEffect(() => {
      for(let i = 0; i < 10; i++) {
        const randIndex = Math.floor(Math.random() * allAnswers.length);
        const secondRandIndex = Math.floor(Math.random() * allAnswers.length);
  
        const temp = allAnswers[randIndex];
        allAnswers[randIndex] = allAnswers[secondRandIndex];
        allAnswers[secondRandIndex] = temp;
      }
    });
  
    const handleClick = (answer) => {
      setIsAnswered(true);
    };
  
  
    return (
      <div
        style={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center" }}
      >
        <h1>{decodedQuestion}</h1>
        <ul>
          {allAnswers.map((answer) => {
            if (isAnswered) {
              return (
                <Button 
                  variant="contained" 
                  style={{
                    margin: "5px",
                    backgroundColor:
                      answer === decodedCorrectAnswer ? "#00FF00" : "#FF0000"}} 
                  onClick={() => handleClick(answer)}
                >
                  {answer}
                </Button>
              );
            }
            return (
              <Button 
                variant="contained" 
                color="primary" 
                style={{margin: "5px"}} 
                onClick={() => handleClick(answer)}
              >
                {answer}
              </Button>
            );
          })}
        </ul>
      </div>
    );
}
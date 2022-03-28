import React from "react";
import Button from "@mui/material/Button"

export default function Start(props) {
  return (
    <div className="start">
      <h1>Quiz</h1>
      <p>Let's challenge!</p>
      <Button 
        variant="contained"
        className="start-btn"
        onClick={() => props.setShowQuiz(true)}
      >
        Start Quiz.
      </Button>
    </div>
  )
}
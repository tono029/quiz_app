import React from "react";
import Button from "@mui/material/Button"

export default function Start(props) {

  function openQuiz() {
    props.setShowQuiz(true)
  }

  

  return (
    <div className="start">
      <h1>Quiz</h1>
      <p>Let's challenge!</p>
      <Button 
        variant="contained"
        className="start-btn"
        onClick={openQuiz}
      >
        Start Quiz.
      </Button>
    </div>
  )
}
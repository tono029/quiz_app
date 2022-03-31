import React from "react";
import Category from "./Category";
import Button from "@mui/material/Button"

export default function Start(props) {
  return (
    <div className="start">
      <h1>Quiz</h1>
      <p>Let's challenge!</p><br />

      {/* カテゴリ選択ボタン */}
      <p>Select category.</p>
      <Category setCategory={props.setCategory} />

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
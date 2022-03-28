import React from "react";
import Button from "@mui/material/Button"

export default function Quiz(props) {
  // 押したボタンのisHeldをtrue, それ以外をfalseに設定。
  // function holdAnswer(id) {
  //   props.setAnswers(oldAnswers => oldAnswers.map(ans => {
  //     return ans.id === id ?
  //       {...ans, isHeld: !ans.isHeld} :
  //       {...ans, isHeld: false}
  //   }))
  // }
  
  function holdAnswer(id) {
    props.setAllQuizzes(oldQuizzes => oldQuizzes.map(quiz => {
      return {
        ...quiz
      }
    }))
  }

  const answerButtons = props.answers.map(ans => {
    return (
      <Button 
        variant="contained" size="small"
        className={ans.isHeld ? "ans-btn gray" : "ans-btn"}
        key={ans.id}
        // アロー関数で無限ループを防ぐ。
        onClick={() => holdAnswer(ans.id)}
      >
        {ans.value}
      </Button>
    )
  })

  return (
    <div className="quiz">
      <p>{props.question}</p>

      {answerButtons}

      <hr />
    </div>
  )
}
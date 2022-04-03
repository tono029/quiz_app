import React from "react";
import Button from "@mui/material/Button"

export default function Quiz(props) {
  function holdAnswer(id) {
    props.setAllQuizzes(oldQuizzes => oldQuizzes.map(quiz => {
      const newAnswers = []

      // 複数選択できないようにする
      quiz.all_answers.map(ans => {
        if (ans.id === id) {
          newAnswers.push(
            {...ans, isHeld: !ans.isHeld} 
          )
        } else {
          newAnswers.push(
            {...ans}
          )
        }
      })


      return {
        ...quiz,
        all_answers: newAnswers
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

  const checkedAnswerButtons = props.answers.map(ans => {
    const correctAns = {
      backgroundColor: "teal",
      color: "white",
      height: "auto",
      margin: "10px 0px 0px 10px",
      width: "auto",
      borderRadius: "10px",
    }

    function back(){
      if (ans.isHeld && ans.value !== props.correct_answer) {
        return "#D8000C"
      } else {
        return "white"
      }
    }
    const normalStyle = {
      backgroundColor: back(),
      color: "black",
      height: "auto",
      margin: "10px 0px 0px 10px",
      width: "auto",
      borderRadius: "10px",
      opacity: 0.3,
    }

    return (
      <Button 
        variant="contained" size="small"
        disabled
        style={ans.value === props.correct_answer ? correctAns : normalStyle}
        key={ans.id}
      >
        {ans.value}
      </Button>
  )
})

  return (
    <div className="quiz">
      <p>{props.question}</p>

      {props.showCheck ? answerButtons : checkedAnswerButtons}

      <hr />
    </div>
  )
}
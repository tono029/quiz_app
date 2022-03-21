import React from "react";
import Button from "@mui/material/Button"

export default function Quiz(props) {
 
  // props.answers = [{}, {}, ...]
  const answerButtons = props.answers.map((ans) => {
    return (
      <Button 
        variant="contained" size="small"
        className={ans.isHeld ? "ans-btn gray" : "ans-btn"}
        key={ans.id}
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
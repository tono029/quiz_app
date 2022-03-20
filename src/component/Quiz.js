import React from "react";
import Button from "@mui/material/Button"

export default function Quiz(props) {
  function shuffle(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // props.answers = [{}, {}, ...]
  const answerButtons = shuffle(props.answers).map((ans) => {
    return (
      <Button 
        variant="contained"
        className={ans.isHeld ? "ans-btn gray" : "ans-btn"}
        size="small"
        key={ans.id}
        onClick
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
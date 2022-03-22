import React from "react";
import Button from "@mui/material/Button"

export default function Quiz(props) {

  const [held, setHeld] = React.useState(props.answers)

  // ほかにisHeldがtrueのものがあるときはfalseに再設定する。
  function holdAnswer(id) {
    setHeld(prev => prev.map(ans => {
      return ans.id === id ?
        {...ans, isHeld: !ans.isHeld} :
        ans
    }))
  }
 
  // props.answers = [{}, {}, ...]
  const answerButtons = held.map((ans) => {
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
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

  const [answers, setAnswers] = React.useState(shuffle(props.answers))

  // 押したボタンのisHeldをtrue, それ以外をfalseに設定。
  function holdAnswer(id) {
    setAnswers(prev => prev.map(ans => {
      return ans.id === id ?
        {...ans, isHeld: true} :
        {...ans, isHeld: false}
    }))
  }
 
  const answerButtons = answers.map((ans) => {
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
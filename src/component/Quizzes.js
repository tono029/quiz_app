import React from "react";
import Button from "@mui/material/Button"
import Quiz from "./Quiz";
import { IconButton } from "@mui/material";
import ReplayIcon from '@mui/icons-material/Replay';
import { nanoid } from "nanoid";

export default function Quizzes(props) {
  const [allQuizzes, setAllQuizzes] = React.useState([])
  const [reload, setReload] = React.useState(true)

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=9&type=multiple&encode=url3986")
      .then(res => res.json())
      // この時点で変数にセットする前にデータを整えておく。
      .then(data => setAllQuizzes(
        data.results.map(quiz => {
          const allAnswers = quiz.incorrect_answers.concat(quiz.correct_answer)
          const answersWithId = []
          allAnswers.map(ans => {
            answersWithId.push({
              id: nanoid(),
              value: decodeURIComponent(ans),
              isHeld: false
            })
          })

          return {
            ...quiz, 
            id: nanoid(),
            question: decodeURIComponent(quiz.question),
            all_answers: answersWithId,
          }
        })
      ))
  }, [reload])

  console.log(allQuizzes)

  function handleReload() {
    setReload(prev => !prev)
  }
  


  const quizzes = allQuizzes.map(quiz => {
    return (
      <div>
        <Quiz
          question={quiz.question}
          answers={quiz.all_answers}
          key={quiz.id}
        />
      </div>
    )
  })

  return (
    <div className="quizzes">
      <div className="quizzes-header">
        <h1>Quizzes</h1>
        <IconButton onClick={handleReload}>
          <ReplayIcon />
        </IconButton>
      </div>

      {quizzes}

      <Button 
        className="check-btn"
        variant="contained"
      >
        check answers.
      </Button>
    </div>
  )
} 
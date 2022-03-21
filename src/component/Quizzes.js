import React from "react";
import Button from "@mui/material/Button"
import Quiz from "./Quiz";
import { IconButton } from "@mui/material";
import ReplayIcon from '@mui/icons-material/Replay';
import { nanoid } from "nanoid";

export default function Quizzes(props) {
  const [quizzesData, setQuizzesData] = React.useState([])
  const [reload, setReload] = React.useState(true)
  function handleReload() {
    setReload(prev => !prev)
  }
  function closeQuizzes() {
    props.setShowQuiz(false)
  }

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=9&type=multiple&encode=url3986")
      .then(res => res.json())
      .then(data => setQuizzesData(data.results))
  }, [reload])

  console.log(quizzesData)

  const quizzes = quizzesData.map((quizData, index) => {
    // 選択肢を配列にまとめる
    const answersArray = quizData.incorrect_answers.concat([quizData.correct_answer])
    
    // json形式で新しく配列を返す
    function answersData() {
      const newAnswersArray = []
      answersArray.map(ans => {
        newAnswersArray.push({
          value: decodeURIComponent(ans),
          isHeld: false,
          id: nanoid()
        })
      })
      return newAnswersArray
    }


    return (
      <div>
        <Quiz   
          question={decodeURIComponent(quizData.question)}
          answers={answersData()}
          key={index}
        />
      </div>
    )
  })

  return (
    <div className="quizzes">
      <div className="quizzes-header">
        <h1 onClick={closeQuizzes}>Quizzes</h1>
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
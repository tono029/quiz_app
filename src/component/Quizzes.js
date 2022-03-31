import React from "react";
import Button from "@mui/material/Button"
import Quiz from "./Quiz";
import { IconButton } from "@mui/material";
import ReplayIcon from '@mui/icons-material/Replay';
import HomeIcon from '@mui/icons-material/Home';
import { nanoid } from "nanoid";
import Confetti from "react-confetti"

export default function Quizzes(props) {
  const [allQuizzes, setAllQuizzes] = React.useState([])

  const [reload, setReload] = React.useState(true)
  const [showCheck, setShowCheck] = React.useState(true)

  function shuffle(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // quizData読み込み
  React.useEffect(() => {
    const category = props.category
    async function getQuizzes() {


      const res = await fetch(`https://opentdb.com/api.php?amount=5&category=${category}&type=multiple&encode=url3986`)
      const data = await res.json()

      setAllQuizzes(
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
            correct_answer: decodeURIComponent(quiz.correct_answer),
            all_answers: shuffle(answersWithId),
          }
        })
      )
    }

    getQuizzes()
  }, [reload])
  
  console.log("allQuizzes", allQuizzes)

  const [score, setScore] = React.useState(0)
  function handleCheck() {
    setShowCheck(prev => !prev)

    // 答え合わせの処理

    allQuizzes.map(quiz => {
      quiz.all_answers.map(ans => {
        // 正解の時
        if (ans.isHeld === true && ans.value === quiz.correct_answer) {
          setScore(prev => ++prev)
        } else {

        }
      })
    })


  }

  function handleReload() {
    setShowCheck(true)
    setReload(prev => !prev)
    setScore(0)
  }

  function handleHome() {
    props.setShowQuiz(false)
    props.setCategory(0)
  }

  const quizzes = allQuizzes.map(quiz => {
    return (
      <Quiz
        question={quiz.question}
        answers={quiz.all_answers}
        correct_answer={quiz.correct_answer}
        setAllQuizzes={setAllQuizzes}
        showCheck={showCheck}
        key={quiz.id}
      />
    )
  })

  return (
    <div className="quizzes">
      <div className="quizzes-header">
        <h1>Quizzes</h1>
        <IconButton onClick={handleHome}>
          <HomeIcon />
        </IconButton>

        <IconButton onClick={handleReload}>
          <ReplayIcon />
        </IconButton>
      </div>

      {quizzes}

      <div className="quizzes-footer">
        {showCheck 
          ? 
          <Button 
            className="check-btn"
            variant="contained"
            onClick={handleCheck}
          >
            check answers.
          </Button>
          :
          <>
            {score === 5 && <Confetti tweenDuration="10" />}
            <p>You scored <span>{score}/5</span> correct answers!</p>
            <Button
              className="again-btn"
              variant="contained"
              onClick={handleReload}
            >
              play again.
            </Button>
          </>

        }
        
      </div>
    </div>
  )
} 
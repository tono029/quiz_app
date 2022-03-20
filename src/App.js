import React from "react";
import Start from "./component/Start";
import "./App.css"
import Quizzes from "./component/Quizzes";

export default function App() {
  const [showQuiz, setShowQuiz] = React.useState(false)

  return (
    <div>
      {!showQuiz && <Start showQuiz={showQuiz} setShowQuiz={setShowQuiz} />}
      
      {showQuiz && <Quizzes setShowQuiz={setShowQuiz} />}
    </div>
  )
}

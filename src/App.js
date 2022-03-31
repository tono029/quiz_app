import React from "react";
import Start from "./component/Start";
import "./App.css";
import Quizzes from "./component/Quizzes";

export default function App() {
  const [showQuiz, setShowQuiz] = React.useState(false)
  const [category, setCategory] = React.useState("")

  return (
    <>
      {!showQuiz && 
        <Start 
          showQuiz={showQuiz}  
          setShowQuiz={setShowQuiz}
          setCategory={setCategory}
        />
      }
      
      {showQuiz && 
        <Quizzes 
          setShowQuiz={setShowQuiz}
          category={category}
        />
      }
    </>
  )
}

// to do

// haikei
// 難易度選択
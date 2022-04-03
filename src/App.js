import React from "react";
import Start from "./component/Start";
import "./App.css";
import Quizzes from "./component/Quizzes";

export default function App() {
  const [showQuiz, setShowQuiz] = React.useState(false)
  const [category, setCategory] = React.useState(0)

  const selectIndex = [
    {value: 0, label: "Any"},
    {value: 9, label: "General Knowledge"},
    {value: 10, label: "Books"},
    {value: 11, label: "Film"},
    {value: 12, label: "Music"},
    {value: 15, label: "Video Games"},
    {value: 17, label: "Science & Nature"},
    {value: 21, label: "Sports"},
    {value: 23, label: "History"},
    {value: 25, label: "Art"},
    {value: 27, label: "Animals"},
    {value: 29, label: "Comics"},
    {value: 31, label: "Japanese Anime & Manga"},
  ]

  return (
    <>
      {!showQuiz && 
        <Start 
          showQuiz={showQuiz}  
          setShowQuiz={setShowQuiz}
          category={category}
          setCategory={setCategory}
          selectIndex={selectIndex}
        />
      }
      
      {showQuiz && 
        <Quizzes 
          setShowQuiz={setShowQuiz}
          category={category}
          setCategory={setCategory}
          selectIndex={selectIndex}
        />
      }
    </>
  )
}

// to do

// 難易度選択
// 複数選択できないように
// readme編集
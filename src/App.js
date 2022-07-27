import React, { useState } from "react";
import "./App.css"
import data from "./data";
import Question from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);

  return <main>
    <div className="container">
      <div className="title">
      <h3>Questions and Answers About Login</h3>
      </div>
      <div>
      {questions.map((question)=>{
        const {id, title, info} = question;
        return(
          <Question key={id} question={question}/>
        )
      })}

      </div>
    </div>
  </main>;
}

export default App;

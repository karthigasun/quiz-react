import { useState } from "react";
import './App.css';
import questions from "./mysrc/questions";
function App() {
  const[quesInd,setQuesInd]=useState(0);
  const[mark,setMark]=useState(0);
  const[showmark,setshowmark]=useState(false);
  const currQues=questions[quesInd];
  const select=(i)=>{
    //console.log(i);
    if(currQues.answer===i){
      setMark(mark+1);
    }
    const next=quesInd+1
    if(next<questions.length){
      setQuesInd(quesInd+1);
    }
    else{
      setshowmark(true);
    }
  }
  const reset=()=>{
    setQuesInd(0);
    setMark(0);
    setshowmark(false);
  }
  return (
    <div className="section">
      {showmark?(
        <>
        <h1>Your Mark is:{mark}</h1>
        <button onClick={reset}>Reset</button>
        </>
      ):(
        <div className="container">
          <h2>SMALL CRICKET QUIZ</h2>
          <div className="options">
            <p>{currQues.question}</p>
            <ul className="option-ul">
              {currQues.options.map((option,i)=>{
                return (
                <li className="option-li" onClick={()=>select(i)}>{option}</li>)
              })}
            </ul>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default App;
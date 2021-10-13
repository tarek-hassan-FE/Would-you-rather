import React from "react";
import QuestionCard from "./QuestionCard";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useState } from "react";
import Login from "./Login";

export default function Question() {
  const questions = useSelector((state) => state.questions);
  const authedUser = useSelector((state) => state.authedUser);
  const [isAuthed, setIsAuthed] = useState(authedUser.id && authedUser.id !== 'guest')
  const users = useSelector(state => state.users)

  let { id } = useParams();
  id = id.slice(1);
  
  const question = questions[id];
  let user, questionStatus
  if(question)  
  {
    user = users[question.author]
    questionStatus =
    question.optionOne.votes.find((id) => authedUser.id === id) ||
    question.optionTwo.votes.find((id) => authedUser.id === id)
      ? true
      : false;
  }
    
  const showQuestion = () => {
        setIsAuthed(true)
  }

return(
isAuthed  ? 
  question ? 
  <div className="single-question-page-container">
    <div className="single-question-container">
      <QuestionCard
        question={question}
        user={user}
        questionStatus={questionStatus}
      ></QuestionCard>
    </div>
  </div> 
  : <h1 style={{textAlign: 'center'}}>404 Not found</h1>
: <Login showPage={() => showQuestion()} />
  
  // if(question)
  //   return (
  //     <div className="single-question-page-container">
  //       <div className="single-question-container">
  //         <QuestionCard
  //           question={question}
  //           user={user}
  //           questionStatus={questionStatus}
  //         ></QuestionCard>
  //       </div>
  //     </div>
  //   )
  // else
  //     return <h1>404 Not found</h1>
      )
}

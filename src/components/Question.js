import React from "react";
import QuestionCard from "./QuestionCard";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function Question() {
  const questions = useSelector((state) => state.questions);
  const authedUser = useSelector((state) => state.authedUser);
  const users = useSelector(state => state.users)

  let { id } = useParams();
  id = id.slice(1);
  
  const question = questions[id];
  const user = users[question.author]
  
  const QuestionStatus =
    question.optionOne.votes.find((id) => authedUser.id === id) ||
    question.optionTwo.votes.find((id) => authedUser.id === id)
      ? true
      : false;

  if(question)
    return (
      <div className="single-question-page-container">
        <div className="single-question-container">
          <QuestionCard
            question={question}
            user={user}
            QuestionStatus={QuestionStatus}
          ></QuestionCard>
        </div>
      </div>
    )
  else
      return <h1>404 Not found</h1>
}

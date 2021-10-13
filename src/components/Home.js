import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Login from "./Login";
import QuestionCard from "./QuestionCard";

export default function Home() {
  const [questionsType, setQuestionsType] = useState({ type: 0 });
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);
  const [isAuthed, setIsAuthed] = useState(authedUser.id && authedUser.id !== 'guest')


  const sortQuestionsByTime = (questions) => {
    return Object.keys(questions).map(questionID => {
        return [
            questions[questionID].timestamp, 
            questions[questionID].id
        ]
    }).sort((a,b) =>(b[0] - a[0])  )
  }
  const sortedQuestions = sortQuestionsByTime(questions)

  const handleChangeQuestionsType = (type) => {
    setQuestionsType({ type: type });
  };

  const showHome = () => {
    setIsAuthed(true)
}

  const checkIfUserAnswered = (question, questionsType) => {
    return questionsType === 0
      ? question.optionOne.votes.filter((user) => user === authedUser.id)
          .length === 0 &&
          question.optionTwo.votes.filter((user) => user === authedUser.id)
            .length === 0
      : question.optionOne.votes.filter((user) => user === authedUser.id)
          .length > 0 ||
          question.optionTwo.votes.filter((user) => user === authedUser.id)
            .length > 0;
  };

  return (
    isAuthed === true ?
      <div className="home-page-container">
        <div className="questions-type-container">
          <button
            className={questionsType.type === 0 ? "active-questions-type" : ""}
            onClick={() => handleChangeQuestionsType(0)}
          >
            Unanswered Questions
          </button>
          <button
            className={questionsType.type === 1 ? "active-questions-type" : ""}
            onClick={() => handleChangeQuestionsType(1)}
          >
            Answered Questions
          </button>
        </div>
        <div className="feed-container">
          <div className="feed">
            {questionsType.type === 0
              ? sortedQuestions.map((q) => {
                  const question = questions[q[1]];
                  const user = users[question.author]; 
                  const isAnswered = checkIfUserAnswered(question , 0) 
                  if (isAnswered)
                    return (
                      <QuestionCard
                        question={question}
                        user={user}
                        QuestionStatus={isAnswered}
                        key={question.id}
                      ></QuestionCard>
                    );
                  else return null;
                })
              : Object.keys(questions).map((id) => {
                  const question = questions[id];
                  const user = users[question.author]; 
                  const isNotAnswered = checkIfUserAnswered(question , 1) 
                  if (isNotAnswered)
                    return (
                      <QuestionCard
                        question={question}
                        user={user}
                        QuestionStatus={!isNotAnswered}
                        key={question.id}
                      ></QuestionCard>
                    );
                  else return null;
                })}
          </div>
        </div>
      </div>
    : <Login showPage={() => showHome()} />
  );
}

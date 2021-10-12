import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import QuestionCard from "./QuestionCard";

export default function Home() {
  const [questionsType, setQuestionsType] = useState({ type: 0 });
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);
  const authedUser = useSelector((state) => state.authedUser);

  const handleChangeQuestionsType = (type) => {
    setQuestionsType({ type: type });
  };

  const checkIfUserAnswered = (question, questionsType) => {
    return questionsType === 0
      ? question.optionOne.votes.filter((user) => user === authedUser.id)
          .length > 0 ||
          question.optionTwo.votes.filter((user) => user === authedUser.id)
            .length > 0
      : question.optionOne.votes.filter((user) => user === authedUser.id)
          .length === 0 &&
          question.optionTwo.votes.filter((user) => user === authedUser.id)
            .length === 0;
  };

  return (
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
            ? Object.keys(questions).map((id) => {
                const question = questions[id];
                if (checkIfUserAnswered(question , 0))
                  return (
                    <QuestionCard
                      question={question}
                      users={users}
                      key={question.id}
                    ></QuestionCard>
                  );
                else return null;
              })
            : Object.keys(questions).map((id) => {
                const question = questions[id];
                if (checkIfUserAnswered(question , 1))
                  return (
                    <QuestionCard
                      question={question}
                      users={users}
                      key={question.id}
                    ></QuestionCard>
                  );
                else return null;
              })}
        </div>
      </div>
    </div>
  );
}

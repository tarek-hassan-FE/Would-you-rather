import React from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleUserAnswer } from "../actions/shared";
import  LoadingBar  from "react-redux-loading-bar";

export default function QuestionCard(props) {
  const { question, user, QuestionStatus } = props;
  const authedUser = useSelector((state) => state.authedUser);
  const location = useLocation();
  const [isAnswered, setisAnswered] = useState(QuestionStatus);
  const [selectedOption, setselectedOption] = useState("0");
  const dispatch = useDispatch();

  const handleAnswerQuestion = (e, selectedOption) => {
    e.preventDefault();
    setisAnswered(1);
    // console.log(authedUser.id , question.id , selectedOption)
    dispatch(
      handleUserAnswer(
        authedUser.id,
        question.id,
        selectedOption === "0" ? "optionOne" : "optionTwo"
      )
    );
  };

  const getOptionVotes = (option, question) => {
    return question[option].votes.length;
  };

  const getQuestionTotalVotes = (question) => {
    return question.optionOne.votes.length + question.optionTwo.votes.length;
  };

  const getOptionPercentage = (option, question) => {
    return (
      (
        (getOptionVotes(option, question) / getQuestionTotalVotes(question)) *
        100
      ).toFixed(1) + "%"
    );
  };

  return (
    <div className="question-card">
        <LoadingBar style={{maxWidth: '59%'}}  />
      <div className="question-card-title">{user.name} asks:</div>
      <div className="question-card-body">
        <div className="question-card-avatar-container">
          <img src={user.avatarURL} alt="avatar" />
        </div>
        {
          location.pathname === `/questions/:${question.id}` ? (
            isAnswered ? (
              <div className="question-card-question-container">
                <h1>Results:</h1>
                <div
                  className={
                    selectedOption === "0"
                      ? "option-container selected-option"
                      : "option-container"
                  }
                >
                  <h3>{question.optionOne.text}</h3>
                  <div className="answers-bar-container">
                    <div
                      className="answers-bar"
                      style={{
                        width: getOptionPercentage("optionOne", question),
                      }}
                    >
                      {<p>{getOptionPercentage("optionOne", question)}</p>}
                    </div>
                  </div>
                  <p className="option-stats">
                    {getOptionVotes("optionOne", question)} out of{" "}
                    {getQuestionTotalVotes(question)}
                  </p>
                </div>

                <div
                  className={
                    selectedOption === "1"
                      ? "option-container selected-option"
                      : "option-container"
                  }
                >
                  <h3>{question.optionOne.text}</h3>
                  <div className="answers-bar-container">
                    <div
                      className="answers-bar"
                      style={{
                        width: getOptionPercentage("optionTwo", question),
                      }}
                    >
                      {<p>{getOptionPercentage("optionTwo", question)}</p>}
                    </div>
                  </div>
                  <p className="option-stats">
                    {getOptionVotes("optionTwo", question)} out of{" "}
                    {getQuestionTotalVotes(question)}
                  </p>
                </div>
              </div>
            ) : (
              <div className="question-card-question-container">
                <h1>Would you rather ...</h1>
                <form
                  className="question-form"
                  onSubmit={(e) => handleAnswerQuestion(e, selectedOption)}
                >
                  <div className="input-answer-container">
                    <input
                      defaultChecked
                      type="radio"
                      value="option 1"
                      name="options"
                      onClick={() => {
                        setselectedOption("0");
                      }}
                    />
                    <label>{question.optionOne.text}</label>
                  </div>
                  <br />
                  <div className="input-answer-container">
                    <input
                      type="radio"
                      value="option 2"
                      name="options"
                      onClick={() => {
                        setselectedOption("1");
                      }}
                    />
                    <label>{question.optionTwo.text}</label>
                  </div>
                  <button className="btn" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            )
          ) : (
            <div className="question-card-question-container">
              <p>Would you rather</p>
              <p>_{question.optionOne.text}_</p>
              <Link to={`/questions/:${question.id}`}>
                <button className="btn-outline">View poll</button>
              </Link>
            </div>
          )
          // location.pathname === `/questions/:${question.id}` && isAnswered
          // ? <div className="question-card-question-container">
          //     'Is Answered'
          //     </div>
          // : <div className="question-card-question-container">
          //     <p>Would you rather</p>
          //     <p>_{question.optionOne.text}_</p>
          //     <Link to={ `/questions/:${question.id}`}>
          //         <button className="btn-outline" >View poll</button>
          //     </Link>
          // </div>
        }
      </div>
    </div>
  );
}

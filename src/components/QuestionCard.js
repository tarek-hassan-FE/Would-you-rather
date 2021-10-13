import React from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleUserAnswer } from "../actions/shared";
import  LoadingBar  from "react-redux-loading-bar";
import Results from './Results'

export default function QuestionCard(props) {
  const { question, user, questionStatus } = props;
  const authedUser = useSelector((state) => state.authedUser);
  const location = useLocation();
  const [isAnswered, setisAnswered] = useState(questionStatus);
  const [selectedOption, setselectedOption] = useState("0");
  const dispatch = useDispatch();
  const [isResultsReady, setisResultsReady] = useState(questionStatus)

  const handleAnswerQuestion = (e, selectedOption) => {
    e.preventDefault();
    setisAnswered(1);
    dispatch(
      handleUserAnswer(
        authedUser.id,
        question.id,
        selectedOption === "0" ? "optionOne" : "optionTwo"
      )
    )
    .then(() => {setisResultsReady(true)})
  };


  return (
    <div className="question-card">
        <LoadingBar style={{maxWidth: '40%'}}  />
      <div className="question-card-title">{user.name} asks:</div>
      <div className="question-card-body">
        <div className="question-card-avatar-container">
          <img src={user.avatarURL} alt="avatar" />
        </div>
        {
          location.pathname === `/questions/:${question.id}` ? (
            isAnswered ? (
              isResultsReady === true 
                ? <Results selectedOption={selectedOption} question={question} /> 
                :null
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
          
        }
      </div>
    </div>
  );
}

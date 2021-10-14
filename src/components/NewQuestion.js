import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { handleAddNewQuestion } from "../actions/shared";
import { useHistory } from "react-router";
import Login from "./Login";

export default function NewQuestion() {
  const [optionOne, setoptionOne] = useState("");
  const [optionTwo, setoptionTwo] = useState("");
  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.authedUser);
  const [isAuthed, setIsAuthed] = useState(authedUser.id && authedUser.id !== 'guest')
  const history = useHistory()


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      handleAddNewQuestion({
        optionOneText: optionOne,
        optionTwoText: optionTwo,
        author: authedUser.id,
      })
    )
    .then(() => history.push('/home')) ;
    
    
  };

  const showAdd = () => {
    setIsAuthed(true)
  }

  return (
    isAuthed === true ?
    <div className="new-question-container">
      <div className="new-question-card">
        <LoadingBar style={{ maxWidth: "40%" }} />
        <div className="new-question-title-container">
          <h1>Create New Question</h1>
        </div>
        <div className="new-question-body-container">
          <p>Complete the question</p>
          <h2>Would you rather ...</h2>
          <div className="new-question-options-container">
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                type="text"
                required={true}
                value={optionOne}
                onChange={(e) => setoptionOne(e.target.value)}
                name="optionOne"
                placeholder="Enter Option one Text Here"
              />
              <h2>OR</h2>
              <input
                type="text"
                required={true}
                value={optionTwo}
                onChange={(e) => setoptionTwo(e.target.value)}
                name="optionTwo"
                placeholder="Enter Option two Text Here"
              />
              <button className="btn" type='submit' >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    : <Login showPage={() => showAdd()} />
  );
}

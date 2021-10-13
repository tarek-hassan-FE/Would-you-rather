import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { handleAddNewQuestion } from "../actions/shared";

export default function NewQuestion() {
  const [optionOne, setoptionOne] = useState("");
  const [optionTwo, setoptionTwo] = useState("");
  const dispatch = useDispatch();
  const authedUser = useSelector((state) => state.authedUser);

    const resetValues = () => {
        setoptionOne('')
        setoptionTwo('')
    }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(
      handleAddNewQuestion({
        optionOneText: optionOne,
        optionTwoText: optionTwo,
        author: authedUser.id,
      })
    )
    .then(() => resetValues())
    .then(() => alert('Question Added successfuly')) ;
    
    
  };

  return (
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
  );
}

import React from "react";

export default function QuestionCard(props) {
  const { question, users } = props;
  return (
    <div className="question-card" >
      <div className="question-card-title">
        {users[question.author].name} asks:
      </div>
      <div className="question-card-body">
        <div className="question-card-avatar-container">
          <img src={users[question.author].avatarURL} alt="avatar" />
        </div>
        <div className="question-card-question-container">
          <p>Would you rather</p>
          <p>_{question.optionOne.text}_</p>
          <button className="btn-outline">View poll</button>
        </div>
      </div>
    </div>
  );
}

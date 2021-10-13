import React from 'react'

export default function Results(props) {
    const {selectedOption , question} = props

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
    )
}

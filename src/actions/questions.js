export const ADD_QUESTION = "ADD_QUESTION"
export const GET_QUESTIONS = "GET_QUESTIONS"
export const ANSWER_QUESTION = "ANSWER_QUESTION"


export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}


export function getQuestions(questions , authedUser) {
    return {
        type: GET_QUESTIONS,
        questions,
        authedUser
    }
}


export function answerQuestion(question, authedUser) {
    return {
        type: ANSWER_QUESTION,
        question,
        authedUser
    }
}


import { ADD_QUESTION, GET_QUESTIONS, ANSWER_QUESTION } from "../actions/questions";


export default function questions (state = { } , action) {
    switch(action.type) {
        case ADD_QUESTION: 
            return {
                ...state,
                ...action.question
            }
        case GET_QUESTIONS:
            return{
                ...state,
                ...action.questions
            }
        case ANSWER_QUESTION:
            return { 
                ...state,
            }
            default:
                return state;
    }
}
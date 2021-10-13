import {
  getInitialData,
  _saveQuestionAnswer,
  _getUsers,
  _getQuestions,
} from "../utils/_DATA";
import { receiveUsers } from "./users";
import { getQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";
import {showLoading, hideLoading} from 'react-redux-loading-bar'

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
    .then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(getQuestions(questions));
      dispatch(setAuthedUser("guest"));
      dispatch(hideLoading())
    });
  };
}

export function handleUserAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    dispatch(showLoading())
    return _saveQuestionAnswer({ authedUser, qid, answer })
      .then(() => _getUsers())
      .then((users) => {
        dispatch(receiveUsers(users));
      })
      .then(() => _getQuestions())
      .then((questions) => {
        dispatch(getQuestions(questions));
        dispatch(hideLoading())
      })
  };
}

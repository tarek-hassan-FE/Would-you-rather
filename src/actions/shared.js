import { getInitialData } from '../utils/_DATA';
import { receiveUsers } from './users'
import { getQuestions } from './questions';
import { setAuthedUser } from './authedUser';
// import {showLoading, hideLoading} from 'react-redux-loading'

export function handleInitialData () {

    return (dispatch) => {
        // dispatch(showLoading())
        return getInitialData()
        .then( ({users ,questions} ) => {
            dispatch(receiveUsers(users));
            dispatch(getQuestions(questions))
            dispatch(setAuthedUser('guest'));
            // dispatch(hideLoading())
        })

    }
}
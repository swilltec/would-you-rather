import { getInitialData } from '../utils/api';
import { receiveQuestions, receiveUsers } from '../actions';



export function initializeData() {
    return (dispatch) => {
      return getInitialData().then(({ users, questions }) => {
        dispatch(receiveQuestions(questions));
        dispatch(receiveUsers(users));
      });
    };
  }
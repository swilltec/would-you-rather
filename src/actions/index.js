export const SET_AUTH_USER = "SET_AUTH_USER";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const RECEIVE_USERS = "RECEIVE_USERS";

export function setAuthUser(id) {
  return {
    type: SET_AUTH_USER,
    id,
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
    });
  };
}

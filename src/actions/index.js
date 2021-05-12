import { saveQuestionAnswer, saveQuestion } from '../utils/api';


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

export function addAnswerToQuestion(authUser, qid, answer) {
  return {
    type: ADD_ANSWER_TO_QUESTION,
    authUser,
    qid,
    answer
  };
}




function addAnswerToUser(authUser, qid, answer) {
  return {
    type: ADD_ANSWER_TO_USER,
    authUser,
    qid,
    answer
  };
}

export function addQuestionToUser({ id, author }) {
  return {
    type: ADD_QUESTION_TO_USER,
    id,
    author
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  };
}

export function handleSaveQuestion(optionOneText, optionTwoText, author) {
  return dispatch => {
    return saveQuestion({ optionOneText, optionTwoText, author }).then(
      question => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToUser(question));
      }
      );
    };
  }
  
  
  export function addQuestionAnswer(authUser, qid, answer) {
    return dispatch => {
      dispatch(addAnswerToUser(authUser, qid, answer));
      dispatch(addAnswerToQuestion(authUser, qid, answer));
      
      return saveQuestionAnswer(authUser, qid, answer).catch(e => {
        console.warn('Error in addQuestionAnswer:', e);
      });
    };
  }
  
  
  export const SET_AUTH_USER = "SET_AUTH_USER";
  export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
  export const RECEIVE_USERS = "RECEIVE_USERS";
  export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION';
  export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER';
  export const ADD_QUESTION = 'ADD_QUESTION';
  export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER';
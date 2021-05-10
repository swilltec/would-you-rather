import { combineReducers } from "redux";
import authUser from "../reducers/authUser";
import questions from "./question";
import users from "../reducers/users";

export default combineReducers({
  authUser,
  questions,
  users,
});

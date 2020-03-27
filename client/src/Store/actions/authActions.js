import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./actionTypes";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";

//  Register Users

export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/Auth/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login User and Get Token

export const loginUser = userData => dispatch => {
  console.log("Hi");

  axios
    .post("/api/users/login", userData)
    .then(res => {
      console.log("bye");
      // get token
      console.log(res.data);
      const { token } = res.data;
      // save token to loacal storage
      localStorage.setItem("jwtToken", token);
      // set token to Auth Header
      setAuthToken(token);
      //decode token to get user data
      const decoded = jwt_decode(token);
      // set current user
      dispatch(setCurrentUSer(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// set logged in user
export const setCurrentUSer = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

//logout current user
export const logoutCurrentUser = () => dispatch => {
  //remove token from local storage
  localStorage.removeItem("jwtToken");
  //Remove auth Header
  setAuthToken(false);
  // set current user to {}
  dispatch(setCurrentUSer({}));
};

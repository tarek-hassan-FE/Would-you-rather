import React from "react";
// import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthRoute = props => {

//   const { isAuthUser, type } = props;
  const authedUser = useSelector(state => state.authedUser)
  if (authedUser && authedUser.id !== 'guest' && Object.keys(authedUser).length > 0 ) return <Route {...props} />;
  
  return <Redirect to="/" />;

};


export default AuthRoute
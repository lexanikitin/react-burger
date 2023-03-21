import React from 'react';
import {Navigate} from "react-router-dom";
import {getCookie} from "../../utils/cookies";

const OnlyAuthRouteElement = ({element}) => {
  const refreshToken = getCookie('burgerRefreshToken')
  return refreshToken!==null ? element : <Navigate to="/login" replace/>;
};

export default OnlyAuthRouteElement;

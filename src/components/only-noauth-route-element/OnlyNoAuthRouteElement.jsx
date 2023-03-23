import React from 'react';
import {Navigate} from "react-router-dom";
import {getCookie} from "../../utils/cookies";

const OnlyNoAuthRouteElement = ({element}) => {
  const refreshToken = getCookie('burgerRefreshToken')
  return !refreshToken!==null ? element : <Navigate to="/" replace/>;
};

export default OnlyNoAuthRouteElement;

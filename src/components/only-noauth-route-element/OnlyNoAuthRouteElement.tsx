import React from 'react';
import {Navigate} from "react-router-dom";
import {getCookie} from "../../utils/cookies";
import {FC} from "react";

type TOnlyNoAuthRouteElement = {
  element: JSX.Element;
}
const OnlyNoAuthRouteElement : FC<TOnlyNoAuthRouteElement> = ({element}) => {
  const refreshToken = getCookie('burgerRefreshToken')
  return !refreshToken!==null ? element : <Navigate to="/" replace/>;
};

export default OnlyNoAuthRouteElement;

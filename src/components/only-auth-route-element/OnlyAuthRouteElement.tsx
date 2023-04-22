import React, {FC} from 'react';
import {Navigate} from "react-router-dom";
import {getCookie} from "../../utils/cookies";
type TOnlyAuthRouteElement = {
  element: JSX.Element;
}
const OnlyAuthRouteElement : FC<TOnlyAuthRouteElement> = ({element}) => {
  const refreshToken = getCookie('burgerRefreshToken')
  return refreshToken!==null ? element : <Navigate to="/login" replace/>;
};

export default OnlyAuthRouteElement;

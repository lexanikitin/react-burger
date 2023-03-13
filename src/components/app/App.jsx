import React from 'react';
import AppHeader from "../app-header/AppHeader";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import ResetPassword from "../../pages/reset-password/ResetPassword";
import ForgotPassword from "../../pages/forgot-password/ForgotPassword";
import Profile from "../../pages/profile/Profile";
import ConstructorPage from "../../pages/constructorPage/ConstructorPage";
import OnlyAuthRouteElement from "../only-auth-route-element/OnlyAuthRouteElement";
import OnlyNoAuthRouteElement from "../only-noauth-route-element/OnlyNoAuthRouteElement";
import ProfileInfo from "../../pages/profileInfo/ProfileInfo";
import ProfileOrders from "../../pages/profileOrders/ProfileOrders";
import NotFound from "../../pages/notFound/NotFound";

function App() {

  return (
    <div className="App">
      <Router>
        <AppHeader/>
        <Routes>
          <Route path={'/'} element={<ConstructorPage/>}/>
          <Route path='/login' element={
            <OnlyNoAuthRouteElement element={<Login/>}/>}/>
          <Route path='/register' element={
            <OnlyNoAuthRouteElement element={<Register/>}/>}/>
          <Route path='/forgot-password' element={
            <OnlyNoAuthRouteElement element={<ForgotPassword/>}/>}/>
          <Route path='/reset-password' element={
            <OnlyNoAuthRouteElement element={<ResetPassword/>}/>}/>
          <Route path='/profile' element={<OnlyAuthRouteElement element={<Profile/>}/>}>
            <Route index element={<ProfileInfo/>}/>
            <Route path='orders' element={<ProfileOrders/>}/>
          </Route>
          <Route path='/ingredients/:id' element={'ingredients/:id'}/>

          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

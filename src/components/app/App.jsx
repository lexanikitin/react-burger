import React from 'react';
import AppHeader from "../app-header/AppHeader";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import ResetPassword from "../../pages/reset-password/ResetPassword";
import ForgotPassword from "../../pages/forgot-password/ForgotPassword";
import Profile from "../../pages/profile/Profile";
import ConstructorPage from "../../pages/constructorPage/ConstructorPage";

function App() {

  return (
    <div className="App">
      <AppHeader/>
      <Router>
        <Routes>
          <Route path={'/'} element={<ConstructorPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/forgot-password' element={<ForgotPassword/>}/>
          <Route path='/reset-password' element={<ResetPassword/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/ingredients/:id' element={'ingredients/:id'}/>

          <Route path='*' element={'404'}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

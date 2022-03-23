import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';
import Navbar from './navbar/navbar.js';
import ChatPage from './chat/chat.js';
import SignupPage from './signup/signup.js';
import LoginPage from './login/login.js';
import ErrorPage from './error/error.js';

const App = () => {
  return (
    <div className="d-flex flex-column h-100">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<ChatPage />} />
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/signup' element={<SignupPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
    
  );
};

export default App;
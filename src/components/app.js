import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import Navbar from './navbar/navbar.js';
import ChatPage from './chat/chat.js';
import SignupPage from './signup/signup.js';
import LoginPage from './login/login.js';
import ErrorPage from './error/error.js';

const App = () => {
  const [auth, setAuth] = useState(false);

  const LoggedInChat = () => {
    const location = useLocation();

    return (
      auth ? <ChatPage /> : <Navigate to='/login' state={{ from: location }} />
    );
  }


  return (
    <div className="d-flex flex-column h-100">
      <button onClick={() => setAuth(!auth)} className="btn btn-warning">Toggle login</button>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<LoggedInChat />} />
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/signup' element={<SignupPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
    
  );
};

export default App;
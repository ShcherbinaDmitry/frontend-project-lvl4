import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { Navbar, Container, Button } from 'react-bootstrap';
import ChatPage from './chat/chat.js';
import SignupPage from './signup/signup.js';
import LoginPage from './login/login.js';
import ErrorPage from './error/error.js';
import UserContext from '../context/userContext.js';

const App = () => {
  const isLoggedIn = localStorage.getItem('userId') ? true : false;
  const [auth, setAuth] = useState(isLoggedIn);

  const LoggedInChat = () => {
    const location = useLocation();

    return (
      auth ? <ChatPage /> : <Navigate to='/login' state={{ from: location }} />
    );
  }
 
  const AuthButton = () => {
    return (
      auth ? <Button 
        onClick={() => {
        localStorage.removeItem('userId');
        setAuth(false);
        }} 
        variant="primary">Выйти</Button> : null
    );
  };


  return (
    <UserContext.Provider value={{ auth, setAuth }}>
      <div className="d-flex flex-column h-100">
        <Router>
          <Navbar expand="lg" bg="white" className="shadow-sm">
            <Container>
              <Navbar.Brand href="/">Hexlet Chat</Navbar.Brand>
              <AuthButton />
            </Container>
          </Navbar>
          <Routes>
            <Route exact path='/' element={<LoggedInChat />} />
            <Route exact path='/login' element={<LoginPage />} />
            <Route exact path='/signup' element={<SignupPage />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </Router>
      </div>
    </UserContext.Provider>
    
    
  );
};

export default App;
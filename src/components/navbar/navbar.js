import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Bar = () => {
  const auth = true;
  const AuthButton = () => {
    return (
      auth ? <button className="btn btn-primary">Выйти</button> : null
    );
  };

  return (
    <Navbar expand="lg" bg="white" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/">Hexlet Chat</Navbar.Brand>
        <AuthButton />
      </Container>
    </Navbar>
  );
};

export default Bar;
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const auth = true;
  const AuthButton = () => {
    return (
      auth ? <button className="btn btn-primary">Выйти</button> : null
    );
  };

  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Hexlet Chat</NavLink>
        <AuthButton />
      </div>
    </nav>
  );
};

export default Navbar;
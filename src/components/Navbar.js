import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: linear-gradient(45deg, #ff6f61, #dce35b);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #fff;
  margin: 0 10px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
    color: #f0f0f0; /* Slightly lighter color on hover */
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/storybooks">Storybooks</NavLink>
      </div>
      <div>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/about">AboutUs</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>
    </Nav>
  );
};

export default Navbar;

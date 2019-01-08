import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => (
  <>
    <Link to="/">
      <H1>Cyanic Travel</H1>
    </Link>
    <NavBar>
      <NavLink to='/'>
        <Bttn>
          Home
        </Bttn>
      </NavLink>

      <NavLink to='/locations'>
        <Bttn>
          Locations
        </Bttn>
      </NavLink>

      <NavLink to='/login-signup'>
        <Bttn>
          Login/SignUp
        </Bttn>
      </NavLink>
    </NavBar>
  </>
)

export default Navbar;

// STYLES 

const H1 = styled.h1`
  text-align: center;
`;

const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  border: 1px solid black;
`;

const Bttn = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  width: 29rem;
  height: 5rem;
`;

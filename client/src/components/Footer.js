import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => (
  <>
    <Foot>
      <NavLink to='/about'>
        <Bttn>
          About
        </Bttn>
      </NavLink>

      <NavLink to='/faq'>
        <Bttn>
          FAQ
        </Bttn>
      </NavLink>

      <NavLink to='/login-signup'>
        <Bttn>
          Login/SignUp
        </Bttn>
      </NavLink>
    </Foot>
  </>
)

export default Footer;

// STYLES 

const H1 = styled.h1`
  text-align: center;
`;

const Foot = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  border: 1px solid black;
`;

const Bttn = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  width: 29rem;
  height: 2rem;
`;

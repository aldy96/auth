import React from 'react';
import { FaNodeJs } from 'react-icons/fa';
//Style
import { StyledLogo } from './Logo.styled';

const Logo = () => {
  return (
    <StyledLogo to='/'>
      <FaNodeJs />
    </StyledLogo>
  );
};

export default Logo;

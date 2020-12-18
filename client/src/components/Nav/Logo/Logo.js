import React from 'react';
import { FaNodeJs } from 'react-icons/fa';
//Style
import { StyledWrapperLogo } from './Logo.styled';

const Logo = () => {
  return (
    <StyledWrapperLogo to='/'>
      <FaNodeJs />
    </StyledWrapperLogo>
  );
};

export default Logo;

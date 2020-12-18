import React from 'react';
import { Link } from 'react-router-dom';

// Style
import { StyledButton } from '../../Buttons/Buttons';
import { StyledMenuWrapper } from './Menu.styled';

const Menu = () => {
  return (
    <StyledMenuWrapper>
      <li>
        <StyledButton as={Link} to='/'>
          Home
        </StyledButton>
      </li>
      <li>
        <StyledButton as={Link} to='/login'>
          Login
        </StyledButton>
      </li>
    </StyledMenuWrapper>
  );
};

export default Menu;

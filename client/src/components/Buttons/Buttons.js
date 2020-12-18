import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  width: 120px;
  margin: 16px;
  padding: 4px 24px;
  background: transparent;
  border: 2px solid #0074d9;
  border-radius: 10px;
  color: #0074d9;
  cursor: pointer;

  ${({ primary }) =>
    primary &&
    css`
      box-shadow: 0px 17px 10px -10px rgba(0, 0, 0, 0.4);
      background: #0074d9;
      color: white;
      transition: all ease-in-out 300ms;
      &:hover {
        box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
        transform: translateY(2px);
      }
    `};
`;

export const Button = ({ handleClick, children, primary }) => {
  return (
    <StyledButton primary={primary} type='button' onClick={handleClick}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  primary: PropTypes.bool.isRequired,
};

Button.defaultProps = {
  primary: false,
};

export default Button;

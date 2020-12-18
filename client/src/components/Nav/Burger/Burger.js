import React, { useCallback } from 'react';
import { StyledBurger } from './Burger.styled';
const Burger = ({ open, setOpen }) => {
  const handleOpen = useCallback(() => {
    setOpen((open) => !open);
  }, [setOpen]);

  return (
    <StyledBurger open={open} onClick={handleOpen}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;

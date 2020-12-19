import styled from 'styled-components';

export const StyledToggleButton = styled.button`
  width: 70px;
  height: 20px;
  background-color: transparent;
  cursor: pointer;
  color: transparent;
  border: 2px solid ${({ theme }) => theme.mainText};
  border-radius: 10px;
  outline: none;
  padding: 3px;
`;
export const Indicator = styled.div`
  height: 100%;
  width: 25%;
  background-color: ${({ theme }) => theme.mainText};
  border-radius: 10px;
  /* transform: translateX(300%); */
`;

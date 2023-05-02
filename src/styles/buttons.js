import styled from "styled-components";

export const NavButtonStyle = styled.button`
  width: var(--navButton-width-1600px);
  height: var(--navButton-height-1600px);
  font-family: Inter;
  font-weight: 600;
  font-size: 16px;
  background-color: white;
  padding: 12px, 28px, 12px, 28px;
  border-radius: var(--border-radius-button-1600px);
  border: solid 1.5px;
  border-color: var(--collor-grey-4);
  transition: 0.5s;

  :hover {
    background-color: var(--collor-grey-1);
    border-color: var(--collor-grey-1);
    color: var(--collor-grey-10);
  }
`;

export const FiltterButtonStyle = styled.button`
  width: var(--filtterButton-width-1600px);
  height: var(--filtterButton-height-1600px);
  font-family: Lexend;
  font-size: 16px;
  color: var(--collor-grey-3);
  background-color: var(--collor-grey-6);
  border: solid;
  border-color: var(--collor-grey-6);

  :hover {
    background-color: var(--collor-grey-5);
    border-color: var(--collor-grey-5);
  }
  &.selected {
    color: white;
  }
`;

export const CleanFiltterButtonStyle = styled.button`
  width: 279px;
  height: 48px;
  font-size: 16px;
  font-style: semi-bold;
  font-family: Inter;
  font-weight: 600;
  border: solid;
  border-color: var(--collor-brand-2);
  background-color: var(--collor-brand-2);
  border-radius: var(--border-radius-button-1600px);
  color: white;
`;

export const ShowFiltterButtonStyle = styled.button`
  display: none;
  @media (max-width: 760px) {
    display: inline;
    width: 279px;
    height: 48px;
    font-size: 16px;
    font-style: semi-bold;
    font-family: Inter;
    border: solid;
    border-color: var(--collor-brand-2);
    background-color: var(--collor-brand-2);
    border-radius: var(--border-radius-button-1600px);
    color: white;
  }
`;

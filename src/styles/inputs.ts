import styled from "styled-components";

export const DivInputFormStyle = styled.div`
  width: 287px;
  height: 100px;

  span {
    color: var(--collor-alert-1);
  }

  input {
    width: 100%;
    height: 48px;
    border-radius: 4px;
    border-color: var(--collor-grey-7);
    background-color: var(--collor-grey-10);
    font-size: 14px;
    font-family: Inter;
    color: var(--collor-grey-3);
    margin-top: 8px;
  }
  input::placeholder {
    padding-left: 15px;
  }
  label {
    font-size: 14px;
    font-family: Inter;
    font-weight: 500;
  }
`;

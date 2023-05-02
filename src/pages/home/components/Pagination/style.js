import styled from "styled-components";

export const PaginationDivStyle = styled.div`
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 300px;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    width: 100%;
    gap: 25px;
    margin-top: 65px;
  }

  span {
    margin: 0px 23px 0px 23px;
    font-size: 24px;
    font-weight: 600;
  }

  button {
    background-color: white;
    border: none;
    color: var(--collor-brand-2);
    cursor: pointer;
    font-size: 24px;
    font-weight: 600;
  }
`;

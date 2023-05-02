import styled from "styled-components";

export const FilterLabelStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: 16px;
  padding-right: 20px;
  height: 56px;
  font-size: 16px;
  font-weight: 500;

  div {
    color: var(--collor-grey-4);
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
  }
`;

export const FilterDivStyle = styled.div`
  margin-bottom: 76px;
`;

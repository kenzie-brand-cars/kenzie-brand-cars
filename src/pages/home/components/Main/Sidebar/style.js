import styled from "styled-components";

export const SidebarStyle = styled.div`
  margin-left: 30px;
  margin-top: 80px;

  h2 {
    margin-bottom: 15px;
  }
  @media (max-width: 760px) {
    width: 100%;
    padding-right: 66px;
    margin-top: 30px;
    .align_div_class {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .display_content_class {
    display: contents;
  }
`;

export const SelectDivStyle2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  color: var(--collor-grey-3);
  font-size: 20px;
  line-height: 25px;
  margin-bottom: 42px;

  p {
    cursor: pointer;
  }
`;

export const SelectDivStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 26px;
  margin-bottom: 42px;
`;

import styled from "styled-components";

export const FooterDivStyle = styled.div`
  height: 140px;
  background-color: var(--collor-grey-0);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 59px 0px 59px;

  a:link {
    color: white;
    text-decoration: none;
  }
  a:visited {
    color: white;
  }
  a:hover {
    color: white;
  }
  a:visited {
    color: white;
  }

  .nav_div_1 {
    display: flex;
    gap: 5px;
    align-items: end;
  }

  .anchor_main {
    width: 53px;
    height: 50px;
    background-color: var(--collor-grey-1);
    border-radius: var(--border-radius-button-1600px);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 900;
  }
  @media (max-width: 760px) {
    flex-direction: column;
    height: var(--footer-height-375px);

    padding: 45px 0px 45px 0px;
    margin-bottom: 0px;
    .copy_message {
      font-size: 14px;
    }
  }
`;

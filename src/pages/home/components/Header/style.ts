import styled from "styled-components";

export const HeaderStyle = styled.header`
  height: 530px;
  width: var(--page-width);
  background-image: url('https://cdn.discordapp.com/attachments/733520580355293286/1103020532313636904/Photo.png');
  background-color: grey;
  background-size: 1000px 450px;
  background-repeat: no-repeat;
  align-items: center;
  display: flex;
  justify-content: center;
  background-position: center;
  color: white;

  h1 {
    font-size: 46px;
  }

  p {
    font-size: 36px;
  }

  .header_fade {
    width: 100%;
    height: 100%;
    background: rgb(246, 246, 246);
    background: linear-gradient(
      180deg,
      rgba(246, 246, 246, 0) 0%,
      rgba(7, 7, 7, 1) 83%,
      rgba(0, 0, 0, 1) 96%
    );
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
  @media (max-width: 760px) {
    width: 100%;
    height: 625px;
    background-size: 600px 264px;

    .header_fade {
      justify-content: start;
      padding-top: 76px;
    }
    h1 {
      font-size: 32px;
      margin-bottom: 30px;
    }

    p {
      font-size: 26px;
      font-weight: 500;
    }
  }
`;

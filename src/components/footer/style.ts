import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  height: 10rem;
  background-color: #0b0d0d;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 4px;
  h2 {
    justify-content: center;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    color: #fff;
    span {
      font-size: 0.8rem;
    }
  }
  p {
    text-align: center;
    font-size: 0.8rem;
    color: #fff;
  }
`;

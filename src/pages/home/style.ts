import styled from "styled-components";

export const StyledHomePage = styled.div`
  .banner {
    position: relative;
    display: flex;
    width: 100%;
    height: 20rem;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      @media (min-width: 1024px) {
        object-fit: cover;
        width: 50%;
      }
    }
    .filter {
      position: absolute;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
      color: #fff;
    }
  }
  .dashboard {
    width: 100%;
    display: flex;
    /* background-color: red; */
  }
  .display-announces {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    gap: 2rem;
    .card {
      flex-basis: 30%;
    }
  }
`;

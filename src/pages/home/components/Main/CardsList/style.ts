import styled from "styled-components";

export const CardListStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 35px;
  margin-top: 60px;
  width: 100%;
  align-items: center;
  @media (max-width: 760px) {
    width: 375px;
    flex-direction: row;
    flex-wrap: nowrap;
    width: initial;
    height: 450px;
    overflow-x: scroll;
    overflow-y: hidden;
    gap: 12px;
    margin-left: 25px;
    margin-top: 0px;
    ::-webkit-scrollbar-track {
      background-color: #f5f5f5;
      border-radius: 10px;
      margin-right: 20px;
    }
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-image: -webkit-gradient(
        linear,
        left bottom,
        left top,
        color-stop(0.44, var(--collor-brand-3)),
        color-stop(0.72, var(--collor-brand-2)),
        color-stop(0.86, var(--collor-brand-1))
      );
    }
  }
`;

export const CardsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-left: 8rem;
  margin-right: 20px;

  .mobile_filter_button {
    display: none;
  }
  @media (max-width: 1280px) {
    margin-left: 3rem;
  }

  @media (max-width: 760px) {
    width: 100%;
    flex-direction: column;
    margin-top: 73px;
    margin-left: 0px;

    .mobile_filter_button {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 70px;
    }
  }
`;

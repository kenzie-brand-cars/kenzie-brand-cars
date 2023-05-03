import styled from "styled-components";

export const StyledDetailAnnouncementPage = styled.div`
  /* height: 100%; */
  .layout {
    width: 100%;
    height: 100%;
    display: flex;
    .mobile {
      width: 100%;
      height: 100%;
    }
    .desktop {
      display: none;
      width: 50%;
      height: 100%;
      @media (min-width: 1024px) {
        display: flex;
        flex-direction: column;
      }
    }
  }
  .custom-desktop{
    min-height: 15.5rem;
    div{
      height: 100%;
    }
    margin-top: 4rem;
  }
  .custom-mobile{
    @media (min-width: 1024px){
      display: none;
    }
  }
`;

import styled from "styled-components";

export const StyledContainer = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100vh;
  max-width: 100vw;
  overflow-y: hidden;
  background-color: #f1f3f5;
  .content {
    width: 100%;
    height: calc(100% - 5rem);
    margin-top: 5rem;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 8px; /* width of the entire scrollbar */
    }

    &::-webkit-scrollbar-thumb {
      background-color: #4529e6;
      border-radius: 20px;
    }
  }
  .content-children {
    width: 100%;
    height: min-content;
  }
`;

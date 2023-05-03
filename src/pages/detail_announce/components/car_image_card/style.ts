import styled from "styled-components";

export const StyledCarImageCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: calc(100% - 2rem);
  height: 40%;
  background-color: #fdfdfd;
  margin: 0 auto;
  margin-top: 4rem;
  padding: 2rem;
  border-radius: 4px;
  @media (min-width: 1024px){
      height: 35%;
  }
  .card-car{
    width: 100%;
    height: 100%;
    
  }
  img {
    object-fit: contain;
    object-position: center;
    width: 100%;
    height: 100%;
  }
`;

import styled from "styled-components";

export const StyledAnnounceCard = styled.div`
cursor: pointer;
  /* background-color: blue; */
  width: 100%;
  /* height: 10rem; */
  .car-image-container {
    width: 100%;
    height: 5rem;
    background-color: #e9ecef;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .model-name {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  .annunce-description {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    text-overflow: ellipsis;
    margin-bottom: 0.5rem;
  }
  .owner-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    /* width: 100%; */
  }
  .announce-infos{
    /* background-color: red; */
    padding: 1rem 0;
  }
  .car-infos{
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    font-size: .8rem;
  }
  .left-side{
    display: flex;
    gap: 1rem;
    color: #4529E6
  }
`;

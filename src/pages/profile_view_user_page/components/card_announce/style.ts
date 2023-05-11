import styled from "styled-components";



export const StyledCardAnnounce = styled.div`
 @media (min-width: 1024px){
      flex-basis: 20%;
    }
  .card-announce {
    .owner-accounce {
      margin-top: 1rem;
      display: flex;
      gap: 1rem;
      align-items: center;
    }
  }

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

  .car-info-detail {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;
    .left-side {
      span {
        padding: 0.5rem;
        border-radius: 4px;
        color: #4529e6;
        background-color: #edeafd;
      }
      display: flex;
      gap: 1rem;
    }
  }

  .profile_buttons {
    display: flex;
    gap: 12px;
    margin-top: 4px;
  }

  .edit_button,
  .detail_button {
    width: auto;
    padding: 8px;
    border: 1.5px solid black;
    border-radius: 4px;
    font-weight: 700;
    cursor: pointer;
  }
`
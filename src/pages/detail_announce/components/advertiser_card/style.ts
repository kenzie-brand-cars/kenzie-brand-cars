import styled from "styled-components";

export const StyledAdvertiserCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: calc(100% - 2rem);
  height: 50%;
  background-color: #fdfdfd;
  margin: 0 auto;
  margin-top: 1rem;
  padding: 2rem;
  border-radius: 4px;
  .profile-initials {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    min-height: 4rem;
    background-color: #4529e6;
    border-radius: 50%;
    h2 {
      color: #fff;
      font-weight: 500;
      text-align: center;
    }
  }
  p {
    color: #495057;
    line-height: 150%;
    text-align: center;
    /* background-color: red; */
    /* height: 40%; */
    overflow: hidden;
    text-overflow: ellipsis;
    height: calc(100% - 4rem);
    &:hover {
      overflow: auto;
    }
  }
  button {
    padding: 1rem 1.5rem;
    color: #fff;
    background-color: #0b0d0d;
    font-weight: 600;
    border: none;
    border-radius: 4px;
  }
`;

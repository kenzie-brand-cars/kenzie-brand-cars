import styled from "styled-components";

export const StyledRecoveryPasswordPage = styled.div`
  width: 100%;
  
  h1 {
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    font-size: 2.25rem;
    font-weight: 600;
    color: #212529;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    label {
      font-size: 1rem;
      font-weight: 500;
      color: #212529;
      margin-bottom: 0.5rem;
    }

    input {
      width: 30%;
      padding: 1rem;
      border-radius: 4px;
      border: 2px solid #ced4da;
      background-color: #f2f2f2;
      font-size: 1rem;
      font-weight: 400;
      color: #212529;

      &:focus {
        outline: none;
        border-color: #4529e6;
        box-shadow: 0 0 0 0.25rem rgba(69,41,230,0.25);
      }
    }

    p {
      font-size: 1rem;
      font-weight: 500;
      color: #ff4d4f;
      margin-top: 0.5rem;
    }

    button[type="submit"] {
      cursor: pointer;
      width: 30%;
      padding: 1rem;
      border-radius: 4px;
      border: none;
      background-color: #4529e6;
      color: #fff;
      font-size: 1rem;
      font-weight: 500;
      transition: background-color 0.2s ease-in-out;

      &:hover:not(:disabled) {
        background-color: #5f42c6;
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
`;

export const StyledContainerReset = styled.div`
position: relative;
z-index: 10;
width: 100%;
height: 100vh;
max-width: 100vw;
overflow-y: hidden;
background-color: #F1F3F5;
.content{
    width: 100%;
    height: calc(100% - 5rem);
    margin-top: 5rem;
    overflow-y: auto;
}
.content-children{
    width: 100%;
    height: 80%;
}
`
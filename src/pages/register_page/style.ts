import styled from "styled-components";

export const StyledRegisterPage = styled.div`
  padding: 2rem;
  background-color: #fff;

  @media (min-width: 768px) {
    max-width: 50%;
    margin: 0 auto;
    margin-top: 2rem !important;
    margin-bottom: 2rem !important;
  }
  @media (min-width: 1024px){
    max-width: 25%;

  }

  h2 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    label {
      width: 100%;
      p {
        margin-bottom: 0.5rem;
      }
      input {
        width: 100%;
        padding: 1rem;
        border: 1px solid #dee2e6;
        border-radius: 4px;
        &:focus {
          outline: none;
        }
      }
    }
  }
  .double-input {
    display: flex;
    gap: 1rem;
  }
  .container-btn-account {
    display: flex;
    width: 100%;
    justify-content: space-between;
    button {
      border-radius: 8px;
      border: 1px solid #dee2e6;
      width: 45%;
      padding: 1rem;
      background-color: #fff;
      color: #000;
    }
    .active {
      background-color: #4529e6;
      color: #fff;
    }
  }
  .btn-submit {
    cursor: pointer;
    border: none;
    border-radius: 4px;
    padding: 1rem;
    background-color: #4529e6;

    color: #fff;
  }
  .inputs-radio-styled{
    cursor: pointer;
    display: flex;
    justify-content: center;
    /* text-align: center; */
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 8px;
    border: 1px solid #dee2e6;
    width: 45%;
    padding: 1rem;
    background-color: #fff;
    color: #000;
  }
  .inputs-radio-styled:checked{
    background-color: #4529e6;
    color: #fff;
  }
  .buyer::before{
      content: 'Comprador';

    }
    .announcer::before{
      content: 'Anunciante'

    }
`;

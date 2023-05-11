import styled from "styled-components";

interface IStyledModalUser {
  display: boolean;
}

export const StyledModalUser = styled.div<IStyledModalUser>`
  display: ${(props) => (props.display ? "flex" : "none")};
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
  .btn-close {
    position: absolute;
    cursor: pointer;
    right: 1rem;
    top: 1rem;
  }
  .modal-body {
    position: relative;
    min-width: 320px;
    width: 30%;
    height: 80%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    background-color: #fff;
    overflow-x: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 8px; /* width of the entire scrollbar */
    }

    &::-webkit-scrollbar-thumb {
      background-color: #4529e6;
      border-radius: 20px;
    }
    h2,
    h3 {
      padding: 1rem;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      width: 100%;
      padding: 1rem;
      label {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        span {
          font-weight: 500;
        }
      }
      input {
        width: 100%;
        border: 1px solid #eaebed;
        padding: 1rem;
        border-radius: 4px;
      }
    }
  }
  .btn-panel {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    button {
      border: none;
      padding: 1rem;
      color: #fff;
      font-weight: bold;
      border-radius: 4px;
      cursor: pointer;
    }
    .exclude {
      background-color: #cd2b31;
    }
    .confirm {
      background-color: #4529e6;
    }
    .logout {
      background-color: #495057;
    }
  }
  .double-inputs {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .inputs-radio-styled {
    cursor: pointer;
    display: flex;
    justify-content: center;
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
  .inputs-radio-styled:checked {
    background-color: #4529e6;
    color: #fff;
  }
  .published::before {
    content: "Sim";
  }
  .unpublished::before {
    content: "Não";
  }
  .column {
    gap: 0.5rem;
    flex-direction: column;
  }
`;

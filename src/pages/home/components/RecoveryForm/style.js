import styled from "styled-components";

export const MainContainerStyle = styled.main`
  width: 100%;
  height: 45rem;
  padding-top: 15%;
  padding-bottom: 15%;
  position: relative;
  background-color: var(--collor-grey-6);
`;

export const RecoveryPageContainerStyle = styled.div`
  width: 420px;
  height: 540px;
  position: absolute;
  display: flex;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 760px) {
    width: min(90%, 420px);
  }
`;

export const RecoveryFormStyle = styled.div`
  width: 100%;
  background-color: var(--collor-grey-10);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  @media (max-width: 760px) {
    width: 100%;
  }

  form {
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    margin-top: 10%;
  }
`;

export const FormContainerTitleStyle = styled.div`
  width: 287px;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-top: 10%;
`;

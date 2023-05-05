import styled from "styled-components";

export const StyledFormDiv = styled.div`
opacity: 1.0;
font-family: 'Roboto';
position: fixed;
top: 55%; /* Posiciona o topo do modal no meio da tela */
left: 50%; /* Posiciona a esquerda do modal no meio da tela */
transform: translate(-50%, -50%); /* Move o modal para o centro da tela */
display: flex;
width: 520px; /* Define a largura do modal */
height: 823px; /* Define a altura do modal */
background: #FFFFFF;
border-radius: 8px;
flex-direction: column;
padding: 18px 24px;
overflow-y: auto;

h1 {
    font-size: 16px;
}

label, input, h1, p, textarea {
    display: block;
    width: 100%;
}

label {
    padding-block: 18px;
}

input {
    width: 100%;
    height: 40px;
    margin-top: 4px;
    padding-left: 4px;
    border-radius: 4px;
    border: 1px solid grey;
}

textarea {
    height: 50px;
    padding-left: 4px;
    padding-top: 5px;
}

.personal_info {
    padding-top: 36px;
}

.footer_btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.footer_btns button {
    width: 150px;
    height: 50px;
    border-radius: 4px;
    cursor: pointer;
    border: none;
}

.cancel_btn {
    color: #495057;
}

.delete_profile_btn {
    color: #CD2B31;
    background-color: #FDD8D8;
}

.save_profile_btn {
    color: #FFFFFF;
    background-color: #4529E6;
}
`

export const StyledBackgroundDiv = styled.div`
position: fixed;
width: 100vw;
height: 100vh;
background-color: black;
opacity: 0.8`

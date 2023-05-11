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
height: 80%; /* Define a altura do modal */
background: #FFFFFF;
border-radius: 8px;
flex-direction: column;
padding: 18px 24px;
overflow-y: auto;
&::-webkit-scrollbar {
  width: 8px;               /* width of the entire scrollbar */
}

&::-webkit-scrollbar-thumb {
  background-color: #4529E6;   
  border-radius: 20px;      
}
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

.close_icon {
    display: flex;
    flex-direction: row-reverse;
    font-weight: 700;
    cursor: pointer;
}

.footer_btns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.btn_div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
}

.footer_btns button {
    width: 150px;
    height: 50px;
    border-radius: 4px;
    cursor: pointer;
    border: none;
}

.send_announce_btn {
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

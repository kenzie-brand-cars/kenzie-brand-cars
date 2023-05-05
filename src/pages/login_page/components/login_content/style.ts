import styled from "styled-components";

export const StyledLoginContent = styled.div`
width: 90%;
margin: 10px auto;
background-color: white;
padding: 28px 30px;
text-decoration: none;
margin-bottom: 4.9rem;

h1 {
    margin-bottom: 32px;
}

#username,
#password {
    width: 100%;
    height: 45px;
    margin: 0 auto;
}

label {
    margin-top: 32px;
}

a {
    margin-block: 30px;
    text-decoration: none;
    color: #495057;   
}

p {
    margin-block: 30px;
    text-align: center;
    color: #495057;
    font-size: 14px;
}

button {
    width: 100%;
    height: 40px;
}

input {
    border: 1px solid rgba(0,0,0,0.2);
    padding-inline: 5px;
}

label,
input,
a {
    display: block;
    font-weight: 500;
    font-size: 14px;
}

.submit_button {
    background-color: #4529E6;
    color: white;
    border: none;
}

.register_button {
    background-color: transparent;
    border: 1px solid rgba(0,0,0,0.2);
}

@media (min-width: 1024px) {
    width: 500px;
    margin-top: 100px;

    button,
    a,
    .account_message {
        cursor: pointer;
    }
}
`
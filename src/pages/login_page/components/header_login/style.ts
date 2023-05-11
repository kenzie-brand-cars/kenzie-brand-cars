import styled from "styled-components";

export const StyledHeaderLogin = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 25px;
min-width: 120px;
background-color: white;

.burguer_icon {
    display: flex;
    max-width: 25px;
    max-height: 20px
}

.logo_header {
    height: 25px;
}

.login_desktop {
    display: none;
}

@media (min-width: 1024px) {
    padding-inline: 100px;
    .burguer_icon {
        display: none;
    }
    p {
        cursor: pointer;
    }
    .login_desktop {
        display: flex;
        color: #4529E6;
        font-weight: 500;
        align-items: center;
    }
    
    .login_desktop p {
        padding-inline: 20px;
    }

    button {
        min-height: 40px;
        background-color: transparent;
        border: 1px solid rgba(0,0,0,0.2);
        padding: 20px 40px;
        cursor: pointer;
    }
}
`;
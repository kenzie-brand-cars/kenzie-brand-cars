import styled from "styled-components";

export const StyledDetailAnnouncementPage = styled.div`
width: 100%;
height: 100%;
background-color: red;
.layout{
    width: 100%;
    height: 100%;
    display: flex;
}
.original{
    width: 100%;
    height: 100%;
    @media (min-width: 1024px){
        width: 50%;
    }
}
.only-mobile{
    display: flex;
    @media (min-width: 1024px){
        display: none;
    }
}
.desktop{
    display: none;
    margin-top: 3rem;
    width: 50%;
    height: 50%;
    @media (min-width: 1024px){
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
}
`;

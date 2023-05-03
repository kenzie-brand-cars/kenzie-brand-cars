import styled from "styled-components";




export const StyledContainer = styled.div`
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
    height: min-content;
}
`
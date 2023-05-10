import styled from "styled-components";



export const StyledFilter = styled.aside`
.show{
    display: block;
}
.hidden{
    display: none;
}
position: absolute;
top: 5rem;
left: 0;
width: 100%;
padding: 2rem;
background-color: #fff;
height: calc(100vh - 5rem);
overflow-y: auto;
@media (min-width: 1024px){
    position: relative;
    top: 0;
    left: none;
    width: 40%;
    overflow-y: none;
    height: auto;
    .hidden{
    display: block;
}
}
div{
    margin-bottom: 1rem;
}
h2{
    margin-bottom: .5rem;
}
ul{
    display: flex;
    flex-direction: column;
    gap: .3rem;
    label{
        display: flex;
        align-items: center;
        gap: .3rem;
    }
}
`
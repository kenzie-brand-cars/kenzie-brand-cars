import styled from "styled-components";

export const StyledAnnouncerCardDiv = styled.div`
margin-top: 80px;
h2{
    margin-top: 10rem;
}
ul {
    display: flex;
    gap: 40px;
    overflow-x: auto;
}

.pagination {
    margin-top: 80px;
    text-align: center;
}
.page {
    color: #868E96;
}

.forward {
    color: #5126EA;
    font-weight: 700;
    margin-block: 40px;
}

@media (min-width: 800px) {
    width: 1500px;
    margin: 0 auto;
    margin-top: 50px;

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        list-style: none;
    }

    h2 {
        padding-left: 140px;
        padding-bottom: 80px;
    }
}
`

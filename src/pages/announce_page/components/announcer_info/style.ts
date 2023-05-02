import styled from "styled-components";


export const StyledAnnounceHeaderDiv = styled.div`
width: 100vw;
height: 50vh;
background: linear-gradient(to bottom, #4529E6 70%, transparent 70%);
`

export const StyledAnnouncerCard = styled.div`
background-color: white;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 95%;
height: 397px;

    .initials_name {
        display: flex;
        border-radius: 50%;
        background-color: #4529E6;
        align-items: center;
        text-align: center;
        justify-content: center;
        font-size: 38px;
        width: 100px;
        height: 100px;
        color: white;
        margin-top: 40px;
        margin-left: 30px;
    }

    .username {
        width: 150px;
        margin-left: 30px;
    }

    .user_info {
        display: flex;
        align-items: center;
    }

    .announcer_type {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 30px;
        color: #4529E6;
        background-color: #EDEAFD;
        width: 92px;
        height: 32px;
        border-radius: 4px;
        text-align: center;
    }

    .announce_description {
        margin-left: 30px;
        margin-top: 20px;
        color: #495057;
    }

@media (min-width: 800px) {
    top: 40%;
    width: 80%;
}
`
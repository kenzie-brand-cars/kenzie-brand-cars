import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    :root{
        --collor-grey-10:#FDFDFD;
        --collor-grey-0:#0B0D0D;
        --collor-grey-1:#212529;
        --collor-grey-2:#495057;
        --collor-grey-3:#868E96;
        --collor-grey-4: #ADB5BD;
        --collor-grey-5: #CED4DA;
        --collor-grey-6: #DEE2E6;
        --collor-brand-1:#4529E6;
        --collor-brand-2:#5126EA;
        --collor-brand-3:#B0A6F0;
        --collor-brand-4:#EDEAFD;
        --collor-alert-1:#CD2B31;
        --margin-nav-1: 4rem;
        --page-width: 100%;
        --navButton-width-1600px: 133px;
        --navButton-height-1600px: 48px;
        --footer-height-375px: 310px;
        --filtterButton-width-1600px: 125px;
        --filtterButton-height-1600px: 37px;
        --border-radius-button-1600px: 4px;
    }
    body{
        width: 100%;
        height: 100%;
    }
    @media (max-width: 375px){
        body{
            width: 375px;
            height: auto;
        }
    }
    #root {
        width: auto;
        height: auto;
    }

`;

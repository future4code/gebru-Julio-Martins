import styled from "styled-components";
import fundoHome from "../assets/back.jpg"

export const ContainerLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h3{
        margin-top: 100px;
        font-size: 70px;
    }
    
`

export const ButtonArea = styled.div`
    display: flex;
    align-self: center;
    
`

export const ImageArea = styled.div`
    flex-grow: 1;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url(${fundoHome});
    height: 100%;
    `
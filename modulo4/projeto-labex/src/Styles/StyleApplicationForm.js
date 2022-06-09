import styled from "styled-components";
import fundoHome from "../assets/back.jpg"

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ImageArea = styled.div`
    flex-grow: 1;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url(${fundoHome});`
    
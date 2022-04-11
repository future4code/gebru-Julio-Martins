import styled from "styled-components";
import fundoHome from "../assets/back.jpg"

export const ContainerAdminHome = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    h2{
        margin-left: 10px;
    }
`
export const TripsArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    img{
        border-radius: 50%;
    }
`

export const ButtonsArea = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    
`
export const ImageArea = styled.div`
    flex-grow: 1;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${fundoHome});
    width: 100%;
    height: 100%;
  
`
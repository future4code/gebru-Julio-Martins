import styled from "styled-components";
import fundoHome from "../assets/back.jpg"

export const ImageArea = styled.div`
    
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${fundoHome});
    width: 100%;
    height: 100%;
    `

export const ContainerTripDetails = styled.div`
    display: flex;
    flex-direction: column;
    .loading{
        align-self: center;
    }
    h2{
        margin-left: 39%;
    }
`
export const Title = styled.div`
    border-bottom: 1px solid white;
    margin: 30px 10%;
    padding-bottom: 20px;
    h1{
        text-align: center;
        margin-right: 50px;
    }
    
`
export const Area1 = styled.div`
    display: flex;
    margin: 0px 10%;
    
`
export const DescriptionArea1 = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 24%;
    align-items: center;
    text-align:center;
    width:50%;
    margin-bottom: 20px;

  `
export const DescriptionArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
  `
export const ApprovedArea = styled.div`
    display: flex;
    margin-top: 0px;
    margin-right:400px;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
  color: white;
  background: rgba 14, 9, 27, 0.6;
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
    color: white;
    width: 30%;
    border-radius: 5px;
    padding: 5px;
    ol{
        list-style-position: inside;
    }
`
export const Area2 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 10%;
    margin-top: 10px;
    div{
        display: flex;
        flex-wrap: wrap;
        align-self: center;
    }
`
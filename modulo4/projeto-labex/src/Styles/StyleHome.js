import styled from "styled-components";
import fundoHome from "../assets/back.jpg"


export const ContainerHome = styled.div`
    display: flex;
    height: 100%;
    
    
`
export const ButtonArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 18px;
    button:hover{
        transform: scale(1.2);
    }
    #button-trips{
        width: 200px;
    }
`

export const ImageArea = styled.div`
    flex-grow: 1;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url(${fundoHome});
    

    h1{
        display:flex;
        font-size: 80px;
        justify-content: center;
        align-items: center;
        color: white;
    }
    b{
        font-size: 120px;
        color: #4b0082;
    }
`

export const TitleSubtitle = styled.div`
     display: flex;
    justify-content: center;
    align-items: center;
    
    
    
    div{
        display: flex;
        align-items: center;
        margin-top: 100px;        
        button:hover{
        transform: scale(1.2);
    }
    #button-trips{
        width: 200px;
    }
    }
  
`
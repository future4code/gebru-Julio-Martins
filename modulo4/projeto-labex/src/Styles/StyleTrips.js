import styled from "styled-components";
import fundoHome from "../assets/back.jpg"

export const ContainerTrips = styled.div`
  display: flex;
  flex-direction: column;
 
`;

export const ImageArea = styled.div`
     flex-grow: 1;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${fundoHome});
    width: 100%;
    height: 100%;
    `
export const MainTrips = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  
  #button-bottom {
    align-self: center;
    display: none;
    
  
  }
`;
export const TripsArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  justify-content: center;
  
  
  img {
    border-radius: 50%;
  }
`;
export const ButtonsArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

`;

import React from "react";
import styled from "styled-components";
import CreateMessage from "./components/CreateMessage";




const MainContainer = styled.div`
  background-color: black;
  background-size: cover;
  background-image:url(https://images.ctfassets.net/usf1vwtuqyxm/36Av9rljzk87HL0trVZuKw/6286a3cc56f8885cdd9f41666f701b59/WW_HP_20_Years_Generic_1920x1080_Full-Art_HubHeader_NoLogos.jpg);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    height: 100vh;
    width: 100vw;
    position: center;
    box-sizing: border-box;
}
`;

function App() {
  return (
    
    <MainContainer>
      <CreateMessage />
    </MainContainer>
  );
}

export default App;

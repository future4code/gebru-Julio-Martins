import styled from "styled-components";

export const ContainerHeader = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    background: rgba 14, 9, 27, 0.6;
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border-bottom: 1px solid rgba(170, 147, 245, 0.2);
  justify-content: space-between;
    align-items: center;
  
  h1{
    font-size:40px;
      margin-left:10px;
  }
  b{
    font-size: 80px;
        color: #4b0082;
  }
`

export const ButtonsHeader = styled.div`
    display: flex;
    .three-buttons{
        flex-wrap: wrap;
    }
`
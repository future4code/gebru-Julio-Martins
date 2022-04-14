import styled from 'styled-components'

export const Container = styled.div`
  width: 300px;
  height: 170px;
  margin: 30px 10px;
  border-radius: 30px;
  box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
  background: rgba 14, 9, 27, 0.6;
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  display: ${props => props.displayCard};
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  h3 {
    font-size: 1.4em;
  }
`;
export const AreaButtons = styled.div`
  display: flex;
  justify-content: space-evenly;

`;

import styled from 'styled-components'

export const Container = styled.div`
    width: 200px;
    height: 400px;
    margin: 30px 10px;
    border-radius: 10px;
    box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
    display: flex;
    flex-direction: column;
`
export const AreaImg = styled.div`
    height: 200px;
    border-radius: 30px 30px 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-image: url(${props => props.url});
    p{
      background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
      color: white;
      text-align: center;
      margin-top: 2px;
      
    }
`
export const AreaText = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: rgba 14, 9, 27, 0.6;
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border-radius: 0px 0px 30px 30px;
  h3{
      align-self: center;
      text-align: center;
      margin: 5px 0;
    }
    p{
      margin: 0 15px;
      text-align: justify;
    }
`
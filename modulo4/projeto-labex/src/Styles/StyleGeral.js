import styled, { createGlobalStyle } from "styled-components";
import { mainColors } from "../constants/colors";
import fundoHome from "../assets/back.jpg"

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
export const ImageArea = styled.div`
    
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${fundoHome});
    width: 100%;
    height: 100%;
    `

export const Container = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  background-color: ${mainColors.fundo};
  color: white;
  .button-green{
        color: ${mainColors.secundario};
        font-weight: bold;
        margin: 10px;
    }
  .button-white{
      background-color: white;
      color: ${mainColors.secundario};
      font-weight: bold;
      margin: 10px;
      :hover{
        opacity: .5;
      }
  }
`

export const Input = styled.input`
  background-color: white;
  color: ${mainColors.secundario};
  width: 300px;
  margin: 10px;
  border-radius: 10px;
  border: none;
  height: 45px;
  font-size: 1.2em;
  margin-top: 10px;
`
export const Select = styled.select`
  background-color: white;
  color: ${mainColors.secundario};
  width: 300px;
  margin: 10px;
  border-radius: 10px;
  border: none;
  height: 45px;
  font-size: 1.2em;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`

export const ButtonForm = styled.button`

  align-self: center;
  color: ${mainColors.secundario};
  width: 80px;
  height: 45px;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  :hover{
    opacity: .5;
  }
`
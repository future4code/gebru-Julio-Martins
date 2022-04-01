import Earth from "../img/earth.jpg"
import styled from "styled-components"

const EarthBackground = styled.div`
background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
background-image: url(${Earth});
`

export {
    EarthBackground
}
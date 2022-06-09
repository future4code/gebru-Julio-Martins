import styled from "styled-components";

const AddContainer = styled.div`
  width: 76%;
  height: 34rem;
  background: #ffffff10;
  backdrop-filter: blur(12px);
  --webkit-backdrop-filter: blur(12px);
  position: absolute;
  z-index: 3;
  padding: 20px 40px;
  margin: 3rem 0.1rem 0 0.1rem;
  overflow-y: hidden;

  

  button {
    margin-left: 96%;
    padding: 0.1rem 0.4rem;
    background-color: #181818;
    border: none;
    color: #ffffff;
    opacity: 0.8;

    :hover {
      opacity: 1;
    }
  }
`;

const ContainerItems = styled.div`
  padding: 1rem 2rem;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0.8rem 16rem;

  input {
    background-color: transparent;
    border-width: 0px 0px 1px;
    border-color: #cecece;
    padding: 1rem 0.5rem 0.2rem;

    ::placeholder {
      color: #000000;
      font-size: 1.2rem;
    }
  }

  button {
    width: 30%;
    margin: 0.5rem 8.4rem 0;
    padding: 0.2rem 2rem;
    border-radius: 6px;
    border: none;
    background-color: #9A32CD;
    color: #000000;
  }
`;
const Text = styled.div`
  margin-top: 1.8rem;
  line-height: 26px;
  
  img {
    widht: 20px;
  }

  h4 {
    font-size: 1.5rem;
    margin-bottom: 14px;
  }
  details {
    margin-top: 5px;
  }
`;
export { AddContainer, ContainerItems, MainContainer, Text };

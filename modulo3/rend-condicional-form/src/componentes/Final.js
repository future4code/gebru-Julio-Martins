import React from "react";
import styled from "styled-components";

const ContainerFinal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 500px;
    text-align: center;
    font-size: 18px;
    
`;



class Final extends React.Component {
  render () {
    return (
      <ContainerFinal>
        <h3>O FORMULÁRIO ACABOU</h3>
        <p>Muito obrigado por participar! Entraremos em contato!</p>
      </ContainerFinal>
    );
  }
}

export default Final; 
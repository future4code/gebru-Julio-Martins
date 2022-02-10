import React from "react";
import styled from "styled-components";

const ContainerEtapa2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 500px;
    text-align: center;
    font-size: 18px;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const StyledInputs = styled.input`
    margin: 20px;
    width: 200px;
    margin: 0em;
    padding: 1px 6px;
`;



class Etapa2 extends React.Component {
  render () {
    return (
      <ContainerEtapa2>
        <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
        <StyledForm action="#">
            <label for="curso">5. Qual curso?</label>
            <StyledInputs type="text" id="curso" />

            <label for="unidade">6. Qual a unidade de ensino?</label>
            <StyledInputs type="text" id="unidade" />
        </StyledForm>
      </ContainerEtapa2>
    );
  }
}

export default Etapa2; 
import React from "react";
import styled from "styled-components";

const ContainerEtapa1 = styled.div`
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


class Etapa1 extends React.Component {
  render () {
    return (
      <ContainerEtapa1>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <StyledForm action="#">
            <label for="nome">1. Qual seu nome?</label>
            <StyledInputs type="text" id="nome" />

            <label for="idade">2. Qual sua idade?</label>
            <StyledInputs type="text" id="idade" />

            <label for="email">3. Qual seu email?</label>
            <StyledInputs type="text" id="email" />

            <p>4. Qual a sua escolaridade?</p>
            <div>
                <select name="escolaridade">
                    <option value="medioIncompleto">Ensino Médio Incompleto</option>
                    <option value="medioCompleto">Ensino Médio Completo</option>
                    <option value="supIncompleto">Ensino Superior Incompleto</option>
                    <option value="supCompleto">Ensino Superior Completo</option>
                </select>
            </div>
        </StyledForm>
      </ContainerEtapa1>
    );
  }
}

export default Etapa1;
import React from "react";
import styled from "styled-components";
import Etapa1 from "./componentes/Etapa1";
import Etapa2 from "./componentes/Etapa2";
import Etapa3 from "./componentes/Etapa3";
import Final from "./componentes/Final";

const StyledButton = styled.button`
    display: flex;
    margin: auto;
    width: 120px;
    margin-top: -200px;
    justify-content: center;
`;

class App extends React.Component {
  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1: return <Etapa1 />
      case 2: return <Etapa2 />
      case 3: return <Etapa3 />
      default: return <Final />
    }
  }

  irParaProximaEtapa = () => {
    this.setState({etapa: this.state.etapa + 1})
  }



  render () {
    return (
      <div>
        {this.renderizaEtapa()}
        {this.state.etapa <=3 && <StyledButton type="submit" onClick={this.irParaProximaEtapa}>Próxima Etapa</StyledButton>}
      </div>
    );
  }
}

export default App;
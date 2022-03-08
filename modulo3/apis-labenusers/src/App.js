import React from "react";
import axios from "axios";
import Cadastro from "./components/Cadastro";
import Usuarios from "./components/Usuarios";

class App extends React.Component {
  state = {
    telaRenderizada: "singUp",
  };
  mudaTela = () => {
    switch (this.state.telaRenderizada) {
      case "singUp":
        return <Cadastro vaiTelaUsuario={this.vaiTelaUsuario}/>;
      case "listaUsuario":
        return <Usuarios vaiTelaCadastro={this.vaiTelaCadastro}/>;
      default:
        return <h1>Erro! Página não encontrada!</h1>;
    }
  };
  vaiTelaCadastro = () => {
    this.setState({ telaRenderizada: "singUp" });
  };
  vaiTelaUsuario = () => {
    this.setState({ telaRenderizada: "listaUsuario" });
  };
  render() {
    return (
      <div>
        <h1>APIS-LABENUSERS</h1>
        {this.mudaTela()}
      </div>
    );
  }
}
export default App;

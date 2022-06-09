import React from "react";
import axios from "axios";

class Cadastro extends React.Component {
  state = {
    inputNome: "",
    inputEmail: "",
  };
  handleInputNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };
  handleInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  createUser = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail,
    };
    axios
      .post(url, body, {
        headers: {
          Authorization: "Julio-Martins-Gebru",
        },
      })
      .then((res) => {
        alert(`Usuário ${this.state.inputNome} criado com sucesso!`)
        this.setState({inputNome: '', inputEmail:''})
      })
      .catch((err) => alert(err.response.data.message));
  };
  render() {
    return (
      <div>
        <h3>Tela de Cadastro</h3>
        <div>
          <input
            placeholder=" Insira seu nome"
            value={this.state.inputNome}
            onChange={this.handleInputNome}
          />
          <input
            placeholder=" Insira seu email"
            value={this.state.inputEmail}
            onChange={this.handleInputEmail}
          />
          <button onClick={this.createUser}>Cadastrar</button>
        </div>
        <button onClick={this.props.vaiTelaUsuario}>
          Ir para Lista de Usuários
        </button>
      </div>
    );
  }
}
export default Cadastro;

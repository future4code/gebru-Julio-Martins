import React from "react";
import axios from "axios";
import styled from "styled-components";

const UserCard = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  width: 250px;
  color: crimson;
`

class Usuarios extends React.Component {
  state = {
    listaDeUsuarios: [],
  };
  componentDidMount() {
    this.getAllUsers();
  }
  getAllUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "Julio-Martins-Gebru",
          },
        }
      )
      .then((res) => {
        this.setState({ listaDeUsuarios: res.data });
      })
      .catch((err) => console.log(err.response));
  };
  deleteUser=(userId)=>{
      axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,{
          headers:{
              Authorization: 'Julio-Martins-Gebru'
          }
      })
      .then(res => {
          alert(`Usuário deletado!`)
          this.getAllUsers()
      })
      .catch(err => console.log(err.response))

  }
  render() {
    const listaDeUsuariosRenderizado = this.state.listaDeUsuarios.map(
      (user) => {
        return (
          <UserCard key={user.id}>
              <p>{user.name}</p>
            <button onClick={()=> this.deleteUser(user.id)}>Apagar {user.name}</button>
          </UserCard>
        );
      }
    );
    return (
      <div>
        <h3> Usuários</h3>
        {listaDeUsuariosRenderizado}
        <button onClick={this.props.vaiTelaCadastro}>Ir para o Cadastro</button>
      </div>
    );
  }
}
export default Usuarios;

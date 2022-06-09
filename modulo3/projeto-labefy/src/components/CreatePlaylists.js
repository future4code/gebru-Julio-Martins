import React from "react";
import axios from "axios";
import { MainContainer, Text } from "./styles/StyledCreatePlaylist";

const urlApi =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "julio-martins-gebru",
  },
};

export default class CreatePlaylists extends React.Component {
  state = {
    playlist: "",
  };

  onChangePlaylistName = (event) => {
    this.setState({ playlist: event.target.value });
  };

  createPlaylist = async () => {
    const body = { name: this.state.playlist };
    try {
      const res = await axios.post(urlApi, body, headers);

      alert("Playlist criada");
      this.setState({ playlist: "" });
      this.props.getAllPlaylists();
    } catch (err) {
      alert(err.message);
    }
  };

  render() {
    return (
      <div>
        <MainContainer>
          <h2>Crie uma nova playlist</h2>
          <input
            placeholder={"/"}
            value={this.state.playlist}
            onChange={this.onChangePlaylistName}
          />
          <button onClick={this.createPlaylist}>Criar Playlist</button>
          <button onClick={() => this.props.pagePlaylists()}>
            Acessar Playlists
          </button>
        </MainContainer>
        <Text>
          <br/>
          <br/>
          <br/>
          <br/>

          <p>
            Crie sua playlist e adicione suas musicas favoritas.
          </p>
          
        </Text>
      </div>
    );
  }
}

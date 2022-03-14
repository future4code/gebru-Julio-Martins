import React from "react";
import axios from "axios";
import Pic1 from "./images/pic1.png"
import Pic2 from "./images/pic2.png"
import {
  AddContainer,
  ContainerItems,
  MainContainer,
  Text,
} from "./styles/StyledAddTracks";

const urlApi =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "julio-martins-gebru",
  },
};

export default class AddTracks extends React.Component {
  state = {
    name: "",
    artist: "",
    urlTrack: "",
  };

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  onChangeArtist = (event) => {
    this.setState({ artist: event.target.value });
  };
  onChangeURL = (event) => {
    this.setState({ urlTrack: event.target.value });
  };

  addTrackToPlaylist = async (id) => {
    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.urlTrack,
    };
    try {
      const res = await axios.post(
        `${urlApi}/${this.props.playlistId}/tracks`,
        body,
        headers
      );

      alert("Musica adicionada.");
      this.setState({ name: "", artist: "", urlTrack: "" });
      this.props.getPlaylistTracks(this.props.playlistId);
    } catch (err) {
      alert(err.response.message);
    }
  };

  render() {
    return (
      <AddContainer>
        <button onClick={this.props.closeAddPage}>X</button>
        <ContainerItems>
          <MainContainer>
            <input
              placeholder={"Informe o nome da música"}
              value={this.state.name}
              onChange={this.onChangeName}
            />
            <input
              placeholder={"Informe o artista da música"}
              value={this.state.artist}
              onChange={this.onChangeArtist}
            />
            <input
              placeholder={"Informe a url da música"}
              value={this.state.urlTrack}
              onChange={this.onChangeURL}
            />
            <button onClick={() => this.addTrackToPlaylist()}>Adicionar</button>
          </MainContainer>
          <Text>
            <h4>*Instruções</h4>
            <p>
              No streaming da sua preferência, clique em compartilhar na música
              que deseja e então escolha a opção de incorporar faixa. Copie
              apenas a URL que for fornecida.
              
            </p>
            <img src={Pic2} alt="Tutorial Photo" />
           
          </Text>
        </ContainerItems>
      </AddContainer>
    );
  }
}

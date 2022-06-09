import React from "react";
import axios from "axios";
import AddTrack from "./AddTracks";
import LeftButton from "./images/left-chevron.png";
import {
  PlaylistContainer,
  TrackContainer,
  TrackCard,
  LeftButtonContainer,
  TracksListContainer,
  ButtonMainContainer1,
  MainContainer2,
} from "./styles/StyledDetails";

const urlApi =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const headers = {
  headers: {
    Authorization: "julio-martins-gebru",
  },
};

export default class PlaylistsDetails extends React.Component {
  state = {
    addTrackOpen: false,
  };

  openAddTrack = () => {
    this.setState({
      addTrackOpen: true,
    });
  };

  closeAddTrack = (event) => {
    this.setState({
      addTrackOpen: false,
    });
  };

  componentDidMount() {
    this.props.getAllPlaylists();
    this.props.getPlaylistTracks();
  }

  randomNumber() {
    return Math.floor(Math.random() * 100);
  }

  removeTrackFromPlaylist = async (id) => {
    const question = window.confirm(
      "Tem certeza que deseja deletar esta música?"
    );
    if (question) {
      try {
        const res = await axios.delete(
          `${urlApi}/${this.props.playlistId}/tracks/${id}`,
          headers
        );
        alert("Música deletada");
        this.props.getPlaylistTracks(this.props.playlistId);
      } catch (err) {
        alert(err.res.data.message);
      }
    }
  };

  render() {
    const showTracks = this.props.tracks.map((tracks) => {
      return (
        <TrackContainer key={tracks.id}>
          <TrackCard
            src={tracks.url}
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            title="Song"
          />
          <button onClick={() => this.removeTrackFromPlaylist(tracks.id)}>
            Deletar faixa
          </button>
        </TrackContainer>
      );
    });

    return (
      <div>
        {this.state.addTrackOpen && (
          <div>
            <AddTrack
              getPlaylistTracks={this.props.getPlaylistTracks}
              playlistId={this.props.playlistId}
              closeAddPage={this.closeAddTrack}
            />
          </div>
        )}
        <div>
          <LeftButtonContainer>
            <img
              src={LeftButton}
              alt="Arrow Icon"
              onClick={this.props.pagePlaylists}
            />
          </LeftButtonContainer>
          <PlaylistContainer>
            <img
              src={`https://c.tenor.com/trmbJMJIvmkAAAAC/jonah-hill-emo.gif`}
              alt="Emo Gif"
            />
            <li>{this.props.playlistName}</li>
            <details>
              <summary>...
              </summary>
              <button
                onClick={() => this.props.deletePlaylist(this.props.playlistId)}
              >
                Apagar Playlist
              </button>
            </details>
          </PlaylistContainer>
        </div>

        {this.props.tracks.length === 0 && (
          <MainContainer2>
            <h4>Sua playlist está vazia </h4>
            <div>
              <ButtonMainContainer1 onClick={this.openAddTrack}>
                Adicionar Musica
              </ButtonMainContainer1>
            </div>
          </MainContainer2>
        )}
        {this.props.tracks.length > 0 && (
          <div>
            <div>
              <ButtonMainContainer1 onClick={this.openAddTrack}>
                Adicionar Musica
              </ButtonMainContainer1>
            </div>
            <TracksListContainer>{showTracks}</TracksListContainer>
          </div>
        )}
      </div>
    );
  }
}

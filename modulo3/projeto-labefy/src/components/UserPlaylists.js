import React from "react";
import PlaylistsDetails from "./PlaylistsDetails";
import {
  Playlists,
  PlaylistCard,
  ImagePlaylist,
  HeadingPlaylist,
  PlaylistsContainer,
  DeleteButton,
} from "./styles/StyledUserPlaylists";

export default class UserPlaylists extends React.Component {
  state = {
    page: false,
  };

  componentDidMount() {
    this.props.getAllPlaylists();
    this.props.getPlaylistTracks();
  }

  randomNumber() {
    return Math.floor(Math.random() * 100);
  }

  playlistsScreen = () => {
    this.setState({ page: !this.state.page });
  };

  render() {
    const cardPlaylist = this.props.playlists.map((list) => {
      return (
        <div>
          <Playlists
            onClick={() => this.props.getPlaylistTracks(list.id, list.name)}
          >
            <PlaylistCard onClick={() => this.props.pageDetails()}>
              <ImagePlaylist
                src={`https://derpicdn.net/img/view/2018/1/26/1641621.gif`}
                alt="Imagem"
              />
              <HeadingPlaylist>{list.name}</HeadingPlaylist>
            </PlaylistCard>
          </Playlists>
          <DeleteButton
            onClick={() => this.props.deletePlaylist(this.props.playlistId)}
          >
            Deletar playlist
          </DeleteButton>
        </div>
      );
    });

    return (
      <div>
        {this.state.page ? (
          <div>
            <PlaylistsDetails
              pagePlaylists={this.pagePlaylists}
              pageDetails={this.pagePlaylistsDetails}
              pageCreate={this.pageCreatePlaylists}
              pageAdd={this.pageAddTracks}
              playlistName={this.state.playlistName}
              playlistId={this.state.playlistId}
              tracks={this.state.tracks}
              getPlaylistTracks={this.getPlaylistTracks}
              getAllPlaylists={this.getAllPlaylists}
              deletePlaylist={this.deletePlaylist}
            />
          </div>
        ) : (
          <PlaylistsContainer>{cardPlaylist}</PlaylistsContainer>
        )}
      </div>
    );
  }
}

import React from "react";
import Home from "./images/home.png";
import Search from "./images/search.png";
import Library from "./images/biblioteca.png";
import Heart from "./images/heart.png"
import Down from "./images/down.png"
import Logo from "./images/logo.png"
import Face from "./images/face.png"
import Insta from "./images/insta.png"
import Git from "./images/git.png"
import {
  SideBarContainer,
  FirstContainer,
  FirstContainerItem,
  SecondContainer,
  SecondContainerItem,
  AddStyle,
  PlaylistsTitle,
  ContainerItems,
  LogoContainer
} from "./styles/StyledSidebar";

const arrow = () => {
  alert("Em construção");
};

export default class Sidebar extends React.Component {
  componentDidMount() {
    this.props.getAllPlaylists();
  }
 

  render() {
    const playlists = this.props.playlists.map((list) => {
      return (
        <div>
          <div onClick={() => this.props.getPlaylistTracks(list.id, list.name)}>
            <div onClick={() => this.props.pageDetails()}>
              <PlaylistsTitle>{list.name}</PlaylistsTitle>
            </div>
          </div>
        </div>
      );
    });

    return (
      <SideBarContainer>
        <LogoContainer>
          <div>
            <img src={Logo} alt="Home Icon" />
            <h1 onClick={() => this.props.pageHome()}>Emofy</h1>
          </div>
        </LogoContainer>
        <ContainerItems>
          <FirstContainer>
            <FirstContainerItem onClick={() => this.props.pageHome()}>
              <img src={Home} alt="Home Icon" />
              <h4>Início</h4>
            </FirstContainerItem>
            <FirstContainerItem onClick={() => arrow()}>
              <img src={Search}  alt="Search Icon" />
              <h4>Buscar</h4>
            </FirstContainerItem>
            <FirstContainerItem onClick={() => this.props.pagePlaylists()}>
              <img src={Library} alt="Library Icon" />
              <h4>Sua Biblioteca</h4>
            </FirstContainerItem>
          </FirstContainer>
          <SecondContainer>
            <SecondContainerItem onClick={() => this.props.pageCreate()}>
              <AddStyle>+</AddStyle>
              <h4>Criar playlist</h4>
            </SecondContainerItem>
            <FirstContainerItem onClick={() => arrow()}>
              <img src={Heart} alt="Heart Icon" />
              <h4>Músicas Curtidas</h4>
            </FirstContainerItem>
          </SecondContainer>
          <hr />
          <FirstContainerItem >
            <a href="https://www.facebook.com/lLittleJuuh/" target="_blank"> <img src={Face} alt="Facebook Icon" /> </a>
          </FirstContainerItem>
          <FirstContainerItem >
            <a href="https://www.instagram.com/papaidogigi/" target="_blank"> <img src={Insta} alt="Instagram Icon" /></a>
          </FirstContainerItem>
          <FirstContainerItem >
            <a href="https://github.com/baurus2/baurus2" target="_blank"> <img src={Git} alt="Github Icon" /></a>
          </FirstContainerItem>
          <br/>
          <br/>
          <br/>
         
          <FirstContainerItem>
            <img src={Down} alt="Download APP Icon" />
            <h4>Instalar app</h4>
          </FirstContainerItem>



        </ContainerItems>
      </SideBarContainer>
    );
  }
}

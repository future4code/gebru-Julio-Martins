import React from "react";
import {
  FirstContainer,
  FirstTitle,
  FirstContainerItems,
  SecondContainer,
  SecondTitle,
  SecondContainerItems,
} from "./styles/StyledHomePlaylists";

export default class HomePlaylists extends React.Component {
  render() {
    return (
      <div>
        <FirstContainer>
          <FirstTitle>Os maiores sucessos de hoje</FirstTitle>
          <FirstContainerItems
            src="https://open.spotify.com/embed/playlist/37i9dQZF1EIWuKoO0nVcLF?utm_source=generator"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            title="PlaylistSpotify"
          />
          <FirstContainerItems
            src="https://open.spotify.com/embed/artist/6FBDaR13swtiWwGhX1WQsP?utm_source=generator"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            title="PlaylistSpotify"
          />
          <FirstContainerItems
            src="https://open.spotify.com/embed/artist/5aYyPjAsLj7UzANzdupwnS?utm_source=generator"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            title="PlaylistSpotify"
          />
          <FirstContainerItems
            src="https://open.spotify.com/embed/artist/2p4FqHnazRucYQHyDCdBrJ?utm_source=generator"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            title="PlaylistSpotify"
          />
          <FirstContainerItems
            src="https://open.spotify.com/embed/artist/7FBcuc1gsnv6Y1nwFtNRCb?utm_source=generator"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            title="PlaylistSpotify"
          />
          <FirstContainerItems
            src="https://open.spotify.com/embed/artist/20JZFwl6HVl6yg8a4H3ZqK?utm_source=generator"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            title="PlaylistSpotify"
          />
        </FirstContainer>
        <SecondContainer>
          <SecondTitle>Melhores listas Emo</SecondTitle>
          <SecondContainerItems
            src="https://open.spotify.com/embed/playlist/0SNv3J3AJ1jQ5AcmHZ4DUF?utm_source=generator"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
          <SecondContainerItems
            src="https://open.spotify.com/embed/playlist/3n4u4jhvYxSnTOBYAssEiY?utm_source=generator"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
          <SecondContainerItems
            src="https://open.spotify.com/embed/playlist/4EH4sHWLCg1e3Et80vBQIP?utm_source=generator"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
          
        </SecondContainer>
        
      </div>
    );
  }
}

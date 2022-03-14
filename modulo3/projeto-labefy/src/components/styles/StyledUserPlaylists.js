import styled from "styled-components";

const Playlists = styled.div`
  display: flex;
  align-items: center;
  background-color: #9370DB;
  width: 10rem;
  height: 14rem;
  margin: 20px 0 5px;
  border-radius: 10px;
`;
const PlaylistCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px 5px;
`;

const ImagePlaylist = styled.img`
  width: 80%;
  margin: 10px;
`;

const HeadingPlaylist = styled.h4`
  word-wrap: break-word;
  font-size: 0.9rem;
`;

const PlaylistsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  padding: 1rem 0.5rem 1rem 4rem;
`;

const DeleteButton = styled.button`
  padding: 0.2rem 0.4rem;
  border-radius: 6px;
  border: none;
  color: #ffffff;
  background-color: #9A32CD;
  text-align: center;
  margin-left: 2rem;
  opacity: 0.5;

  :hover {
    opacity: 0.8;
  }
`;

export {
  Playlists,
  PlaylistCard,
  ImagePlaylist,
  HeadingPlaylist,
  PlaylistsContainer,
  DeleteButton,
};

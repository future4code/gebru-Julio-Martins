import styled from "styled-components";

const LeftButtonContainer = styled.div`
  background-color: #181818;
  position: fixed;
  width: 2rem;
  height: 2rem;
  border-radius: 90%;
  display: flex;
  align-items: center;
  margin: 0.6rem 1.8rem 0;

  img {
    padding: 0px 20px 0px 12px;
    width: 50%;
  }
`;

const TrackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    padding: 0.2rem 0.4rem;
    border-radius: 6px;
    border: none;
    color: #ffffff;
    background-color: #9370DB;
    text-align: center;
    opacity: 0.6;

    :hover {
      opacity: 0.8;
    }
  }
`;

const TrackCard = styled.iframe`
  width: 80%;
  height: 80px;
  border: 0px;
  margin: 1rem 1rem 0.1rem;
`;

const PlaylistContainer = styled.div`
  height: 13rem;
  background: #181818;
  display: flex;
  align-items: flex-end;

  img {
    border-radius: 100%;
    margin: 1.4rem;
    width: 15%;
    

  }

  li {
    word-wrap: break-word;
    list-style: none;
    font-size: 4rem;
    margin: 1.4rem 0 4rem;
  }

  details summary,
  details button {
    position: absolute;
    cursor: pointer;
  }
  summary {
    list-style: none;
    font-size: 2rem;
    top: 12rem;
    right: 2.4rem;
  }

  details button {
    top: 14.4rem;
    right: 1.4rem;
    background-color: transparent;
    border: none;
    color: #ffffff;
    :hover {
      opacity: 0.6;
    }
  }
`;

const TracksListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ButtonMainContainer1 = styled.button`
  margin: 1rem 1rem 0;
  padding: 0.6rem 2rem;
  border: none;
  border-radius: 4px;
  padding: 1rem 2rem;
  color: #ffffff;
  background-color: #9370DB;
  margin-bottom: 1rem;
`;
const MainContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  margin-top: 5rem;

  h4 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

export {
  PlaylistContainer,
  TrackContainer,
  TrackCard,
  LeftButtonContainer,
  ButtonMainContainer1,
  MainContainer2,
  TracksListContainer,
};

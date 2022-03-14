import styled from "styled-components";

const SideBarContainer = styled.div`
  background-color: #000000;
`;

const LogoContainer = styled.div`
cursor: pointer;


img {
  width: 30%;
  display: flex;
  margin-left: 10px;
  margin-top:10px
  
}
h1{
  display: flex;
  margin-left: 100px;
  margin-top: -40px
 
  
}

`;

const FirstContainer = styled.div`
  margin: 2rem 0;
  cursor: pointer;
`;

const FirstContainerItem = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
  opacity: 0.7;
  padding: 0.4rem 0;
  

  :hover {
    opacity: 1;
  }

  img {
    width: 12%;
    margin-right: 1rem;
  }

  h4 {
    font-size: 0.8rem;
  }
`;

const SecondContainer = styled.div`
  margin-bottom: 2rem;
  cursor: pointer;
`;

const SecondContainerItem = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  margin: 5px;
  opacity: 0.7;
  padding: 0.4rem 0;
  cursor: pointer;

  :hover {
    opacity: 1;
  }

  h4 {
    font-size: 0.86rem;
    margin-left: 1.2rem;
  }
`;

const AddStyle = styled.span`
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  color: #000000;
  width: 12%;
  height: 1.4rem;
  padding-top: 0px;
`;



const PlaylistsTitle = styled.h4`
  width: 90%;
  margin: 0.5rem 0.8rem 0;
  opacity: 0.7;
  cursor: default;

  :hover {
    opacity: 1;
  }
`;
const PlaylistsContainer = styled.div`
  overflow-y: auto;
  height: 10.8rem;
  

  ::-webkit-scrollbar-track {
    background-color: #000000;
  }
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: #282828;
  }
`;

const ContainerItems = styled.div`
  position: fixed;
  width: 16%;
  margin-left: 1.2rem;
  margin-top: 50px
  

  h1 {
    margin: 2rem;
    cursor: pointer;
  }

  hr {
    border-width: 0px 0px 1px;
    width: 90%;
    border-color: #282828;
  }
 
`;

export {
  SideBarContainer,
  FirstContainer,
  FirstContainerItem,
  SecondContainer,
  SecondContainerItem,
  AddStyle,
  PlaylistsTitle,
  PlaylistsContainer,
  ContainerItems,
  LogoContainer,
};

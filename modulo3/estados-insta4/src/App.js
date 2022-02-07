import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
`

const Inputs = styled.div`
  margin: 30px 0;
  font-size: 16px;
  color: #5b5b5b;
  border: 1px black solid;
  padding: 10px 10px 10px 15px;
  box-sizing: content-box;
  z-index: 2;
`

const Input = styled.input`
  margin: 0 10px;
  font-size: 16px;
  border: 1px black solid;
  padding: 10px 10px 10px 15px;
`

const Button = styled.button`
border-radius: 4px;
font-family: Verdana;
font-weight: bold;
font-size: 13px;
padding: 6px 10px;
`

class App extends React.Component {

  state = {

    posts: [
      {
        nomeUsuario: "Giovanni",
        fotoUsuario: "https://picsum.photos/50/45",
        fotoPost: "https://scontent.fcpq5-1.fna.fbcdn.net/v/t39.30808-6/219271829_4121105511311790_2946288656046682806_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHqPwTE6Uk4Z3fxaeCArXmcgE4lxByXOwqATiXEHJc7CnRSj0LRowC9CLYvyLO-9simkJBBnIdzxUUNn6Gxo-lg&_nc_ohc=NbQnIMT_2R8AX-JOgPl&tn=Vc0eT0yrjNfml0P-&_nc_ht=scontent.fcpq5-1.fna&oh=00_AT__-EwAAw2wkeZwiGOG0NNARZeWtE9x3kdJU5z8b43tZg&oe=6202B824",
      },
      {
        nomeUsuario: "Carol",
        fotoUsuario: "https://picsum.photos/50/30",
        fotoPost: "https://scontent.fcpq5-1.fna.fbcdn.net/v/t39.30808-6/272978541_4781447638610904_3399941132710672377_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHbbdjuMDKLrSdT4p0D8cJ2lsv5cUErHzaWy_lxQSsfNioU56NIpSCGAtQ08FKKIrPcqFc72SInhgYp30eR7F7b&_nc_ohc=tJaOcRHYgsEAX_GlHHI&_nc_ht=scontent.fcpq5-1.fna&oh=00_AT-V2DfLN3p3THLDV4eJOkKh1utfrZ78pFR-NKldA4MbUA&oe=6202A313"
      },
      {
        nomeUsuario: "Júlio Cesar",
        fotoUsuario: "https://picsum.photos/50/20",
        fotoPost: "https://scontent.fcpq5-1.fna.fbcdn.net/v/t39.30808-6/272904003_4781447635277571_5030014041142193748_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGlZ-4qCBUGschsWBxiL1KvIhEru9t3AroiESu723cCuqwgkdrXz0hTSATElyL0mMTYP0zfehhdVKaipkb4wTDH&_nc_ohc=mw-NM8546a0AX9VOAI9&_nc_ht=scontent.fcpq5-1.fna&oh=00_AT9cuoUFYENWGtxQALMZ3cX4vfYFIPTrjyJOeGlDcT8l8A&oe=62026D98"
      },
    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  }

  adicionaUsuario = () => {
    const novoUsuario = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };

    const novoUsuarios = [...this.state.posts, novoUsuario];

    this.setState({ posts: novoUsuarios });
    this.setState({valorInputNomeUsuario: "", valorInputFotoUsuario: "", valorInputFotoPost: ""})
  };

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {

    const listaPosts = this.state.posts.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      )
    })

    return (
      <MainContainer>
        {listaPosts}

        <Inputs>
          <Input
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Nome Usuário"}
          />
          <Input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Link Foto Usuário"}
          />
          <Input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Link Foto Post"}
          />
          <Button onClick={this.adicionaUsuario}>Adicionar</Button>
        </Inputs>
      </MainContainer>
    );
  }
}

export default App;

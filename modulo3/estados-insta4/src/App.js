import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Júlio'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://scontent.fcpq5-1.fna.fbcdn.net/v/t39.30808-6/273103726_4781438251945176_1825969709987412667_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeE9bmAU3kgan7xB7XnvJWhRl1RRJ1AcaY2XVFEnUBxpjTMNlN__pA0Jvm4V9e5_TbBdCbcVibgb8bL_1xI9rneS&_nc_ohc=Qcinm-RM_l0AX_Z5p28&_nc_ht=scontent.fcpq5-1.fna&oh=00_AT8_0ccRQyDSrx6xEfQ15RTQdNemRrD-kcEX9nlESr4e6w&oe=61FFDB21'}
        />

      <Post 
nomeUsuario={'Giovanni'}
fotoUsuario={'https://picsum.photos/id/1009/50/50'}
fotoPost={'https://scontent.fcpq5-1.fna.fbcdn.net/v/t39.30808-6/246157490_4409267905828881_5810001421163251547_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFQjDsF6FZ6NMQb66fJJXymgWOl0VHVwXeBY6XRUdXBd2s-xNxcyxS9an7YsNId9Bn0LvUgUYRzcy1VhKIAe865&_nc_ohc=EsU0-NY-9YMAX-Iae3D&_nc_ht=scontent.fcpq5-1.fna&oh=00_AT_srPwE-u1RUH0X4S1-T1fEIcGAUMcaUDAJxbS0xI91LQ&oe=61FE6414'}
      />

<Post 
nomeUsuario={'Carol'}
fotoUsuario={'https://picsum.photos/id/1011/50/50'}
fotoPost={'https://scontent.fcpq5-1.fna.fbcdn.net/v/t39.30808-6/272924292_4781428371946164_5901086221628268919_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeG-QhZArNhoweLlkGmgkDV0ZPh4KkPz7_pk-HgqQ_Pv-iAw6LCD8SpKR-zEj8dqaxGCfrtYwRqmlcQHtnpII4Lq&_nc_ohc=cztUvuMaVAwAX-PUenb&_nc_ht=scontent.fcpq5-1.fna&oh=00_AT_0b1_ZDpvsQNH1mx7cLc72HUqAs-sKpDP_9sPeGsA34w&oe=61FFC9C3'}
      />
      </MainContainer>
    );
  }
}

export default App;
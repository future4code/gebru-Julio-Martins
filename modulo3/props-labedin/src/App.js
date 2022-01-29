import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import foto from './img/eu.jpg'
import email from './img/o-email.png'
import end from './img/endereço.png'
import logo from './img/labenu.png'
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto}
          nome="Júlio Cesar" 
          descricao="Oi, eu sou o Júlio Cesar. Sou aluno da Labenu. Adoro estudar na labenu, mas estou quase brigando com o Astrodev"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>
      <div>
      <CardPequeno
      imagem={email}
      nome="E-mail:"
      descricao="juli0.cesar@ymail.com"
     />
      </div>

      <div>
        <CardPequeno
        imagem={end}
        nome="Endereço:"
        descricao="Rua Seu Coração <3"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={logo}
          nome="Labenu" 
          descricao="Estudante de Web Full-Stack" 
        />

</div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;

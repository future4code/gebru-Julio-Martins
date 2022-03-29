import React, { useState } from 'react'
import Home from './components/Home'
import Matches from './components/Matches'
import {AppDiv} from './Styles/AppStyle'


function App() {
  const [pages, setpages] = useState(true)

  const changePages = () => {
    setpages(!pages)
  }

  return (
    <AppDiv>
      {pages ?(
        <Home changePages={changePages}/>
      ) : (
        <Matches changePages={changePages}/>
      )
    }
    </AppDiv>
  );
}

export default App;
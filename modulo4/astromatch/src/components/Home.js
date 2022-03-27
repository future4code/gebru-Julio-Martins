import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {ContainerDiv, Navbar, MainDiv, ProfileDiv, FooterDiv, IconDiv} from './../Styles/Home'
import AstromatchLogo from './../img/astromatch.png'
import { MySwal } from './SweetAlert2'
import Logo from './../img/logo.png'
import Chat from './../img/chat.png'
import Heart from './../img/heart.png'
import Cross from './../img/cross.png'
import Star from './../img/star.png'






const Home = (props) => {
    const [profile, setProfile] = useState({})


    useEffect(() => {
        getProfileToChoose(props.profile)
    }, [props.profile])

    const getProfileToChoose = () => {
        axios
            .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/julio-martins-gebru/person')
            .then((res) => setProfile(res.data.profile))
            .catch((err) => console.log(err))
    }



    const profiles = () => {
        return (
            <ProfileDiv>
                <img src={profile.photo} alt={profile.name} />
                <p>{profile.name}, {profile.age}</p>
                <span>{profile.bio}</span>
            </ProfileDiv>
        )
    }

    const choosePerson = (choices) => {
        const body = {
            id: profile.id,
            choice: choices
        }
        axios
            .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/julio-martins-gebru/choose-person', body)
            .then((res) => { getProfileToChoose()
                if (res.data.isMatch === true) {
                    MySwal.fire({
                        title: 'Vocês deram Match!',
                        width: 300,
                        color: '#716add',
                        background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
                        backdrop: `
                          rgba(0,0,123,0.4)
                          url("https://sweetalert2.github.io/images/nyan-cat.gif")
                          left top
                          no-repeat
                        `
                      })
                  }
                })
            .catch((err) => console.log(err))
    }


    return (
        <ContainerDiv>
            <Navbar>
                <a><img src={Logo} /></a>
                <img src={AstromatchLogo} />
                <a onClick={() => props.changePages()}><img src={Chat} /></a>
                
            </Navbar>
            <MainDiv>
                {(profile && Object.keys(profile).length !== 0) && profiles()}
            </MainDiv>
            <FooterDiv>
                <IconDiv>
                    <a onClick={() => choosePerson(false)} ><img src={Cross} /></a>
                </IconDiv>
                <IconDiv>
                    <a><img src={Star} /></a>
                </IconDiv>
                <IconDiv>
                    <a onClick={() => choosePerson(true)} ><img src={Heart} /></a>
                </IconDiv>
            </FooterDiv>
        </ContainerDiv>

    )
}

export default Home
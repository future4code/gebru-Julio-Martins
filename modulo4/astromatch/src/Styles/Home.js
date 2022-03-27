import styled from 'styled-components'

const ContainerDiv = styled.div`
    background-color: #FFC0CB;
    width: 60vh;
    height: 100vh;
	display: flex;
	flex-direction: column;
    @media(max-width: 1000px) {
        width: 100vw;
        height: 100vh;
        max-width: 100vw;
      max-height: 89h;
      }
`

const Navbar = styled.div`
    background: linear-gradient(150deg, #D8BFD8 5%, #DDA0DD, #DA70D6);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0;
    margin-top: 0px;
    margin-bottom: 18px;
    border-bottom: 1px solid #FF1493;

    img:nth-child(2) {
        width: 200px;
        height: 60px;

        :hover {
            width: 200px;
            height: 60px;
            opacity: 1;
        }
    }

    a {
        margin: 0 30px;
        cursor: pointer;
        height: 30px;
    }
    
    img {
        width: 2.8rem;

        :hover {
            opacity: 0.8;
        }
        
    }
`

const MainDiv = styled.div`
    position: relative;
    margin: 0 auto;
    width: 55vh;
    height: 70vh;
    border-radius: 10px;

    img {
        width: 40vh;
    }
`

const ProfileDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    @media(max-width: 1000px) {
        width: 97vw;
        height: 60vh;
        max-width: 100vw;
      max-height: 70vh;
      }


    p {
        width: 80%;
        position: absolute;
        top: 290px;
        left: 15px;
        color: #FFC0CB;
        font-size: 25px;
        font-weight: bold;
        text-shadow: 2px 2px 5px black, 3px 3px 5px black, 5px 5px 5px black;
    }

    span {
        position: absolute;
        margin-top: 360px;
        left: 15px;
        width: 90%;
        color: #FFC0CB;
        font-size: 20px;
        text-shadow: 2px 2px 5px black, 3px 3px 5px black, 5px 5px 5px black;
        
    }

    img {
        width: 100%;
        height: 67vh;
        object-fit: cover;
        border-radius: 22px;

    }
`

const FooterDiv = styled.div`
    background: linear-gradient(150deg, #D8BFD8 5%, #DDA0DD, #DA70D6);
    flex: auto;
	display: flex;
    justify-content: center;
	align-items: center;
    border-top: 1px solid #FF1493;
`

const IconDiv = styled.div`
    display: flex;
	align-items: center;
	justify-content: center;
	background: #fff;
	height: 60px;
	width: 60px;
	border-radius: 50%;
	box-shadow: 0 2px 6px 0 rgba(112, 125, 134, 0.14);

    :nth-child(2) {
        height: 48px;
        width: 48px;
        margin: 0 1rem;
        color: #2db1ff;

        img {
            width: 1.5rem;
        }

    }

    a {
        cursor: pointer;
    }

    img {
        width: 2rem;

        :hover {
            width: 2.5rem;
            opacity: 0.8;
        }
    }
`
export {
    ContainerDiv,
    Navbar,
    MainDiv,
    ProfileDiv,
    FooterDiv,
    IconDiv
}
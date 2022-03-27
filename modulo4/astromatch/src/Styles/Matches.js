import styled from 'styled-components'

const Container = styled.div`
    background-color: #FFC0CB;
    width: 60vh;
	display: flex;
	flex-direction: column;

    @media(max-width: 1000px) {
        width: 100vw;
        height: 87vh;
        max-width: 100vw;
      max-height: 89h;
      }
    
`

const Header = styled.div`
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

const Div = styled.div`
    width: 80%;
    min-height: 63vh;
    max-height: 300vh;

    h2 {
        padding: 10px;
        text-align: center;
        font-size: 20px;
        margin-left: 100px;
    }
`


const List = styled.li`
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: space-around;
    border-radius: 10px;
    margin-top: 5px;
    margin-left: 30px;
    padding: 10px; 
    border: 1px solid DeepPink;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        margin-top: 10px;
        object-fit: cover;
    }

    p {
        font-size: 20px;
        font-weight: bold;
    }
`

const FooterDiv = styled.div`
    background: linear-gradient(150deg, #D8BFD8 5%, #DDA0DD, #DA70D6);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    border-top: 1px solid #FF1493;
    

    a {
        margin: 30px;
        cursor: pointer;
        height: 30px;
    }

    img {
        width: 2rem;

        :hover {
            width: 3rem;
            opacity: 0.8;
        }
    }
`
export { Container, Header, Div, List, FooterDiv }
import React from 'react';
import styled from 'styled-components'

const SmallcardContainer = styled.div `
display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 75px;
    width: 300px;
    text-align: center;
    background-color: lightgrey;
    
    `
const EstiloImg = styled.img`
 width: 35px;
    margin-right: 10px;
    border-radius: 50%;
`
function CardPequeno(props) {
    return (
        <SmallcardContainer className="smallcard-container">
            <EstiloImg src={ props.imagem } />
            <div>
                <p> <b>{ props.nome } </b> { props.descricao } </p>
            </div>
        </SmallcardContainer>
    )
}

export default CardPequeno; 
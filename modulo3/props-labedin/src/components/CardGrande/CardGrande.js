import React from 'react';
import styled from 'styled-components'

const EstilosCardGrande = styled.div`
display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 200px;
background-color: lightgrey;
`
const EstiloImgCardGrande = styled.img`
    width: 100px;
    margin-right: 10px;
    border-radius: 30%;
    display: flex;
`
const EstiloH4CardGrande = styled.h4`
margin-bottom: 15px;
`


function CardGrande(props) {
    return (
        <EstilosCardGrande className="bigcard-container">
            <EstiloImgCardGrande  src={ props.imagem } />
            <div>
                <EstiloH4CardGrande>{ props.nome }</EstiloH4CardGrande>
                <p>{ props.descricao }</p>
            </div>
        </EstilosCardGrande>
    )
}

export default CardGrande;
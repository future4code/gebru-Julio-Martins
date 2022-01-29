import React from 'react';
import styled from 'styled-components'

const EstiloDiv = styled.div`
display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
    background-color: lightgrey;
`
const EstiloImg = styled.img`
width: 30px;
    margin-right: 10px;
`

function ImagemButton(props) {
    return (
        <EstiloDiv className="image-button-container">
            <EstiloImg src={ props.imagem }/>
            <p>{ props.texto }</p>
        </EstiloDiv>

    )
}

export default ImagemButton;
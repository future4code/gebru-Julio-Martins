import React, {useState} from "react";
import Button from '@mui/material/Button';
import axios from "axios";
import { BaseURL } from "../constants/urls";
import { useNavigate } from "react-router-dom";
import {Container, AreaButtons} from '../Styles/StyleCardTripAdmin'
export default function CardTripAdmin(props) {
    const navigate = useNavigate()
    const [displayCard, setDisplayCard] = useState('flex')

    const goToDetails = () =>{
        navigate(`/admin/trips/${props.trip.id}`)
    }

  const onDelete = () => {
    const url = `${BaseURL}trips/${props.trip.id}`;
    const token = localStorage.getItem("token")
    const headers = {
      "Content-Type": "application/json",
      'auth': token,
    };
    if (window.confirm(`Tem certeza que deseja deletar essa viagem?`)){
      axios
      .delete(url, { headers })
      .then((resp) => {
        setDisplayCard('none');
      })
      .catch((err) => {
        console.log('Deu erro',err.response);
      });
    }
  };

  return (
    
    <Container displayCard={displayCard}>
      <h3>{props.trip.name}</h3>
      <AreaButtons>
        <Button
          
          variant="contained"
          color="secondary"
          onClick={goToDetails}
        >
          Detalhes
        </Button>
        <Button
          
          variant="contained"
          color="secondary"
          onClick={onDelete}
        >
          Apagar
        </Button>
      </AreaButtons>
    </Container>
    
  );
}

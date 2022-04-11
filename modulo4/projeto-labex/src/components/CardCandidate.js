import React, {useState} from 'react'
import axios from "axios";
import { BaseURL } from "../constants/urls";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import Swal from 'sweetalert2'
import {Container, AreaButtons} from '../Styles/StyleCardCandidate'



export default function CardCandidate(props) {
    const pathParams = useParams();
    const [openSuccess, setOpenSuccess] = useState(false);
    
  
  const onDecide = (approve) => {
    const url = `${BaseURL}trips/${pathParams.id}/candidates/${props.candidate.id}/decide`;
    const token = localStorage.getItem("token")
    const headers = {
      "Content-Type": "application/json",
      'auth': token,
    };
    const body = {
        "approve": approve
    }
    axios
      .put(url, body, { headers })
      .then((resp) => {
        if(approve){
          Swal.fire({
            
            icon: 'success',
            title: 'Candidato aprovado',
            showConfirmButton: false,
            timer: 1500
            
          })
          setOpenSuccess(true);
          
        } else{
          Swal.fire({
            timer: 1500,
            icon: 'error',
            title: 'Candidato reprovado',
            width: 300,
            color: '#716add',
            background: '#fff url(https://sweetalert2.github.io/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              
            `
          })
        }
      })
      .catch((err) => {
        console.log('Deu erro',err.response);
      });
  };

  return (
    <Container>
      <h3>{props.candidate.name}, {props.candidate.age}</h3>
      <p>{props.candidate.applicationText}</p>
      <p><b>Profissão</b>: {props.candidate.profession}</p>
      <p><b>País</b>: {props.candidate.country}</p>
      <AreaButtons>
        <Button
          variant="contained"
          color="primary"
          size='small'
          onClick={()=>{onDecide(true)}}
        >
          Aprovar
        </Button>
        <Button
          variant="contained"
          color="primary"
          size='small'
          onClick={()=>{onDecide(false)}}
        >
          Reprovar
        </Button>
      </AreaButtons>
     
    </Container>
  );
}

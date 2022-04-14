import React from "react";
import { ButtonsHeader, ContainerHeader } from "../Styles/StyleHeader";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import HomeIcon from '@mui/icons-material/Home';


export default function Header(props) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(props.path);
  };
  
  const goHome = () =>{
    navigate("/")
  }

  return (
    <ContainerHeader>
      <h1>Labe<b>X</b></h1>
      <ButtonsHeader>
        <IconButton color='inherit' onClick={goHome}>
          <HomeIcon fontSize="large" color="primary"  />
        </IconButton>
        <Button variant="contained"  onClick={goBack}>
          Voltar
        </Button>
      </ButtonsHeader>
    </ContainerHeader>
  );
}

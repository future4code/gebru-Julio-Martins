import React from "react";
import {
  ButtonArea,
  ContainerHome,
  ImageArea,
  TitleSubtitle,
} from "../Styles/StyleHome";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export default function HomePage() {
  const navigate = useNavigate();

  const goToTrips = () => {
    navigate(`/trips/list`);
  };

  const goToAdmin = () => {
    navigate("/admin/trips/list");
  };

  return (

    
    <ContainerHome>

      <ImageArea>
      <h1> Labe<b>X</b></h1>
        <TitleSubtitle>

          <div>
            <Button
              size="large"
              onClick={goToAdmin}
              variant="contained"
              className="button-white"
              id="button-trips"
              
            >
              Área de Admin
            </Button>
          </div>
          
         
        </TitleSubtitle>
    
        <ButtonArea>
          <Button
            onClick={goToTrips}
            color="primary"
            variant="contained"
            size="large"
            className="button-white"
            id="button-trips"
            
          >
            Nossas Viagens
          </Button>
        </ButtonArea>
      </ImageArea>
    </ContainerHome>
  );
}

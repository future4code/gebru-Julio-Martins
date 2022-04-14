import React from "react";
import CardTrip from "../components/CardTrip";
import Header from "../components/Header";
import {
  ButtonsArea,
  ContainerTrips,
  MainTrips,
  TripsArea,
  ImageArea,
} from "../Styles/StyleTrips";
import { BaseURL } from "../constants/urls";
import useRequestData from "../hooks/useRequestData";
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from "react-router-dom";


export default function ListTripsPage() {
  const [trips, isLoading, error] = useRequestData(`${BaseURL}trips`);
  const navigate = useNavigate();

  const goToApplicationForm = () => {
    navigate("/trips/application");
  };

  const tripsList =
    trips &&
    trips.trips.map((item) => {
      return <CardTrip key={item.id} trip={item} />;
    });
  return (
    <ImageArea>
    <ContainerTrips>
      
      <Header />
      <MainTrips>
        <ButtonsArea>
          <h2>Nossas viagens</h2>
          <Button
            size="small"
            onClick={goToApplicationForm}
            color="primary"
            variant="contained"
            className="button-green"
          >
            Inscrever-se
          </Button>
        </ButtonsArea>

        <TripsArea>
          {isLoading && <CircularProgress color="primary" />}
          {!isLoading && error && <p>Ocorreu um erro</p>}
          {!isLoading && tripsList && tripsList}
        </TripsArea>
        <Button
          id = "button-bottom"
          size="small"
          onClick={goToApplicationForm}
          color="primary"
          variant="contained"
          className="button-green"
      
        >
          Inscrever-se
        </Button>
      </MainTrips>
      
      
    </ContainerTrips>
    </ImageArea>
  );
}

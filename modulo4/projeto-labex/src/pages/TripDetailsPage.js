import React, {useState, useEffect} from "react";
import { EarthBackground } from "../style/StyleBackground";
import { goBack } from "../routes/coordinators";
import { useNavigate, useParams } from "react-router-dom";
import { StyleTrip } from "../style/StyleTripDetails";


const TripDetailsPage = () =>{

  const navigate = useNavigate()
  const params = useParams()

  return (

    <EarthBackground>
      <StyleTrip>
          <div>
          <h2>Viagem Disponivel</h2>
          <p>Descrição da viagem</p>
          <p>Candidatos</p>
          </div>
          <div>
          <button onClick={()=>goBack(navigate, params)}>voltar</button>
          </div>
      </StyleTrip>
      </EarthBackground>
  )
}

export default TripDetailsPage;
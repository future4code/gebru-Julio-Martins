import React, {useState, useEffect} from "react";
import { goBack } from "../routes/coordinators";
import { useNavigate } from "react-router-dom";
import { StyleCreate } from "../style/StyleCreateTrip";
import { EarthBackground } from "../style/StyleBackground";

const CreateTripPage = () =>{
  const navigate = useNavigate()

  return (

    <EarthBackground>
      <StyleCreate>
          <h2>Criar Viagem</h2>
          <div>
              <p>Form para Criar Viagem</p>
          </div>
          <div>
          <button onClick={()=>goBack(navigate)}>voltar</button>
          <button>Criar</button>
          </div>
      </StyleCreate>
      </EarthBackground>
  )
}

export default CreateTripPage;
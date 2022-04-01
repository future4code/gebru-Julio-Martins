import React, {useState, useEffect} from "react";
import { goBack } from "../routes/coordinators";
import { useNavigate } from "react-router-dom";
import { StyleApplication } from "../style/StyleApplication";
import { EarthBackground } from "../style/StyleBackground";



const ApplicationFormPage = () =>{
  const navigate = useNavigate()

  return (

    <EarthBackground>
      <StyleApplication>
          <h2>Form para inscrever-se</h2>
          <div>
          <button onClick={()=>goBack(navigate)}>Voltar</button>
          <button>Enviar</button>
          </div>
      </StyleApplication>
      </EarthBackground>
  )
}

export default ApplicationFormPage;
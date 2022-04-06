import React, {useState, useEffect} from "react";
import { EarthBackground } from "../style/StyleBackground";
import { goBack } from "../routes/coordinators";
import { useNavigate, useParams } from "react-router-dom";
import { StyleTrip } from "../style/StyleTripDetails";
import { urlApi } from "../constants/BaseUrl";
import axios from "axios";


const TripDetailsPage = () =>{

  const navigate = useNavigate()
  const params = useParams()
  useEffect (() =>{

    const headers = {
        headers: {
            auth: localStorage.getItem("token")
        }
    }
    axios
    .get(`${urlApi}/trip/JvE0k0Qd29jaFUI3iHre`, headers)
    .then((res)=>{
        console.log(res.data.trip)
    })
    .catch((err)=>{
        console.log("Erro:", err.response)
    })
}, [])


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
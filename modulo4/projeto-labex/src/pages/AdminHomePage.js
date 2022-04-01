import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinators";
import { goToCreateTripPage } from "../routes/coordinators";
import { goToHomePage } from "../routes/coordinators";
import { goToTripDetailsPage } from "../routes/coordinators";
import { StyleAdmin } from "../style/StyleAdmin";
import { EarthBackground } from "../style/StyleBackground";

const AdminHomePage = () =>{

  const navigate = useNavigate()

  return (

    <EarthBackground>
      <StyleAdmin>
          <h2>Painel Administrativo</h2>
          <div>
          <button onClick={()=>goBack(navigate)}>voltar</button>
          <button onClick={()=>goToCreateTripPage(navigate)}>Criar Viagem</button>
          <button onClick={()=>goToHomePage(navigate)}>Logout</button>
          </div>
          <div>
              <div>
                  <button onClick={()=>goToTripDetailsPage(navigate)}>VIAGENS DISPONIVEIS</button>
              </div>
          </div>
          <div>

          </div>
      </StyleAdmin>
      </EarthBackground>
  )
}

export default AdminHomePage;
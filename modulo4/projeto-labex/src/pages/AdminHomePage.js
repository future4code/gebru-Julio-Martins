import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { goToCreateTripPage , goToHomePage, goToTripDetailsPage, goBack, goToLoginPage } from "../routes/coordinators";
import { StyleAdmin } from "../style/StyleAdmin";
import { EarthBackground } from "../style/StyleBackground";
import { useProtectedPage } from "../hooks/ProtectPage";


const AdminHomePage = () =>{

    useProtectedPage()


  const navigate = useNavigate()
  const goToHomePage= () => {
    localStorage.removeItem("token")
    goToLoginPage(navigate)
  }

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
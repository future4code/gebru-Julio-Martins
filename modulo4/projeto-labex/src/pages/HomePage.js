import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToListTripsPage } from "../routes/coordinators";
import { goToLoginPage } from "../routes/coordinators";
import { StyleHome } from "../style/StyleHome";
import { EarthBackground } from "../style/StyleBackground";

const HomePage = () => {

  const navigate = useNavigate()

  return (
    <EarthBackground>
      <StyleHome>
        <h1>Labex</h1>
        <div>
          <button onClick={() => goToListTripsPage(navigate)}>Ver Viagens</button>
          <button onClick={() => goToLoginPage(navigate)}>Área de Admin</button>
        </div>
      </StyleHome>
    </EarthBackground>
  )
}
export default HomePage;
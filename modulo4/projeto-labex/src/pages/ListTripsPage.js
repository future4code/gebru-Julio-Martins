import React, {useState, useEffect} from "react";
import { goBack } from "../routes/coordinators";
import { useNavigate } from "react-router-dom";
import { goToApplicationFormPage } from "../routes/coordinators";
import { StyleList } from "../style/StyleListTrip";
import { EarthBackground } from "../style/StyleBackground";




const ListTripPage = () =>{

    const navigate = useNavigate()

    return (

        <EarthBackground>
        <StyleList>
        <h2>Lista de Viagens</h2>
            <div>
                
            <button onClick={()=>goBack(navigate)}>Voltar</button>          
            <button onClick={()=>goToApplicationFormPage(navigate)}>Inscrever-se</button>
            </div>
            

        </StyleList>
        </EarthBackground>
    )
}

export default ListTripPage;
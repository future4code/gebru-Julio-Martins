import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinators";
import { goToAdminHomePage } from "../routes/coordinators";
import { StyleLogin } from "../style/StyleLogin";
import { EarthBackground } from "../style/StyleBackground";


const LoginPage = () =>{
    const navigate = useNavigate()

    return (

        <EarthBackground>
                    <StyleLogin>
            <h2>Login Page</h2>
            <div>
            <input placeholder="Email"></input>
            <input placeholder="Senha"></input>
            </div>
            <div>
                <button onClick={()=>goBack(navigate)}>Voltar</button>
                <button onClick={()=>goToAdminHomePage(navigate)}>Entrar</button>
            </div>
        </StyleLogin>
        </EarthBackground>
    )
}

export default LoginPage;
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToHomePage } from "../routes/coordinators";
import { goToAdminHomePage } from "../routes/coordinators";
import { StyleLogin } from "../style/StyleLogin";
import { EarthBackground } from "../style/StyleBackground";
import { goToTripDetailsPage } from "../routes/coordinators";
import { urlApi } from "../constants/BaseUrl";
import axios from "axios";


const LoginPage = () =>{
    
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onChangeEmail = (event) =>{
        setEmail(event.target.value)
    }
    const onChangePassword = (event) =>{
        setPassword(event.target.value)
    }
    const onSubmitLogin = () => {
        const body = {
            email: email,
            password: password
        }

        axios
        .post(`${urlApi}/login`, body)
        .then((res) =>{
            localStorage.setItem("token", res.data.token)
            goToAdminHomePage(navigate)
        })
        .catch((err) =>{
            alert ("Senha ou Usuário errado", err.response)
        })
    }

    return (

        <EarthBackground>
                    <StyleLogin>
            <h2>Login Page</h2>
            <div>
            <input placeholder="Email"
            type="email"
            value={email}
            onChange={onChangeEmail}
            />
            <input placeholder="Senha"
            type="password"
            value={password}
            onChange={onChangePassword}/>
            </div>
            <div>
                <button onClick={()=>goToHomePage(navigate)}>Voltar</button>
                <button onClick={onSubmitLogin}>Entrar</button>
            </div>
        </StyleLogin>
        </EarthBackground>
    )
}

export default LoginPage;
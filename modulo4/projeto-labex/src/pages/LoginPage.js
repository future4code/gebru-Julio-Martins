import React, {useState} from "react";
import axios from "axios";
import { BaseURL } from "../constants/urls";
import { ButtonForm, Form, Input } from "../Styles/StyleGeral";
import { useNavigate } from "react-router-dom";
import { ButtonArea, ContainerLogin, ImageArea} from "../Styles/StyleLogin";
import Header from "../components/Header";
import { useForm } from "../hooks/useForm";
import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function LoginPage() {
  const navigate = useNavigate();
  const { form, onChange} = useForm({email:"", password:''})
  const [open, setOpen] = useState(false);
  const [msgError, setMsgError] = useState('')

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    const url = `${BaseURL}login`;
    const headers = {
      'Content-Type': 'application/json'}
    axios
      .post(url, form, {headers})
      .then((resp) => {
        localStorage.setItem("token", resp.data.token);
        navigate("/admin/trips/list", { replace: true });
      })
      .catch((err) => {
        setOpen(true)
        setMsgError(err.response.data.message)
      });
  };

  return (
    <ImageArea>
    <ContainerLogin>
    <Header path={"/"} />
      <h3>Login</h3>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Email"
          type="email"
          required
          name="email"
          value={form.email}
          onChange={onChange}
        />
        <Input
          placeholder="Senha"
          name="password"
          value={form.password}
          onChange={onChange}
          type="password"
          required
        />
        <ButtonArea>
          <ButtonForm>ENTRAR</ButtonForm>
        </ButtonArea>
      </Form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {msgError}
        </Alert>
      </Snackbar>
    </ContainerLogin>
    </ImageArea>
  );
}

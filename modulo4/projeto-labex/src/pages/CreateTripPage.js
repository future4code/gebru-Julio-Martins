import React, { useState } from "react";
import Header from "../components/Header";
import { ContainerForm } from "../Styles/StyleApplicationForm";
import { useProtectedPage } from "../hooks/useProtectedPage";
import {
  ButtonForm,
  Form,
  Input,
  Select,
  ImageArea,
} from "../Styles/StyleGeral";
import axios from "axios";
import { BaseURL } from "../constants/urls";
import { useForm } from "../hooks/useForm";
import Swal from 'sweetalert2'


export default function CreateTripPage() {
  useProtectedPage();
  const [openError, setOpenError] = useState(false);
  const [msgError, setMsgError] = useState("");

  const { form, onChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });


  const onSubmit = (event) => {
    event.preventDefault();
    const url = `${BaseURL}trips`;
    const token = localStorage.getItem("token");
    const headers = {
      "Content-Type": "application/json",
      auth: token,
    };
    axios
      .post(url, form, { headers })
      .then((resp) => {
        Swal.fire({
          timer: 1500  ,
          icon: 'success',
          title: 'Viagem Criada',
          showConfirmButton: false,
          
          
        })
      })
      .catch((err) => {
        setOpenError(true);
        setMsgError(err.response.data.message);
      });

    cleanFields();
  };

  return (
    <ImageArea>
    <ContainerForm>
      <Header path={-1} />
      <h1>Criar Viagem</h1>
      <Form onSubmit={onSubmit}>
        <Select required name="planet" value={form.planet} onChange={onChange}>
          <option disabled selected value={""}>
            Planeta:
          </option>
          <option value={"Mercúrio"}>Mercúrio</option>
          <option value={"Vênus"}>Vênus</option>
          <option value={"Terra"}>Terra</option>
          <option value={"Marte"}>Marte</option>
          <option value={"Jupiter"}>Jupiter</option>
          <option value={"Saturno"}>Saturno</option>
          <option value={"Urano"}>Urano</option>
          <option value={"Netuno"}>Netuno</option>
          <option value={"Plutão"}>Plutão</option>
        </Select>
        <Input
          required
          placeholder="Nome"
          name="name"
          value={form.name}
          onChange={onChange}
        />
        <Input
          required
          placeholder="Descrição"
          name="description"
          value={form.description}
          onChange={onChange}
        />
        <Input
          required
          placeholder="Data"
          name="date"
          value={form.date}
          onChange={onChange}
          type="date"
        />
        <Input
          required
          placeholder="Duração em dias"
          name="durationInDays"
          value={form.durationInDays}
          onChange={onChange}
          type="number"
        />
        <ButtonForm >CRIAR</ButtonForm>
         
      </Form>
      
    </ContainerForm>
    </ImageArea>
  );
}

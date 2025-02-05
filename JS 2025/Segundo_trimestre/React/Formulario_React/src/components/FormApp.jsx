import { useState } from 'react';
import FormInput from "./FormInput";
import BtnForm from './BtnForm';

const FormApp = () => {
  const [contrasena, setContrasena] = useState("");
  const [errores, setErrores] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telf: "",
    fechaNacimiento: "",
    contrasena: "",
    confirmarContrasena: ""
  });
  const [valores, setValores] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telf: "",
    fechaNacimiento: "",
    contrasena: ""
  });
  const [formTocado, setFormTocado] = useState(false);

  const validarNombre = (e) => {
    setFormTocado(true);
    const regex = /^[a-zA-Z]{3,10}$/;
    if (regex.test(e.target.value)) {
      setErrores({ ...errores, nombre: "" });
      setValores({ ...valores, nombre: e.target.value });
    } else {
      setErrores({ ...errores, nombre: "Nombre incorrecto. Debe tener entre 3 y 10 letras." });
    }
  };

  const validarApellido = (e) => {
    setFormTocado(true);
    const regex = /^[A-Z][a-zA-Z]{2,9} [A-Z][a-zA-Z]{2,9}$/;
    if (regex.test(e.target.value)) {
      setErrores({ ...errores, apellido: "" });
      setValores({ ...valores, apellido: e.target.value });
    } else {
      setErrores({ ...errores, apellido: "Apellidos incorrectos. Deben tener entre 3 y 10 letras cada uno y empezar con mayúscula." });
    }
  };

  const validarEmail = (e) => {
    setFormTocado(true);
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.(com|es)$/;
    if (regex.test(e.target.value)) {
      setErrores({ ...errores, email: "" });
      setValores({ ...valores, email: e.target.value });
    } else {
      setErrores({ ...errores, email: "Email incorrecto. Debe ser un correo de Gmail válido." });
    }
  };

  const validarTelefono = (e) => {
    setFormTocado(true);
    const regexTelefono = /^\+?(\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    if (regexTelefono.test(e.target.value)) {
      setErrores({ ...errores, telf: "" });
      setValores({ ...valores, telf: e.target.value });
    } else {
      setErrores({ ...errores, telf: "Número de teléfono incorrecto. Debe ser un número válido." });
    }
  };

  const validarContrasena = (e) => {
    setFormTocado(true);
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/;
    if (regex.test(e.target.value)) {
      setErrores({ ...errores, contrasena: "" });
      setContrasena(e.target.value);
    } else {
      setErrores({ ...errores, contrasena: "Contraseña incorrecta. Debe tener al menos 4 caracteres, una mayúscula, una minúscula, un número y un carácter especial." });
    }
  };

  const validarConfirmarContrasena = (e) => {
    setFormTocado(true);
    if (e.target.value === contrasena) {
      setErrores({ ...errores, confirmarContrasena: "" });
      setValores({ ...valores, contrasena: e.target.value });
    } else {
      setErrores({ ...errores, confirmarContrasena: "Las contraseñas no coinciden." });
    }
  };

  const validarFechaNacimiento = (e) => {
    setFormTocado(true);
    const fechaNacimiento = new Date(e.target.value);
    const hoy = new Date();
    const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    const dia = hoy.getDate() - fechaNacimiento.getDate();
    if (edad > 18 || (edad === 18 && mes > 0) || (edad === 18 && mes === 0 && dia >= 0)) {
      setErrores({ ...errores, fechaNacimiento: "" });
      setValores({ ...valores, fechaNacimiento: e.target.value });
    } else {
      setErrores({ ...errores, fechaNacimiento: "Debe tener al menos 18 años." });
    }
  };

  const esFormularioCorrecto = () => {
    return formTocado && Object.values(errores).every(error => error === "") && Object.values(valores).every(valor => valor !== "");
  };

  const verDatos = (e) => {
    e.preventDefault();
    if (esFormularioCorrecto()) {
      console.log(valores);
    }
  };


  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form className="bg-dark d-flex flex-column justify-content-between w-75 p-5 rounded-5" onSubmit={verDatos} action="#">
        <h1 className="fs-1 text-light text-center">Formulario de registro</h1>

        <FormInput tipo="text" placeholder="test" id="nombre" texto="Nombre" regex={validarNombre} error={errores.nombre} icono="bi-person" />

        <FormInput tipo="text" placeholder="test" id="apellido" texto="Apellido" regex={validarApellido} error={errores.apellido} icono="bi-person" />

        <FormInput tipo="number" placeholder="test" id="telf" texto="Número de teléfono" regex={validarTelefono} error={errores.telf} icono="bi-telephone" />

        <FormInput tipo="date" placeholder="test" id="fechaNacimiento" texto="Fecha de nacimiento" regex={validarFechaNacimiento} error={errores.fechaNacimiento} icono="bi-calendar" />

        <FormInput tipo="mail" placeholder="test" id="email" texto="Email" regex={validarEmail} error={errores.email} icono="bi-envelope" />

        <FormInput tipo="password" placeholder="test" id="contra" texto="Contraseña" regex={validarContrasena} error={errores.contrasena} icono="bi-lock" />

        <FormInput tipo="password" placeholder="test" id="confContra" texto="Confirmar contraseña" regex={validarConfirmarContrasena} error={errores.confirmarContrasena} icono="bi-lock" />

        <BtnForm correcto={formTocado && esFormularioCorrecto()}/>
      </form>
    </div>
  );
};

export default FormApp;
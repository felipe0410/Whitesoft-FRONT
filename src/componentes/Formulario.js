
import React, { useEffect, useState } from "react";
import { useForm } from "../Hooks/useForm";
const initialForm = {
  nombre: "",
  apellidos: "",
  correo: "",
  contraseña: "",
};
/* validaiones */
const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,8}$/;

  if (!form.nombre.trim()) {
    errors.nombre = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.nombre.trim())) {
    errors.nombre = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
  }

  if (!form.apellidos.trim()) {
    errors.apellidos = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.apellidos.trim())) {
    errors.apellidos = "El campo 'Apellidos' sólo acepta letras y espacios en blanco";
  }


  if (!form.correo.trim()) {
    errors.correo = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.correo.trim())) {
    errors.correo = "El campo 'Email' es incorrecto";
  }

  if (!form.contraseña.trim()) {
    errors.contraseña = "El campo 'contraseña' es requerido";
  } else if (!regexComments.test(form.contraseña.trim())) {
    errors.contraseña =
      "El campo 'contraseña' no debe exceder los 8 caracteres";
  }

  return errors;
};


function Formulario(params) {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  const [paises, setpaises] = useState([]);

  useEffect(() => {
    console.log("%cSe monto el componente", "color:green")
    fetch(("https://restcountries.com/v2/all?fields=name")).then(
      response => response.json()).then(
        data => {
          setpaises(data)
        }).catch(error => console.error(error));
  }, [])

  
  return (

    <div className="boxx">
      <h1>CREAR CUENTA</h1>

      <form onSubmit={handleSubmit}>
        <label className="box1">NOMBRES</label>
        <input className="box2"
          type="text"
          name="nombre"
          placeholder="Escribe tu nombre"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.nombre}
          required
        />
        {errors.nombre && <p className="errors">{errors.nombre}</p>}
        <label className="box1">APELLIDOS</label>
        <input className="box2"
          type="text"
          name="apellidos"
          placeholder="Esccribe tus apellidos"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.apellidos}
          required
        />
        {errors.apellidos && <p className="errors">{errors.apellidos}</p>}
        <label className="box1">CORREO ELECTRONICO</label>
        <input className="box2"
          type="email"
          name="correo"
          placeholder="Esccribe tu Email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.correo && <p className="errors">{errors.correo}</p>}
        <label className="box1">CONTRASEÑA</label>
        <input className="box2"
          type="password"
          name="contraseña"
          placeholder="Esccribe tu contraseña de 8 caracteres"
          onBlur={handleBlur}
          onChange={handleChange}
          alue={form.contraseña}
          required
        />
        {errors.contraseña && <p className="errors">{errors.contraseña}</p>}
        <label className="box1">NACIONALIDAD</label>
        <select className="box2" name="pais">
          {!paises ? "cargando" : paises.map((paises,name)=>{
                  return <option>{paises.name}</option>
                })}
        </select>
        <button class="button" type="submit">Registrarse</button>

      </form>
    </div>
  )
}
export default Formulario;

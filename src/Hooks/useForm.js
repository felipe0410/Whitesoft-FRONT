import { useState } from "react";

export const useForm = (initialForm, validateForm) => {

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState("");
  const [response, setresponse] = useState({});
  /* _________________________________________________ */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  /* _____________________________________________ */
  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };
  /* _________________________________________ */
  const handleSubmit = async (e) => {
    e.preventDefault()
    fetch("http://localhost:3002/register", {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(form), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    }).then(res => res.json()).then(data=>setresponse(data)).then(()=>{if (response.db==undefined) {
      return setLoading("SE CREO EL USUARIO") 
    }else{return setLoading("CORRIJE LOS ERRORES") }} )
      .catch(error => console.error('Error:mal', error))
      .then(response => console.log());
  };/* response.db==undefined */




  /* __________________________________________________________ */
  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit
  }
};


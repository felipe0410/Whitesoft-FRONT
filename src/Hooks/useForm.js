import { useState } from "react";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setresponse] = useState([]);
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
    }).then(res => res.json())
      .catch(error => console.error('Error:mal', error))
      .then(response => console.log());
  };
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


import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  function handleChange({ target: { value, name } }) {
    setValues({ ...values, [name]: value });
  }

  function clearForm() {
    setValues(initialValues);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;

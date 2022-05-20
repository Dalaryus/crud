import React, { useState, useEffect } from "react";

const initailForm = {
  
  name: "",
  signo: "",
  id: null,
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
  const [form, setForm] = useState(initailForm);
  //Si no hay data para editar, retorna el estado inicial del formulario, y se agrega un dato adicional se agrega al estado.
  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initailForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    //Si el formulario recibe un dato nuevo se le agrega un campo adicional al array.
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    //Se pone este comando de JS que para cuando se actualice el estado no se elimine los datos ya almacenados.
    e.preventDefault();

    //Condicionales sí, por si los campos a agregar están vacíos.
    if (!form.name || !form.signo) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = () => {
    setForm(initailForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="signo"
          placeholder="Signo"
          onChange={handleChange}
          value={form.signo}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};

export default CrudForm;

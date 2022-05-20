import React from "react";

const CrudTableRow = ({ element, setDataToEdit, deleteData }) => {

  //Esto es para asegurar que las variables de los datos sean reconocidas.
  let { name, signo, id } = element;

  return (
    <tr>
      <td>{name}</td>
      <td>{signo}</td>
      <td>
        <button onClick={() => setDataToEdit(element)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;

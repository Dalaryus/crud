import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";


const initialDb = [
  {
    id: 1,
    name: "Juan",
    signo: "Libra",
  },
  {
    id: 2,
    name: "Laura",
    signo: "Leo",
  },
  {
    id: 3,
    name: "Rosa",
    signo: "Tauro",
  },
  {
    id: 4,
    name: "José",
    signo: "Capricornio",
  },
  {
    id: 5,
    name: "Sebastián",
    signo: "Sagitario",
  },
];

const CrudApp = () => {
  /* Creo un estado en donde la inforamción sea "guardada" para poder tomar uso de ella ya que está fuera de la aplicación inicial.
   El estado inicial empezará siempre como el array initialDb */
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    //Se escoge una nueva id basada en la fecha, no logré continuar la cadena que tenía initialDb
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    //Recorre la lista y pregunta si hay un elemento con el mismo ID
    let newData = db.map((element) =>
      element.id === data.id ? data : element
    );
    setDb(newData);
  };

  const deleteData = (id) => {
    //Ventana de alerta para confirmar si quiere eliminar esa fila seleccionada
    let isDelete = window.confirm(`¿Quieres eliminar la fila seleccionada?`);

    if (isDelete) {
      let newData = db.filter((element) => element.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h1>Crud Juan Pandales</h1>
      <div>
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </div>
    </div>
  );
};

export default CrudApp;

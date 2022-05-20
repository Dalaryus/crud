import React from "react";
import CrudTableRow from "./CrudTableRow";
//paso los props como parámetro desde CrudApp en donde llega la data, un estado y función
const CrudTable = ({ data, setDataToEdit, deleteData }) => {
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Signo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            //Pregunta si hay datos en la tabla, y si no pues retorna el mensaje "Sin datos."
            data.map((element) => (
              <CrudTableRow
              //Se le asigna una llave para distinguir cada fila.
                key={element.id}
                element={element}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
              />
            ))
          ) : (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;

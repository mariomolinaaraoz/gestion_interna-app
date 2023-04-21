import { useEffect } from "react";
import { useInternalManagement } from "../../context/Context";

export default function ListStructure() {

  const { structure, getStructure, loading } =
    useInternalManagement();

  useEffect(() => {
    getStructure();
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="azt33 card-header">
          <span className="azt34 lg-fs fw-bold" id="ph">
            {loading
              ? "Loading"
              : structure.length === 0
              ? "No se encontraron Obras"
              : "Listado de Obras"}
          </span>
        </div>

        <div className="card-body">
          <table id="table" className="table table-hover table-sm sm-fs">
            <thead id="table_head" className="table-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Título</th>
                <th scope="col">Subtítulo</th>
                <th scope="col" className="azt">
                  Ranking
                </th>
                <th scope="col" className="text-center">
                  Acción
                </th>
              </tr>
            </thead>

            <tbody id="table_body" className="table-group-divider">
              {structure.map((structure, index) => {
                return (
                  <tr key={structure.id}>
                    <td>{index + 1}</td>
                    <td>{structure.name_structure}</td>
                    <td>---</td>
                    <td className="azt">---</td>
                    <td className="text-center"></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

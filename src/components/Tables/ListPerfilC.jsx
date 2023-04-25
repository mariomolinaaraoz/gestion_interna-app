import { useState, useEffect } from "react";
import { useInternalManagement } from "../../context/Context";
import "./table.css";

export default function ListPerfilC() {
  const { chapaLC, getChapaLC, perfilC, getPerfilC, loading } = useInternalManagement();

  useEffect(() => {
    getChapaLC();
    getPerfilC();
  }, []);

  // mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
  const [filtroChapa, setFiltroChapa] = useState("");
  const handleInputChangeChapa = (event) => {
    setFiltroChapa(event.target.value);
  };
  const filteredChapaLC = chapaLC.filter((chapa) => {
    return chapa.calibre.toString().includes(filtroChapa);
  });
  
  // mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
  const [filtroPerfil, setFiltroPerfil] = useState("");
  const handleInputChangePerfil = (event) => {
    setFiltroPerfil(event.target.value);
  };
  const filteredPerfilC = perfilC.filter((perfil) => {
    return perfil.ht.toString().includes(filtroPerfil);
  });

  // mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
  return (
    <div className="container d-flex justify-content-evenly">

      <div className="card tableChapaLC">
        <div className="azt33 card-header d-flex justify-content-between">
          <span className="azt34 lg-fs fw-bold" id="ph">
            {loading
              ? "Loading"
              : chapaLC.length === 0
              ? "No se encontraron Perfiles"
              : "Chapa LC"}
          </span>
          <div className="searchBox">
            <input
              type="text"
              className="searchText"
              placeholder="buscar..."
              value={filtroChapa}
              onChange={handleInputChangeChapa}
            />
            <a href="#" className="searchBtn">
              <i className="bi bi-search"></i>
            </a>
          </div>
        </div>

        <div className="card-body d-flex justitfy-evenly p-4">
          <div className="card-body-img justify-content-center">
            <img
              className=""
              src="https://fvvtqpkgirpnlmiemgcn.supabase.co/storage/v1/object/sign/tables/chapaLC.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0YWJsZXMvY2hhcGFMQy5wbmciLCJpYXQiOjE2ODIyNzQyMjYsImV4cCI6MTcxMzgxMDIyNn0.9nTi1OqQqAhGc8fUaIkrq6mHQX2W6q5A_k5RywbGUhU&t=2023-04-23T18%3A23%3A47.533Z"
              alt=""
            />
          </div>
          <div className="card-body-table justify-content-center">
            <table id="tableChapa" className="table table-hover table-sm sm-fs">
              <thead id="tableChapa_head" className="table-light">
                <tr>
                  <th className="text-center" scope="col">
                    Calibre
                  </th>
                  <th className="text-center" scope="col">
                    Espesor(mm)
                  </th>
                  <th className="text-center" scope="col">
                    kgs/m2
                  </th>
                </tr>
              </thead>

              <tbody id="tableChapaLC_body" className="table-group-divider">
                {filteredChapaLC.map((chapa, index) => {
                  return (
                    <tr key={chapa.id}>
                      <td className="text-end">{chapa.calibre}</td>
                      <td className="text-end">{chapa.espesor}</td>
                      <td className="text-end">{chapa.pesoxm2}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="card tableC">
        <div className="card-header d-flex justify-content-between">
          <span className="lg-fs fw-bold">
            {loading
              ? "Loading"
              : perfilC.length === 0
              ? "No se encontraron Perfiles"
              : "Perfiles C"}
          </span>
          <div className="searchBox">
            <input
              type="text"
              className="searchText"
              placeholder="buscar..."
              value={filtroPerfil}
              onChange={handleInputChangePerfil}
            />
            <a href="#" className="searchBtn">
              <i className="bi bi-search fa-3x"></i>
            </a>
          </div>
        </div>
        <div className="card-body d-flex justitfy-around p-3">
          <div className="card-body-img">
            <img
              className=""
              src="https://fvvtqpkgirpnlmiemgcn.supabase.co/storage/v1/object/sign/tables/perfilC.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0YWJsZXMvcGVyZmlsQy5wbmciLCJpYXQiOjE2ODIyNzQxNzMsImV4cCI6MTcxMzgxMDE3M30.YB_wjr6yxDoIZMFw6EhKNDrbSYIl1oLzOS0kOI4annM&t=2023-04-23T18%3A22%3A54.521Z"
              alt=""
            />
          </div>
          <div className="card-body-table">
            <table id="tableC" className="table table-hover table-sm sm-fs">
              <thead id="tableC_head" className="table-light">
                <tr>
                  <th className="text-center" scope="col">
                    ht(mm)
                  </th>
                  <th className="text-center" scope="col">
                    bt(mm)
                  </th>
                  <th className="text-center" scope="col">
                    dt(mm)
                  </th>
                  <th className="text-center" scope="col">
                    t=r(mm)
                  </th>
                  <th className="text-center" scope="col">
                    g(kg/mts)
                  </th>
                </tr>
              </thead>

              <tbody id="tableC_body" className="table-group-divider">
                {filteredPerfilC.map((perfil, index) => {
                  return (
                    <tr key={perfil.id}>
                      <td className="text-end">{perfil.ht}</td>
                      <td className="text-end">{perfil.bt}</td>
                      <td className="text-end">{perfil.dt}</td>
                      <td className="text-end">{perfil.tr}</td>
                      <td className="text-end">{perfil.g}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}

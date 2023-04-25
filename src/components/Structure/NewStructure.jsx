import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useInternalManagement } from "../../context/Context";


export default function NewStructure({session}) {
  // console.log(session);
  const {user}= session;

  const structure = {
    // console.log(user.id);
    userId:user.id,
    name: "", //type: "text"
  };

  const navigate = useNavigate();
  const [newStructure, setNewStructure] = useState(structure);

  // CONTEXT
  const { createStructure, adding } = useInternalManagement();

  // FORM SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    createStructure(newStructure);
    navigate("/list_structure");
    // window.location.href = "/dashboard/list_recipe";
  };

  return (
    <div className="card bg-first-color m-3 p-1">
      <div className="card-body">
        <form onSubmit={handleSubmit} id="formNewStructure">
          <fieldset className="border border-success rounded-3 mb-3 p-3">
            <h2 className="md-fs">Datos del cliente:</h2>
            <div className="row">
              <div
                id="group_name"
                className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 mx-auto"
              >
                <div className="form-floating mb-2 p-0">
                  <input
                    type="text"
                    id="name_last_name"
                    autoComplete="off"
                    className="form-control md-fs bg-second-color border-0 text-color"
                    name="name_last_name"
                    placeholder="Razon Social / Nombre y apellido"
                    title="Ingrese nombre y apellido del cliente"
                    required
                    autoFocus
                    onChange={(e) =>
                      setNewStructure({ ...newStructure, name: e.target.value })
                    }
                  />
                  <label htmlFor="name_last_name" className="sm-fs">
                    Razon Social / Nombre y apellido:
                  </label>
                </div>
              </div>
              <div
                id="group_name_contact"
                className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mx-auto"
              >
                <div className="form-floating mb-2">
                  <input
                    type="text"
                    id="name_contact"
                    autoComplete="off"
                    className="form-control md-fs bg-second-color border-0 text-color"
                    name="name_contact"
                    placeholder="Nombre contacto"
                    title="Ingrese nombre de contacto"
                  />
                  <label htmlFor="name_contact" className="sm-fs">
                    Nombre contacto:
                  </label>
                </div>
              </div>
              <div
                id="group_dni"
                className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mx-auto"
              >
                <div className="form-floating mb-2">
                  <input
                    type="number"
                    id="dni"
                    autoComplete="off"
                    className="form-control md-fs bg-second-color border-0 text-color"
                    name="dni"
                    placeholder="CUIT / DNI"
                    title="Ingrese CUIT / DNI"
                  />
                  <label htmlFor="dni" className="sm-fs">
                    CUIT / DNI:
                  </label>
                </div>
              </div>
              <div
                id="group_email"
                className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mx-auto"
              >
                <div className="form-floating mb-2">
                  <input
                    type="email"
                    id="email"
                    autoComplete="off"
                    className="form-control md-fs bg-second-color border-0 text-color"
                    name="email"
                    placeholder="CUIT / DNI"
                    title="Ingrese email"
                  />
                  <label htmlFor="email" className="sm-fs">
                    Email:
                  </label>
                </div>
              </div>
              <div
                id="group_num_contact"
                className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mx-auto"
              >
                <div className="form-floating mb-2">
                  <input
                    type="num_contact"
                    id="tel"
                    autoComplete="off"
                    className="form-control md-fs bg-second-color border-0 text-color"
                    name="num_contact"
                    placeholder="CUIT / DNI"
                    title="Ingrese teléfono para contacto"
                  />
                  <label htmlFor="num_contact" className="sm-fs">
                    Teléfono de contacto:
                  </label>
                </div>
              </div>
              <div
                id="group_address"
                className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mx-auto"
              >
                <div className="form-floating mb-2">
                  <input
                    type="address"
                    id="address"
                    autoComplete="off"
                    className="form-control md-fs bg-second-color border-0 text-color"
                    name="address"
                    placeholder="Domicilio"
                    title="Domicilio del cliente"
                  />
                  <label htmlFor="address" className="sm-fs">
                    Dirección:
                  </label>
                </div>
              </div>
              <div
                id="group_locality"
                className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mx-auto"
              >
                <div className="form-floating mb-2">
                  <input
                    type="text"
                    id="locality"
                    autoComplete="off"
                    className="form-control md-fs bg-second-color border-0 text-color"
                    name="locality"
                    placeholder="Localidad"
                    title="Localidad"
                  />
                  <label htmlFor="locality" className="sm-fs">
                    Localidad:
                  </label>
                </div>
              </div>
              <div
                id="group_province"
                className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mx-auto"
              >
                <div className="form-floating mb-2">
                  <input
                    type="text"
                    id="provincae"
                    autoComplete="off"
                    className="form-control md-fs bg-second-color border-0 text-color"
                    name="province"
                    placeholder="Provincia"
                    title="Provincia"
                  />
                  <label htmlFor="province" className="sm-fs">
                    Provincia:
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset className="border border-success rounded-3 mb-3 p-3">
            <h2 className="md-fs">Detalle de la obra:</h2>
            <div className="row">
              <div
                id="group_name_structure"
                className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mx-auto"
              >
                <div className="form-floating mb-2 p-0">
                  <input
                    type="text"
                    id="description"
                    autoComplete="off"
                    className="form-control md-fs bg-second-color border-0 text-color"
                    name="description"
                    placeholder="Descripción del plegado"
                    title="Descripción del plegado"
                    required
                  />
                  <label htmlFor="description" className="sm-fs">
                    Nombre:
                  </label>
                </div>
              </div>
              <div
                id="group_description_structure"
                className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mx-auto"
              >
                <div className="form-floating mb-2 p-0">
                  <input
                    type="text"
                    id="description"
                    autoComplete="off"
                    className="form-control md-fs bg-second-color border-0 text-color"
                    name="description"
                    placeholder="Descripción del plegado"
                    title="Descripción del plegado"
                    required
                  />
                  <label htmlFor="description" className="sm-fs text-wrap">
                    Descripción:
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <div className="d-flex justify-content-end">
            <button
              disabled={adding}
              type="button"
              className="btn btn-secondary me-4 sm-fs"
            >
              Cancelar
            </button>
            <button
              disabled={adding}
              type="submit"
              className="btn btn-primary sm-fs"
            >
              {adding ? "Guardando..." : "Guardar Obra"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

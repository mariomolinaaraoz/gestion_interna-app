import React from 'react'

export default function NewOrder() {
  return (
    <div className="card bg-first-color m-3 p-3">
      <div className="card-body">

        <form id="form">
          <div name="title" className="my-2 px-3 pt-2">
            <div className="row">
              <div className="subtitle col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 mx-auto">
                  <div className="form-floating mb-1 p-0">
                    <input
                      type="text"
                      id="subtitle"
                      autoComplete="off"
                      className="form-control md-fs bg-second-color border-0 text-color"
                      name="subtitle"
                      placeholder="Razon Social / Nombre y apellido"
                      title="Ingrese nombre y apellido del cliente"
                    />
                    <label htmlFor="floatingInput" className="sm-fs">
                      Razon Social / Nombre y apellido:
                    </label>
                  </div>
              </div>
              <div className="subtitle col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mx-auto">
                  <div className="form-floating mb-1">
                    <input
                      type="text"
                      id="subtitle"
                      autoComplete="off"
                      className="form-control md-fs bg-second-color border-0 text-color"
                      name="subtitle"
                      placeholder="Razon Social / Nombre y apellido"
                      title="Ingrese nombre y apellido del cliente"
                    />
                    <label htmlFor="floatingInput" className="sm-fs">
                      Nombre contacto:
                    </label>
                  </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
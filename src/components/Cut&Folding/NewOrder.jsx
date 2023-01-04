import React from 'react'

export default function NewOrder() {
  return (
    <div className="card bg-first-color m-3 p-1">
      <div className="card-body">

        <form id="form">
          <fieldset className='border border-success rounded-3 mb-3 p-3'>
            <h2 className="md-fs">Datos del cliente:</h2>
            <div className="row">
              <div id="group_name" className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 mx-auto">
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
                    />
                    <label htmlFor="name_last_name" className="sm-fs">
                      Razon Social / Nombre y apellido:
                    </label>
                  </div>
              </div>
              <div id="group_name_contact" className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mx-auto">
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
              <div id="group_dni" className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mx-auto">
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
              <div id="group_email" className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mx-auto">
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
              <div id="group_num_contact" className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mx-auto">
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
              <div id="group_address" className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mx-auto">
                  <div className="form-floating mb-2">
                    <input
                      type="address"
                      id="email"
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
              <div id="group_locality" className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mx-auto">
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
              <div id="group_province" className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mx-auto">
                  <div className="form-floating mb-2">
                    <input
                      type="text"
                      id="province"
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
          <fieldset className='border border-success rounded-3 mb-3 p-3'>
            <h2 className="md-fs">Detalle de plegados:</h2>
            <div className="row">
              <div id="group_description" className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 mx-auto">
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
                      Descripción del plegado:
                    </label>
                  </div>
              </div>
              <div id="group_quantity" className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mx-auto">
                  <div className="form-floating mb-2">
                    <input
                      type="number" min="0" max="100"
                      id="quantity"
                      autoComplete="off"
                      className="form-control md-fs bg-second-color border-0 text-color"
                      name="quantity"
                      placeholder="Cantidad de piezas"
                      title="Ingrese cantidad de piezas"
                    />
                    <label htmlFor="quantity" className="sm-fs">
                      Cantidad:
                    </label>
                  </div>
              </div>
              <div id="group_development" className="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mx-auto">
                  <div className="form-floating mb-2">
                    <input
                      type="number" min="0"
                      id="development"
                      autoComplete="off"
                      className="form-control md-fs bg-second-color border-0 text-color"
                      name="development"
                      placeholder="Desarrollo de las piezas"
                      title="Desarrollo de las piezas"
                    />
                    <label htmlFor="development" className="sm-fs">
                      Desarrollo:
                    </label>
                  </div>
              </div>
              <div id="group_length" className="col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4 mx-auto">
                  <div className="form-floating mb-2">
                    <input
                      type="number" min="0"
                      id="length"
                      autoComplete="off"
                      className="form-control md-fs bg-second-color border-0 text-color"
                      name="length"
                      placeholder="Largo de las piezas"
                      title="Largo de las piezas"
                    />
                    <label htmlFor="length" className="sm-fs">
                      Largo:
                    </label>
                  </div>
              </div>
              <div id="group_length" className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mx-auto">
                <button className="btn btn-primary btn-lg w-100 mb-2" style={{marginTop:".32rem"}}>Agregar</button>
              </div>
              <div id="group_length" className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 mx-auto">
                <table className="mt-2 lg-fs table table-success table-striped-columns">
                  <tr className="bg-light">
                      <th>#</th>
                      <th>Descripción</th>
                      <th>Cantidad</th>
                      <th>Desarrollo</th>
                      <th>Largo</th>
                      <th>Chapa</th>                    
                  </tr>
                  <tr>
                      <td>1</td>
                      <td>Plegado en U</td>
                      <td>12</td>
                      <td>610</td>
                      <td>3000</td>
                      <td>Chapa 14</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Plegado en L</td>
                      <td>12</td>
                      <td>610</td>
                      <td>3000</td>
                      <td>Chapa 14</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Canaleta</td>
                      <td>12</td>
                      <td>610</td>
                      <td>3000</td>
                      <td>Chapa 14</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Babeta</td>
                      <td>12</td>
                      <td>610</td>
                      <td>3000</td>
                      <td>Chapa 24 Galvanizada</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Travesaño</td>
                      <td>12</td>
                      <td>200</td>
                      <td>1000</td>
                      <td>Chapa 16</td>
                    </tr>
                </table>
              </div>
            </div>
            

          </fieldset >
        </form>
      </div>
    </div>
  )
}
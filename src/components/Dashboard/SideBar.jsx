import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { supabase } from '../../supabase/client'

export default function SideBar({username, url}) {  
  const [avatarUrl, setAvatarUrl] = useState(null)
  
  useEffect(() => {
    if (url) downloadImage(url)
  }, [url])
  
  const downloadImage = async (path) => {
    try {
      const { data, error } = await supabase.storage.from('avatars').download(path)
      if (error) {
        throw error
      }
      const url = URL.createObjectURL(data)
      setAvatarUrl(url)
    } catch (error) {
      console.log('Error downloading image: ', error.message)
    }
  }

  return (
    <div className="bg-first-color p-0">
      <div id="empresa"
        className="d-flex justify-content-center align-items-center border-bottom py-2">
          <span className="my-auto fs-5"><i className="bi bi-building"></i></span>
          <span className="my-auto ms-2 fs-5 d-none d-lg-inline">EMPRESA</span>
      </div>
      <div id="profile"
        className="d-flex flex-column text-center mt-3">
          <a href="#" className="">
            <img 
              src={avatarUrl} 
              alt={username}
              title="Ver Perfil"  
              style={{
                width:"3.2rem",
                height:"3.2rem",
                borderRadius:"50%",
                overFlow:"hidden",
                objectFit: "cover"
              }}
            />
          </a>
          <span className="lg-fs mt-0"><strong>{username}</strong></span>
          <span className="text-emphasis-color sm-fs"><strong>Admin</strong></span>
      </div>
      <div id="menu" className="mt-3 min-vh-100">
        <span className="sm-fs ms-4 text-start text-muted">Corte y Plegado</span>
        <div className="d-flex flex-column align-items-center align-items-sm-center px-1 pt-2">
          <ul
            className="nav nav-pills navbar-dark flex-column mb-sm-auto mb-0 align-items-sm-start"
          >
            <li>
                <Link className="nav-link text-color text-decoration-none align-middle p-1" to='new_order'>
                  <i className="lg-fs bi bi-pencil-square"></i>
                  <span className="sm-fs ms-2 d-none d-lg-inline">Nuevo</span>
                </Link>
            </li>
            <li className="">
                <a href="#" className="nav-link text-color text-decoration-none align-items-middle p-1" title="Pedido pendientes">
                  <i className="lg-fs bi bi-list-task"></i>
                  <span className="sm-fs ms-2 d-none d-lg-inline">Pendientes</span>
                </a>
            </li>
            <li>
                <a href="#" className="nav-link text-color text-decoration-none align-items-middle p-1" title="Pedido con saldo">
                  <i className="lg-fs bi bi-list-check"></i>
                  <span className="sm-fs ms-2 d-none d-lg-inline">Con saldo</span>
                </a>
            </li>
            <li>
                <a href="#" className="nav-link text-color text-decoration-none align-items-middle p-1" title="Todos los pedidos">
                  <i className="lg-fs bi bi-list-columns"></i>
                  <span className="sm-fs ms-2 d-none d-lg-inline">Todos</span>
                </a>
            </li>
          </ul>
        </div>
        <span className="sm-fs ms-4 text-start text-muted">Informes C y P</span>
        <div className="d-flex flex-column align-items-center align-items-sm-center px-1 pt-2">
            <ul
              className="nav nav-pills navbar-dark flex-column mb-sm-auto mb-0 align-items-sm-start"
            >
              <li>
                  <Link className="nav-link text-color text-decoration-none align-middle p-1" to='colorproyect'>
                    <i className="lg-fs bi bi-pencil-square"></i>
                    <span className="sm-fs ms-2 d-none d-lg-inline">Color proyect</span>
                  </Link>
              </li>
            </ul>
        </div>
      </div>
    </div>
  );
}

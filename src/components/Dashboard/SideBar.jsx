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
          <span className="my-auto ms-2 fs-5 d-none d-md-inline">EMPRESA</span>
      </div>
      <div id="profile"
        className="d-flex flex-column text-center mt-3">
          <a href="#" className="">
            <img 
              src={avatarUrl} 
              alt={username}
              title="Ver Perfil"  
              style={{
                width:"3rem",
                height:"3rem",
                borderRadius:"50%",
                overFlow:"hidden",
                objectFit: "cover"
              }}
            />
          </a>
          <span className="md-fs mt-2"><strong>{username}</strong></span>
          <span className="text-emphasis-color vsm-fs mt-0"><strong>Admin</strong></span>
      </div>
      <div id="menu" className="mt-3 min-vh-100">
        <span className="vsm-fs ms-4 text-start text-muted">Corte y Plegado</span>
        <div className="d-flex flex-column align-items-center align-items-sm-center px-1 pt-2">
          <ul
            className="nav nav-pills navbar-dark flex-column mb-sm-auto mb-0 align-items-sm-start"
          >
            <li>
                <Link className="nav-link text-color text-decoration-none align-middle p-1" to='new_order'>
                  <i className="md-fs bi bi-pencil-square"></i>
                  <span className="vsm-fs ms-2 d-none d-md-inline">Nuevo</span>
                </Link>
            </li>
            <li className="">
                <a href="#" className="nav-link text-color text-decoration-none align-items-middle p-1" title="Pedido pendientes">
                  <i className="md-fs bi bi-list-task"></i>
                  <span className="vsm-fs ms-2 d-none d-md-inline">Pendientes</span>
                </a>
            </li>
            <li>
                <a href="#" className="nav-link text-color text-decoration-none align-items-middle p-1" title="Pedido con saldo">
                  <i className="md-fs bi bi-list-check"></i>
                  <span className="vsm-fs ms-2 d-none d-md-inline">Con saldo</span>
                </a>
            </li>
            <li>
                <a href="#" className="nav-link text-color text-decoration-none align-items-middle p-1" title="Todos los pedidos">
                  <i className="md-fs bi bi-list-columns"></i>
                  <span className="vsm-fs ms-2 d-none d-md-inline">Todos</span>
                </a>
            </li>
          </ul>
        </div>
        <span className="vsm-fs mt-4 ms-4 text-start text-muted">Informes CyP<br/></span>
              <ul>
              <li>
                <Link className="nav-link text-color text-decoration-none align-middle p-1" to='colorproyect'>
                  <i className="md-fs bi bi-pencil-square"></i>
                  <span className="vsm-fs ms-2 d-none d-md-inline">Color proyect</span>
                </Link>
              </li>
              </ul>
        <span className="vsm-fs mt-4 ms-4 text-start text-muted">Obras</span>
      </div>
    </div>
  );
}

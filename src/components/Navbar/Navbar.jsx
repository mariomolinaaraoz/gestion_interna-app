import { supabase } from '../../supabase/client'

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-sm bg-second-color text-color">
      <div className="container-fluid">
        <form className="d-flex" role="search">
          <input className="form-control me-2 sm-fs py-0 bg-first-color border-0" type="search" placeholder="buscar" aria-label="Search"/>
          <button className="btn btn-outline-light border-0 btn-sm bg-first-color" type="submit"><i className="bi bi-search"></i></button>
        </form>
        <button type="button" className="btn btn-secondary btn-sm me-2 vsm-fs" onClick={() => supabase.auth.signOut()}>
          Cerrar Sesion
        </button>
      </div>
    </nav>
  );
}

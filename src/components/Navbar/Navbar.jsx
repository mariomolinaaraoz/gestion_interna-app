import { useState, useEffect } from 'react';
import { supabase } from '../../supabase/client';

export default function Navbar() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const json = localStorage.getItem("site-dark-mode");
    const currentMode = JSON.parse(json);
    if (currentMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    const json = JSON.stringify(darkMode);
    localStorage.setItem("site-dark-mode", json);
  }, [darkMode]);

  return (
    <nav className="navbar navbar-expand-sm bg-second-color text-color">      
      <div className="container-fluid">
        <form className="d-flex" role="search">
          <input className="form-control me-2 sm-fs py-0 bg-first-color border-0" type="search" placeholder="buscar" aria-label="Search"/>
          <button className="btn btn-outline-light border-0 btn-sm bg-first-color" type="submit" title="Buscar en el sistema"><i className="bi bi-search"></i></button>
        </form>
        <div>
          <button className="btn btn-secondary btn-sm me-2 sm-fs" type="button" onClick={() => supabase.auth.signOut()}>
            Cerrar Sesion
          </button>
          <button className="btn btn-outline-light border-0 btn-sm bg-first-color" type="button" onClick={() => setDarkMode(!darkMode)}><i className="bi bi-moon-fill"></i></button>
        </div>
      </div>
    </nav>
  );
}

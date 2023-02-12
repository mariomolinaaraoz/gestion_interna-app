import { useState } from "react";
import { supabase } from "../../supabase/client";
import "./home.css";

function Home() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row">
      <div id="bg"></div>
      <div className="col-12 text-center form-widget" aria-live="polite">
        <div id="empresa"
        className="header d-flex justify-content-center align-items-center mb-3 py-2">
          <span className="my-auto xl-fs"><i className="bi bi-building"></i></span>
          <span className="my-auto xl-fs ms-2 d-none d-lg-inline">EMPRESA</span>
      </div>

        <form onSubmit={handleLogin}>
          <input
            id="emailLogin"
            className="inputField"
            type="email"
            placeholder="ingrese email..."
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            id="passwordLogin"
            className="inputField"
            type="password"
            placeholder=""
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button 
            type="submit" 
            id="submitLogin" 
            className="btn btn-primary" 
          >
            {loading ? <span>Ingresando...</span> : <span>Ingresar</span>}
          </button>
        </form>
      </div>
    </div>
  );
}
export default Home;

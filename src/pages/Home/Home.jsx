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
    <section>
      <div className="form-box">
        <div className="form-value">
          <form onSubmit={handleLogin}>
            <div id="empresa" className="header">
              <i className="bi bi-building"></i>
              <h2 className="">EMPRESA</h2>
            </div>
            <div className="inputbox">
              <i className="bi bi-envelope"></i>
              <input
                id="emailLogin"
                className="inputField"
                type="email"
                placeholder=""
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="emailLogin">Email</label>
            </div>
            <div className="inputbox">
              <i className="bi bi-lock"></i>
              <input
                id="passwordLogin"
                className="inputField"
                type="password"
                placeholder=""
                autoComplete=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label htmlFor="passwordLogin">Password</label>
            </div>
            <button type="submit" id="submitLogin" className="">
              {loading ? <span>Ingresando...</span> : <span>Ingresar</span>}
            </button>
          </form>
        </div>
      </div>      
    </section>
  );
}
export default Home;

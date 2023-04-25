import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { supabase } from './supabase/client';
import { Home, Dashboard, NotFound } from './pages';
import { ListPerfilC, NewStructure, ListStructure, NewOrder,ColorProyect, Footer } from "./components";
import "./index.css";

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className="">      
      <Routes>
        <Route
          path="/"
          element={
            !session ? (
              <Home />
              ) : (
                <Dashboard key={session.user.id} session={session} />
                )
              }
              >
          <Route path="list_perfilc" element={<ListPerfilC session={session}/>} />
          <Route path="new_structure" element={<NewStructure session={session}/>} />
          <Route path="list_structure" element={<ListStructure session={session}/>} />
          <Route path="new_order" element={<NewOrder />} />
          <Route path="colorproyect" element={<ColorProyect />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer/>
    </div>
  );
}
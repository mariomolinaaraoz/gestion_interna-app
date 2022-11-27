import "./index.css";
import { useState, useEffect } from 'react';
import { supabase } from './supabase/client';
import {Home, Dashboard, NotFound} from './pages';

import { Routes, Route } from 'react-router-dom';
import { NewOrder,ColorProyect } from "./components";

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
    <div className="container-fluid">
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
          <Route path="new_order" element={<NewOrder />} />
          <Route path="colorproyect" element={<ColorProyect />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

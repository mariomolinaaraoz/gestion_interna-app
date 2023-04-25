import { createContext, useContext, useState } from "react";
import { supabase } from "../supabase/client";

export const InternalManagementContext = createContext();

export const useInternalManagement = () => {
  const context = useContext(InternalManagementContext);
  if (!context)
    throw new Error("useInternalManagement must be used with a ContextProvider");
  return context;
};

export const InternalManagementContextProvider = ({ children }) => {
  
  const [chapaLC, setChapaLC] = useState([]);
  const [perfilC, setPerfilC] = useState([]);
  const [structure, setStructure] = useState([]);
  const [adding, setAdding] = useState(false);
  const [loading, setLoading] = useState(false);

  const getChapaLC = async () => {
    setLoading(true);
    const { error, data } = await supabase
      .from("chapaLC")
      .select()
      // .eq('espesor',filtro)
      .order('id', { ascending: true });

    if (error) throw error;

    setChapaLC(data);
    setLoading(false);    
  };

  const getPerfilC = async (state = true) => {
    setLoading(true);
    const { error, data } = await supabase
      .from("perfilC")
      .select()
      // .eq("state", state)
      .order('id', { ascending: true });

    if (error) throw error;

    setPerfilC(data);
    setLoading(false);    
  };

  const getStructure = async (state = true) => {
    setLoading(true);
    const { error, data } = await supabase
      .from("structure")
      .select()
      // .eq("state", state)
      .order("id", { ascending: false });

    if (error) throw error;

    setStructure(data);
    setLoading(false);    
  };
    
  const createStructure = async (new_structure) => {
    setAdding(true);
    try {
      const { error, data } = await supabase.from("structure").insert({
        userId: new_structure.userId,
        name_structure:new_structure.name
      });
      if (error) throw error;
      setStructure([...structure, ...data]);
    } catch (error) {
      console.log(error);
    } finally {
      setAdding(false);
    }
  };

  return (
    <InternalManagementContext.Provider
      value={{
        chapaLC,
        getChapaLC,
        perfilC,
        getPerfilC,
        structure,
        getStructure,
        createStructure,
        adding,
        loading,
      }}
    >
      {children}
    </InternalManagementContext.Provider>
  );
};
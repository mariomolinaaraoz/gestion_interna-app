import { createContext, useContext, useState } from "react";
import { supabase } from "../supabase/client";

export const InternalManagementContext = createContext();

export const useInternalManagemente = () => {
  const context = useContext(InternalManagementContext);
  if (!context)
    throw new Error("useRecipe must be used with a ContextProvider");
  return context;
};

export const InternalManagementContextProvider = ({ children }) => {
  
  const [structure, setStructure] = useState([]);
  const [adding, setAdding] = useState(false);
  const [loading, setLoading] = useState(false);
  
  
  
  
  
  
  const createStructure = async (new_structure) => {
    setAdding(true);
    try {
      const user = supabase.auth.user();
      const { error, data } = await supabase.from("structure").insert({
        userId: user.id,
        name_structure:new_structure.name_structure
      });
      if (error) throw error;
      setRecipe([...structure, ...data]);
    } catch (error) {
      console.log(error);
    } finally {
      setAdding(false);
    }
  };
  
  
  
  const [recipe, setRecipe] = useState([]);
  

  const getRecipe = async (state = true) => {
    setLoading(true);
    const user = supabase.auth.user();
    const { error, data } = await supabase
      .from("recipe")
      .select()
      .eq("userId", user.id)
      .eq("state", state)
      .order("id", { ascending: false });

    if (error) throw error;

    setRecipe(data);
    setLoading(false);    
  };

  const createRecipe = async (newrecipe) => {
    setAdding(true);
    try {
      const user = supabase.auth.user();
      const { error, data } = await supabase.from("recipe").insert({
        userId: user.id,
        folder:newrecipe.folder,

      });
      if (error) throw error;
      setRecipe([...recipe, ...data]);
    } catch (error) {
      console.log(error);
    } finally {
      setAdding(false);
    }
  };

  const deleteRecipe = async (id) => {
    console.log(id)
    const user = supabase.auth.user();
    const { error, data } = await supabase
      .from("recipe")
      .delete()
      .eq("userId", user.id)
      .eq("id", id);

    if (error) throw error;

    setRecipe(recipe.filter((recipe) => recipe.id !== id));
  };

  const updateRecipe = async (id, updateFields) => {
    try {
      const user = supabase.auth.user();
      const { error, data } = await supabase
        .from("recipe")
        .update(updateFields)
        .eq("userId", user.id)
        .eq("id", id);

      if (error) throw error;

      setRecipe(recipe.filter((recipe) => recipe.id !== id));
    } catch (error) {
      alert(error.error_description || error.message);
    }
  };

  return (
    <InternalManagementContext.Provider
      value={{
        recipe,
        getRecipe,
        createRecipe,
        deleteRecipe,
        updateRecipe,
        adding,
        loading,
      }}
    >
      {children}
    </InternalManagementContext.Provider>
  );
};
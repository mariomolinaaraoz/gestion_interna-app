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
  const [recipe, setRecipe] = useState([]);
  const [adding, setAdding] = useState(false);
  const [loading, setLoading] = useState(false);

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
        title: newrecipe.title,
        subtitle: newrecipe.subtitle,
        state: newrecipe.state,
        ranking: newrecipe.ranking,
        category_1: newrecipe.category_1,
        category_2: newrecipe.category_2,
        category_3: newrecipe.category_3,

        portions: newrecipe.portions,
        preparation:newrecipe.preparation,
        ingredients_Qty:newrecipe.ingredients_Qty,
        cooking:newrecipe.cooking,
        freezer:newrecipe.freezer,
        cost:newrecipe.cost,

        materials:newrecipe.materials,

        title_1:newrecipe.title_1,
        ingredients_1:newrecipe.ingredients_1,
        recipe_1:newrecipe.recipe_1,
        title_2:newrecipe.title_2,
        ingredients_2:newrecipe.ingredients_2,
        recipe_2:newrecipe.recipe_2,
        title_3:newrecipe.title_3,
        ingredients_3:newrecipe.ingredients_3,
        recipe_3:newrecipe.recipe_3,

        imgUrl: newrecipe.imgUrl,
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
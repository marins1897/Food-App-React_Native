import { createContext, useState } from "react";

 export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
    const [favoriteMealsIds, setFavoriteMealsIds] = useState([]);

    const addFavorite = (id) => {
        setFavoriteMealsIds((currentFavIds) => [...currentFavIds, id]);
    };

    const removeFavorite = (id) => {
        setFavoriteMealsIds((currentFavIds) => currentFavIds.filter(mealId => mealId !== id));
    };

    const value = {
        ids: favoriteMealsIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    };

    return (
        <FavoritesContext.Provider value={value}>
            { children }
        </FavoritesContext.Provider>
    )
}

export default FavoritesContextProvider;
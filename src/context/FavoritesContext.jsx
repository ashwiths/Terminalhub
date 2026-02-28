import { createContext, useContext } from 'react';
import { useFavorites } from '../hooks/useFavorites';

const FavoritesContext = createContext(null);

export function FavoritesProvider({ children }) {
    const fav = useFavorites();
    return (
        <FavoritesContext.Provider value={fav}>
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavoritesContext() {
    const ctx = useContext(FavoritesContext);
    if (!ctx) throw new Error('useFavoritesContext must be used inside FavoritesProvider');
    return ctx;
}

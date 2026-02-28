import { useState, useCallback } from 'react';

const STORAGE_KEY = 'terminalhub_favorites';

/** Load saved favorites from localStorage */
function load() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

/** Persist favorites to localStorage */
function save(favs) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favs));
}

/**
 * useFavorites hook
 * Each favorite item shape:
 * {
 *   id: string            (unique, e.g. "langchain-step-0-python")
 *   framework: string     (e.g. "LangChain")
 *   frameworkIcon: string (e.g. "🦜")
 *   section: string       (e.g. "AI Frameworks")
 *   label: string         (step label)
 *   command: string       (the actual command string)
 *   lang: string          (e.g. "python" | "js" | "npm" | "yarn" | "pnpm")
 *   savedAt: number       (Date.now())
 * }
 */
export function useFavorites() {
    const [favorites, setFavorites] = useState(load);

    const isFavorite = useCallback(
        (id) => favorites.some((f) => f.id === id),
        [favorites]
    );

    const toggleFavorite = useCallback((item) => {
        setFavorites((prev) => {
            let next;
            if (prev.some((f) => f.id === item.id)) {
                next = prev.filter((f) => f.id !== item.id);
            } else {
                next = [{ ...item, savedAt: Date.now() }, ...prev];
            }
            save(next);
            return next;
        });
    }, []);

    const removeFavorite = useCallback((id) => {
        setFavorites((prev) => {
            const next = prev.filter((f) => f.id !== id);
            save(next);
            return next;
        });
    }, []);

    const clearAll = useCallback(() => {
        save([]);
        setFavorites([]);
    }, []);

    return { favorites, isFavorite, toggleFavorite, removeFavorite, clearAll };
}

import { useState } from 'react';
import { useFavoritesContext } from '../context/FavoritesContext';

/**
 * HeartButton – renders a small heart icon.
 *
 * Props:
 *   item  – the favorite item object (must include `id`)
 *   size  – 'sm' | 'lg'  (default 'sm')
 */
export default function HeartButton({ item, size = 'sm' }) {
    const { isFavorite, toggleFavorite } = useFavoritesContext();
    const [pop, setPop] = useState(false);
    const active = isFavorite(item.id);

    const handleClick = (e) => {
        e.stopPropagation();
        toggleFavorite(item);
        if (!active) {
            setPop(true);
            setTimeout(() => setPop(false), 400);
        }
    };

    const dim = size === 'lg' ? 18 : 14;

    return (
        <button
            onClick={handleClick}
            aria-label={active ? 'Remove from favorites' : 'Add to favorites'}
            title={active ? 'Remove from favorites' : 'Save to favorites'}
            className={`
                flex-shrink-0 flex items-center justify-center rounded-lg border
                transition-all duration-150 select-none
                ${size === 'lg' ? 'p-2' : 'p-1.5'}
                ${pop ? 'scale-125' : 'scale-100'}
                ${active
                    ? 'border-rose-500 bg-rose-500/15 text-rose-400 hover:bg-rose-500/25'
                    : 'border-surface-500 text-slate-600 hover:border-rose-400 hover:text-rose-400 hover:bg-rose-500/10'
                }
            `}
            style={{ transition: 'transform 0.15s cubic-bezier(.36,.07,.19,.97), background 0.15s, border-color 0.15s, color 0.15s' }}
        >
            <svg
                width={dim}
                height={dim}
                viewBox="0 0 24 24"
                fill={active ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
        </button>
    );
}

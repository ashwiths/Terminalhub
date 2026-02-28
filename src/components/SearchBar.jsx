import { useRef, useEffect } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar({ value, onChange }) {
    const inputRef = useRef(null);

    useEffect(() => {
        const handler = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                inputRef.current?.focus();
            }
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={styles.iconLeft}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                </svg>
            </div>
            <input
                ref={inputRef}
                id="search-input"
                className={styles.input}
                type="text"
                placeholder="Search commands, descriptions, tags…"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                autoComplete="off"
                spellCheck="false"
            />
            <div className={styles.hint}>
                {value ? (
                    <button className={styles.clear} onClick={() => onChange('')} aria-label="Clear search">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                ) : (
                    <kbd className={styles.kbd}>Ctrl K</kbd>
                )}
            </div>
        </div>
    );
}

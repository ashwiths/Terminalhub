import { useEffect } from 'react';
import styles from './Toast.module.css';

export default function Toast({ message, visible, onHide }) {
    useEffect(() => {
        if (!visible) return;
        const t = setTimeout(onHide, 2200);
        return () => clearTimeout(t);
    }, [visible, onHide]);

    if (!visible) return null;

    return (
        <div className={styles.toast} role="status" aria-live="polite">
            <span className={styles.icon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            </span>
            <span className={styles.msg}>{message}</span>
        </div>
    );
}

import { useState } from 'react';
import { ecosystems } from '../data/index.js';
import styles from './CommandCard.module.css';

const ecoColorMap = Object.fromEntries(ecosystems.map((e) => [e.id, e.color]));

export default function CommandCard({ cmd, onCopy }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(cmd.command);
            setCopied(true);
            onCopy?.(cmd.command);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            /* clipboard not available */
        }
    };

    const ecoColor = ecoColorMap[cmd.ecosystem] || 'var(--accent-cyan)';

    return (
        <article className={styles.card} style={{ '--eco-accent': ecoColor }}>
            <div className={styles.topRow}>
                <span className={styles.category}>{cmd.category}</span>
                <div className={styles.platforms}>
                    {cmd.platform.map((p) => (
                        <span key={p} className={styles.platform}>{p}</span>
                    ))}
                </div>
            </div>

            <div className={styles.commandBlock}>
                <span className={styles.prompt}>$</span>
                <pre className={styles.command}>{cmd.command}</pre>
                <button
                    className={`${styles.copyBtn} ${copied ? styles.copied : ''}`}
                    onClick={handleCopy}
                    aria-label="Copy command to clipboard"
                    title={copied ? 'Copied!' : 'Copy'}
                >
                    {copied ? (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    ) : (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="9" y="9" width="13" height="13" rx="2" />
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                        </svg>
                    )}
                </button>
            </div>

            <p className={styles.description}>{cmd.description}</p>

            <div className={styles.tags}>
                {cmd.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className={styles.tag}>#{tag}</span>
                ))}
            </div>
        </article>
    );
}

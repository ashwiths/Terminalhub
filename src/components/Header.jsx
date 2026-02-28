import styles from './Header.module.css';

export default function Header({ totalCommands }) {
    return (
        <header className={styles.header}>
            <div className={styles.logoArea}>
                <div className={styles.logo}>
                    <span className={styles.logoSymbol}>&gt;_</span>
                </div>
                <div>
                    <h1 className={styles.title}>TerminalHub</h1>
                    <p className={styles.tagline}>Your centralized developer command library</p>
                </div>
            </div>

            <div className={styles.stats}>
                <div className={styles.stat}>
                    <span className={styles.statNum}>{totalCommands}</span>
                    <span className={styles.statLabel}>Commands</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.statNum}>6</span>
                    <span className={styles.statLabel}>Ecosystems</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.statNum}>OSS</span>
                    <span className={styles.statLabel}>Open Source</span>
                </div>
            </div>
        </header>
    );
}

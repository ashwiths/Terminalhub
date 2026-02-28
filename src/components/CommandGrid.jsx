import CommandCard from './CommandCard';
import styles from './CommandGrid.module.css';

export default function CommandGrid({ commands, onCopy }) {
    if (commands.length === 0) {
        return (
            <div className={styles.empty}>
                <span className={styles.emptyIcon}>🔍</span>
                <p className={styles.emptyTitle}>No commands found</p>
                <p className={styles.emptyHint}>Try a different keyword, or browse all ecosystems</p>
            </div>
        );
    }

    return (
        <div className={styles.grid}>
            {commands.map((cmd, i) => (
                <CommandCard
                    key={cmd.id}
                    cmd={cmd}
                    onCopy={onCopy}
                    style={{ animationDelay: `${Math.min(i * 30, 300)}ms` }}
                />
            ))}
        </div>
    );
}

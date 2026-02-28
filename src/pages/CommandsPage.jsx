import { Link } from 'react-router-dom';
import { ecosystems } from '../data/index.js';

// Map ecosystems to numbered cards — matches the reference image style
const ecoMeta = {
    linux: { num: '01', desc: 'Essential Linux/Unix CLI commands for file system, networking, processes, and more.', icon: '🐧' },
    git: { num: '02', desc: 'Version control mastery — branching, rebasing, history inspection, and remotes.', icon: '🔀' },
    npm: { num: '03', desc: 'Node.js package management: install, publish, audit, and run scripts efficiently.', icon: '📦' },
    react: { num: '04', desc: 'React project setup, tooling, routing, state management, and build commands.', icon: '⚛️' },
    astro: { num: '05', desc: 'Astro framework — scaffolding, integrations, adapters, and deployment.', icon: '🚀' },
    docker: { num: '06', desc: 'Container lifecycle, image management, Docker Compose, and registry commands.', icon: '🐳' },
};

export default function CommandsPage() {
    const list = ecosystems.filter((e) => e.id !== 'all');

    return (
        <main className="min-h-screen">
            {/* Page header */}
            <section className="max-w-7xl mx-auto px-6 pt-16 pb-10">
                <p className="text-brand-cyan font-mono text-sm font-medium mb-3 tracking-widest uppercase">
                    Browse / Ecosystems
                </p>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
                    Command Library
                </h1>
                <p className="text-slate-400 text-lg max-w-2xl">
                    Pick an ecosystem below and explore categorized CLI commands — all copyable in one click.
                </p>
            </section>

            {/* Numbered grid — like reference image */}
            <section className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-surface-500 rounded-2xl overflow-hidden">
                    {list.map((eco, i) => {
                        const meta = ecoMeta[eco.id] || {};
                        return (
                            <Link
                                key={eco.id}
                                to={`/commands/${eco.id}`}
                                className={`group relative flex flex-col p-8 border-surface-500 bg-surface-900
                            hover:bg-surface-800 transition-all duration-200
                            ${i % 3 !== 2 ? 'sm:border-r' : ''}
                            ${i < list.length - (list.length % 3 || 3) ? 'border-b' : ''}
                            ${i < 3 ? 'border-b' : ''}
                           `}
                            >
                                {/* Large number */}
                                <span
                                    className="font-mono text-6xl font-black leading-none select-none mb-6"
                                    style={{ color: eco.color, opacity: 0.25 }}
                                >
                                    {meta.num}
                                </span>

                                {/* Ecosystem label pill */}
                                <span
                                    className="self-start text-xs font-bold uppercase tracking-widest px-3 py-1
                             rounded-full border mb-4"
                                    style={{
                                        color: eco.color,
                                        borderColor: `${eco.color}44`,
                                        background: `${eco.color}12`,
                                    }}
                                >
                                    {meta.icon} {eco.label}
                                </span>

                                {/* Description */}
                                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                                    {meta.desc}
                                </p>

                                {/* Arrow */}
                                <div className="mt-8 flex items-center justify-between">
                                    <span className="text-slate-600 text-xs font-mono">
                                        {/* command count populated via data */}
                                    </span>
                                    <span
                                        className="w-9 h-9 rounded-full border border-surface-500 flex items-center justify-center
                               text-slate-500 group-hover:border-brand-cyan group-hover:text-brand-cyan
                               transition-all duration-200 group-hover:translate-x-1"
                                    >
                                        →
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}

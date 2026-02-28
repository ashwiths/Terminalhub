import linuxCommands from './commands/linux.json';
import gitCommands from './commands/git.json';
import npmCommands from './commands/npm.json';
import reactCommands from './commands/react.json';
import astroCommands from './commands/astro.json';
import dockerCommands from './commands/docker.json';

export const allCommands = [
  ...linuxCommands,
  ...gitCommands,
  ...npmCommands,
  ...reactCommands,
  ...astroCommands,
  ...dockerCommands,
];

export const ecosystems = [
  { id: 'all',    label: 'All',    icon: '⚡', color: '#00f5c4' },
  { id: 'linux',  label: 'Linux',  icon: '🐧', color: '#f59e0b' },
  { id: 'git',    label: 'Git',    icon: '🔀', color: '#f97316' },
  { id: 'npm',    label: 'npm',    icon: '📦', color: '#ef4444' },
  { id: 'react',  label: 'React',  icon: '⚛️', color: '#38bdf8' },
  { id: 'astro',  label: 'Astro',  icon: '🚀', color: '#a78bfa' },
  { id: 'docker', label: 'Docker', icon: '🐳', color: '#0ea5e9' },
];

export const getCommandsByEcosystem = (ecosystem) => {
  if (ecosystem === 'all') return allCommands;
  return allCommands.filter((cmd) => cmd.ecosystem === ecosystem);
};

export const searchCommands = (commands, query) => {
  if (!query.trim()) return commands;
  const q = query.toLowerCase();
  return commands.filter(
    (cmd) =>
      cmd.command.toLowerCase().includes(q) ||
      cmd.description.toLowerCase().includes(q) ||
      cmd.tags.some((tag) => tag.toLowerCase().includes(q)) ||
      cmd.category.toLowerCase().includes(q)
  );
};

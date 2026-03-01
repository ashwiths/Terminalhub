export const githubSections = [
    {
        id: 'git-setup',
        icon: '⚙️',
        category: 'Configuration',
        title: 'Git Setup',
        description: 'Configure your global Git identity before making any commits.',
        color: '#38bdf8',
        commands: [
            {
                label: 'Set global username',
                code: 'git config --global user.name "Your Name"',
                explanation: 'Sets the name that will appear in all your commits.',
            },
            {
                label: 'Set global email',
                code: 'git config --global user.email "your@email.com"',
                explanation: 'Sets the email associated with your commits.',
            },
            {
                label: 'View all config',
                code: 'git config --list',
                explanation: 'Lists all your current Git configuration settings.',
            },
        ],
    },
    {
        id: 'repo-init',
        icon: '🗂️',
        category: 'Initialization',
        title: 'Repository Initialization',
        description: 'Initialize a new local Git repository and make your first commit.',
        color: '#a78bfa',
        commands: [
            {
                label: 'Initialize repository',
                code: 'git init',
                explanation: 'Creates a new .git directory and starts tracking the project.',
            },
            {
                label: 'Stage all files',
                code: 'git add .',
                explanation: 'Stages all untracked and modified files for the next commit.',
            },
            {
                label: 'Initial commit',
                code: 'git commit -m "initial commit"',
                explanation: 'Creates the first commit with a message.',
            },
        ],
    },
    {
        id: 'branching',
        icon: '🌿',
        category: 'Branching',
        title: 'Branching',
        description: 'Create, switch, list, and merge branches to manage parallel workstreams.',
        color: '#34d399',
        commands: [
            {
                label: 'List all branches',
                code: 'git branch',
                explanation: 'Shows all local branches; the active one is highlighted.',
            },
            {
                label: 'Create & switch to new branch',
                code: 'git checkout -b new-branch',
                explanation: 'Creates a new branch and immediately switches to it.',
            },
            {
                label: 'Switch to existing branch',
                code: 'git checkout main',
                explanation: 'Switches to the specified existing branch.',
            },
            {
                label: 'Merge branch into current',
                code: 'git merge branch-name',
                explanation: 'Merges the specified branch into your currently active branch.',
            },
            {
                label: 'Delete a merged branch',
                code: 'git branch -d branch-name',
                explanation: 'Safely deletes a branch that has already been merged.',
            },
        ],
    },
    {
        id: 'commit-push',
        icon: '🚀',
        category: 'Commit & Push',
        title: 'Commit & Push',
        description: 'Stage changes, commit them, and push to your remote repository on GitHub.',
        color: '#f59e0b',
        commands: [
            {
                label: 'Stage specific file',
                code: 'git add <filename>',
                explanation: 'Stages a specific file instead of everything.',
            },
            {
                label: 'Stage all changes',
                code: 'git add .',
                explanation: 'Stages all modified and new files.',
            },
            {
                label: 'Commit with message',
                code: 'git commit -m "your message"',
                explanation: 'Records a snapshot of the staged changes with a descriptive message.',
            },
            {
                label: 'Push to remote branch',
                code: 'git push origin main',
                explanation: 'Pushes your local commits to the remote branch named main.',
            },
            {
                label: 'Force push (use with care)',
                code: 'git push --force origin main',
                explanation: 'Overwrites the remote history — use only when you know what you\'re doing.',
            },
        ],
    },
    {
        id: 'pull-merge',
        icon: '⬇️',
        category: 'Pull & Merge',
        title: 'Pull & Merge',
        description: 'Fetch and integrate the latest changes from your remote into your local branch.',
        color: '#fb923c',
        commands: [
            {
                label: 'Pull latest changes',
                code: 'git pull',
                explanation: 'Fetches and merges changes from the remote tracked branch.',
            },
            {
                label: 'Pull from specific branch',
                code: 'git pull origin main',
                explanation: 'Pulls from the remote main branch explicitly.',
            },
            {
                label: 'Fetch without merging',
                code: 'git fetch origin',
                explanation: 'Downloads remote changes but does not apply them — lets you inspect first.',
            },
            {
                label: 'Merge fetched branch',
                code: 'git merge origin/main',
                explanation: 'Merges the fetched remote branch into your current branch.',
            },
        ],
    },
    {
        id: 'clone',
        icon: '📦',
        category: 'Clone',
        title: 'Clone Repository',
        description: 'Clone an existing GitHub repository to your local machine.',
        color: '#38bdf8',
        commands: [
            {
                label: 'Clone via HTTPS',
                code: 'git clone <repo-url>',
                explanation: 'Downloads the repo and its full history to a new folder.',
            },
            {
                label: 'Clone into a named folder',
                code: 'git clone <repo-url> my-project',
                explanation: 'Clones the repo into a directory named my-project.',
            },
            {
                label: 'Clone a specific branch',
                code: 'git clone -b branch-name <repo-url>',
                explanation: 'Clones only the specified branch instead of the default.',
            },
            {
                label: 'Shallow clone (1 commit deep)',
                code: 'git clone --depth 1 <repo-url>',
                explanation: 'Speeds up cloning large repos by only downloading the latest snapshot.',
            },
        ],
    },
    {
        id: 'remote-setup',
        icon: '🔗',
        category: 'Remote',
        title: 'Remote Setup',
        description: 'Add and manage remote connections between your local repo and GitHub.',
        color: '#a78bfa',
        commands: [
            {
                label: 'Add remote origin',
                code: 'git remote add origin <repo-url>',
                explanation: 'Links your local repo to a remote GitHub repository.',
            },
            {
                label: 'Rename default branch to main',
                code: 'git branch -M main',
                explanation: 'Renames the current branch to main — the GitHub default.',
            },
            {
                label: 'Push & set upstream',
                code: 'git push -u origin main',
                explanation: 'Pushes to origin/main and sets it as the default upstream.',
            },
            {
                label: 'View all remotes',
                code: 'git remote -v',
                explanation: 'Lists all configured remote URLs (fetch and push).',
            },
            {
                label: 'Remove a remote',
                code: 'git remote remove origin',
                explanation: 'Unlinks the remote named origin from your local repo.',
            },
        ],
    },
    {
        id: 'undo-reset',
        icon: '↩️',
        category: 'Undo / Reset',
        title: 'Undo / Reset Commands',
        description: 'Reverse mistakes — unstage files, undo commits, or reset your branch.',
        color: '#f87171',
        commands: [
            {
                label: 'Unstage a file',
                code: 'git restore --staged <filename>',
                explanation: 'Removes the file from the staging area without discarding changes.',
            },
            {
                label: 'Discard working dir changes',
                code: 'git restore <filename>',
                explanation: 'Reverts the file to its last committed state — changes are lost.',
            },
            {
                label: 'Undo last commit (keep changes)',
                code: 'git reset --soft HEAD~1',
                explanation: 'Moves HEAD back one commit but keeps changes staged.',
            },
            {
                label: 'Undo last commit (unstage changes)',
                code: 'git reset --mixed HEAD~1',
                explanation: 'Moves HEAD back and unstages changes — files remain modified.',
            },
            {
                label: 'Hard reset (discard everything)',
                code: 'git reset --hard HEAD~1',
                explanation: '⚠️ Permanently removes the last commit and all its changes.',
            },
            {
                label: 'Revert a commit (safe)',
                code: 'git revert <commit-hash>',
                explanation: 'Creates a new commit that undoes a previous one — history safe.',
            },
        ],
    },
];

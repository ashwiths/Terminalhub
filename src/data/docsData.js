// Docs Frameworks data
export const docsFrameworks = [
    {
        id: 'docusaurus',
        name: 'Docusaurus',
        icon: '🦖',
        badge: 'React-based',
        badgeColor: '#25c2a0',
        description: 'A static site generator that builds fast, visually appealing documentation securely using React.',
        docs: 'https://docusaurus.io/docs/installation',
        tags: ['docs', 'react', 'static-site', 'markdown', 'mdx'],
        steps: [
            {
                label: 'Create project',
                hint: 'Generate scaffolding using the classic template.',
                npm: 'npx create-docusaurus@latest my-website classic',
                yarn: 'yarn create docusaurus my-website classic',
                pnpm: 'pnpm create docusaurus my-website classic'
            },
            {
                label: 'Navigate to project',
                hint: 'Change into the project directory.',
                npm: 'cd my-website',
                yarn: 'cd my-website',
                pnpm: 'cd my-website'
            },
            {
                label: 'Install dependencies',
                hint: 'Project comes pre-installed usually, but if needed run this.',
                npm: 'npm install',
                yarn: 'yarn install',
                pnpm: 'pnpm install'
            },
            {
                label: 'Start development server',
                hint: 'Run hot-reloading development server on localhost:3000.',
                npm: 'npm run start',
                yarn: 'yarn start',
                pnpm: 'pnpm start'
            },
            {
                label: 'Build for production',
                hint: 'Compile static assets into the /build directory.',
                npm: 'npm run build',
                yarn: 'yarn build',
                pnpm: 'pnpm build'
            }
        ],
    },
    {
        id: 'vitepress',
        name: 'VitePress',
        icon: '⚡',
        badge: 'Vue-based',
        badgeColor: '#42b883',
        description: 'Vite & Vue powered static site generator. Simple, powerful, and immensely fast.',
        docs: 'https://vitepress.dev/guide/getting-started',
        tags: ['docs', 'vue', 'vite', 'static-site', 'markdown'],
        steps: [
            {
                label: 'Create project folder',
                hint: 'Create and enter a new directory.',
                npm: 'mkdir vitepress-docs && cd vitepress-docs',
                yarn: 'mkdir vitepress-docs && cd vitepress-docs',
                pnpm: 'mkdir vitepress-docs && cd vitepress-docs'
            },
            {
                label: 'Initialize package',
                hint: 'Set up a new package.json.',
                npm: 'npm init -y',
                yarn: 'yarn init -y',
                pnpm: 'pnpm init'
            },
            {
                label: 'Install dependencies',
                hint: 'Add VitePress and Vue as dev dependencies.',
                npm: 'npm add -D vitepress vue',
                yarn: 'yarn add -D vitepress vue',
                pnpm: 'pnpm add -D vitepress vue'
            },
            {
                label: 'Initialize VitePress',
                hint: 'Run the setup wizard.',
                npm: 'npx vitepress init',
                yarn: 'yarn vitepress init',
                pnpm: 'pnpm vitepress init'
            },
            {
                label: 'Start development server',
                hint: 'Start local server (default folder is usually docs).',
                npm: 'npm run docs:dev',
                yarn: 'yarn docs:dev',
                pnpm: 'pnpm docs:dev'
            },
            {
                label: 'Build for production',
                hint: 'Generate static site output.',
                npm: 'npm run docs:build',
                yarn: 'yarn docs:build',
                pnpm: 'pnpm docs:build'
            }
        ],
    },
    {
        id: 'mkdocs',
        name: 'MkDocs',
        icon: '📝',
        badge: 'Python-based',
        badgeColor: '#306998',
        description: 'A fast, simple and downright gorgeous static site generator that\'s geared towards building project documentation.',
        docs: 'https://www.mkdocs.org/getting-started/',
        tags: ['docs', 'python', 'static-site', 'markdown', 'material'],
        steps: [
            {
                label: 'Install MkDocs',
                hint: 'Ensure Python & pip are installed, then install MkDocs. (Material theme is highly recommended)',
                npm: 'pip install mkdocs mkdocs-material',
                yarn: 'pip install mkdocs mkdocs-material',
                pnpm: 'pip install mkdocs mkdocs-material'
            },
            {
                label: 'Create project',
                hint: 'Scaffold a new MkDocs project.',
                npm: 'mkdocs new my-project',
                yarn: 'mkdocs new my-project',
                pnpm: 'mkdocs new my-project'
            },
            {
                label: 'Navigate to project',
                hint: 'Change into the project directory.',
                npm: 'cd my-project',
                yarn: 'cd my-project',
                pnpm: 'cd my-project'
            },
            {
                label: 'Configure Material theme (Optional)',
                hint: 'Edit mkdocs.yml to use the material theme.',
                npm: 'echo "theme:\\n  name: material" >> mkdocs.yml',
                yarn: 'echo "theme:\\n  name: material" >> mkdocs.yml',
                pnpm: 'echo "theme:\\n  name: material" >> mkdocs.yml'
            },
            {
                label: 'Start development server',
                hint: 'Serve the site locally.',
                npm: 'mkdocs serve',
                yarn: 'mkdocs serve',
                pnpm: 'mkdocs serve'
            },
            {
                label: 'Build for production',
                hint: 'Compile everything to the /site directory.',
                npm: 'mkdocs build',
                yarn: 'mkdocs build',
                pnpm: 'mkdocs build'
            }
        ],
    },
    {
        id: 'hugo',
        name: 'Hugo',
        icon: '🦅',
        badge: 'Go-based',
        badgeColor: '#ff4088',
        description: 'The world\'s fastest framework for building websites. Written in Go.',
        docs: 'https://gohugo.io/getting-started/quick-start/',
        tags: ['docs', 'go', 'static-site', 'fast', 'blog'],
        steps: [
            {
                label: 'Install CLI (macOS / Linux)',
                hint: 'If on Windows, use `choco install hugo-extended`.',
                npm: 'brew install hugo',
                yarn: 'brew install hugo',
                pnpm: 'brew install hugo'
            },
            {
                label: 'Create project',
                hint: 'Generate a new Hugo site scaffold.',
                npm: 'hugo new site mySite',
                yarn: 'hugo new site mySite',
                pnpm: 'hugo new site mySite'
            },
            {
                label: 'Navigate to project',
                hint: 'Change into the project directory.',
                npm: 'cd mySite',
                yarn: 'cd mySite',
                pnpm: 'cd mySite'
            },
            {
                label: 'Add a Theme',
                hint: 'Initialize git and add a popular theme (e.g. PaperMod).',
                npm: 'git init\ngit submodule add https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod\necho "theme = \'PaperMod\'" >> hugo.toml',
                yarn: 'git init\ngit submodule add https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod\necho "theme = \'PaperMod\'" >> hugo.toml',
                pnpm: 'git init\ngit submodule add https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod\necho "theme = \'PaperMod\'" >> hugo.toml'
            },
            {
                label: 'Start development server',
                hint: 'Run Hugo with drafts enabled.',
                npm: 'hugo server -D',
                yarn: 'hugo server -D',
                pnpm: 'hugo server -D'
            },
            {
                label: 'Build for production',
                hint: 'Generate static content in the /public folder.',
                npm: 'hugo',
                yarn: 'hugo',
                pnpm: 'hugo'
            }
        ],
    },
    {
        id: 'eleventy',
        name: 'Eleventy',
        icon: '🎈',
        badge: 'JS-based',
        badgeColor: '#222222',
        description: 'A simpler static site generator. Transforms a directory of templates into HTML.',
        docs: 'https://www.11ty.dev/docs/getting-started/',
        tags: ['docs', 'javascript', 'static-site', 'templates', 'html'],
        steps: [
            {
                label: 'Create project folder',
                hint: 'Create a new directory for your 11ty project.',
                npm: 'mkdir my-11ty-site && cd my-11ty-site',
                yarn: 'mkdir my-11ty-site && cd my-11ty-site',
                pnpm: 'mkdir my-11ty-site && cd my-11ty-site'
            },
            {
                label: 'Initialize package',
                hint: 'Create standard package.json file.',
                npm: 'npm init -y',
                yarn: 'yarn init -y',
                pnpm: 'pnpm init'
            },
            {
                label: 'Install dependencies',
                hint: 'Install Eleventy locally to your project.',
                npm: 'npm install @11ty/eleventy --save-dev',
                yarn: 'yarn add -D @11ty/eleventy',
                pnpm: 'pnpm add -D @11ty/eleventy'
            },
            {
                label: 'Create a template',
                hint: 'Create a simple markdown file to start.',
                npm: 'echo "# Hello World" > index.md',
                yarn: 'echo "# Hello World" > index.md',
                pnpm: 'echo "# Hello World" > index.md'
            },
            {
                label: 'Start development server',
                hint: 'Start local dev server with auto-refresh.',
                npm: 'npx @11ty/eleventy --serve',
                yarn: 'yarn eleventy --serve',
                pnpm: 'pnpm eleventy --serve'
            },
            {
                label: 'Build for production',
                hint: 'Compile everything to the /_site directory.',
                npm: 'npx @11ty/eleventy',
                yarn: 'yarn eleventy',
                pnpm: 'pnpm eleventy'
            }
        ],
    }
];

export const docsCategories = ['All', 'React-based', 'Vue-based', 'Python-based', 'Go-based', 'JS-based'];

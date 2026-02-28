// Python Frameworks data
export const pythonFrameworks = [
    {
        id: 'django',
        name: 'Django',
        icon: '🎸',
        badge: 'Full-stack',
        badgeColor: '#092e20',
        description: 'The web framework for perfectionists with deadlines. Includes an ORM, admin interface, and everything needed for a full-stack web app.',
        docs: 'https://docs.djangoproject.com/en/stable/intro/install/',
        tags: ['python', 'full-stack', 'mvc', 'orm', 'django'],
        steps: [
            {
                label: 'Create virtual environment',
                hint: 'Create an isolated Python environment.',
                linux: 'python3 -m venv venv',
                windows: 'python -m venv venv',
            },
            {
                label: 'Activate virtual environment',
                hint: 'Activate the environment before installing packages.',
                linux: 'source venv/bin/activate',
                windows: 'venv\\Scripts\\activate',
            },
            {
                label: 'Install Django',
                hint: 'Install the Django package using pip.',
                linux: 'pip install django',
                windows: 'pip install django',
            },
            {
                label: 'Create project',
                hint: 'Generate the Django project structure.',
                linux: 'django-admin startproject myproject .',
                windows: 'django-admin startproject myproject .',
            },
            {
                label: 'Run development server',
                hint: 'Start the Django development server.',
                linux: 'python manage.py runserver',
                windows: 'python manage.py runserver',
            },
        ],
    },
    {
        id: 'flask',
        name: 'Flask',
        icon: '🌶️',
        badge: 'Lightweight',
        badgeColor: '#ffffff',
        description: 'A lightweight WSGI web application framework. It is designed to make getting started quick and easy, with the ability to scale up to complex applications.',
        docs: 'https://flask.palletsprojects.com/en/latest/installation/',
        tags: ['python', 'microframework', 'lightweight', 'flask', 'api'],
        steps: [
            {
                label: 'Create virtual environment',
                hint: 'Create an isolated Python environment.',
                linux: 'python3 -m venv venv',
                windows: 'python -m venv venv',
            },
            {
                label: 'Activate virtual environment',
                hint: 'Activate the environment before installing packages.',
                linux: 'source venv/bin/activate',
                windows: 'venv\\Scripts\\activate',
            },
            {
                label: 'Install Flask',
                hint: 'Install the Flask package using pip.',
                linux: 'pip install Flask',
                windows: 'pip install Flask',
            },
            {
                label: 'Create application file',
                hint: 'Create a minimum viable Flask application.',
                linux: 'echo "from flask import Flask\\napp = Flask(__name__)\\n\\n@app.route(\'/\')\\ndef hello():\\n    return \'Hello, World!\'" > app.py',
                windows: 'echo from flask import Flask > app.py\necho app = Flask(__name__) >> app.py\necho. >> app.py\necho @app.route(\'/\') >> app.py\necho def hello(): >> app.py\necho     return \'Hello, World!\' >> app.py',
            },
            {
                label: 'Run development server',
                hint: 'Start the Flask development server.',
                linux: 'flask --app app run --debug',
                windows: 'flask --app app run --debug',
            },
        ],
    },
    {
        id: 'fastapi',
        name: 'FastAPI',
        icon: '⚡',
        badge: 'API',
        badgeColor: '#009688',
        description: 'A modern, fast (high-performance), web framework for building APIs with Python based on standard Python type hints.',
        docs: 'https://fastapi.tiangolo.com/#installation',
        tags: ['python', 'api', 'high-performance', 'fastapi', 'async'],
        steps: [
            {
                label: 'Create virtual environment',
                hint: 'Create an isolated Python environment.',
                linux: 'python3 -m venv venv',
                windows: 'python -m venv venv',
            },
            {
                label: 'Activate virtual environment',
                hint: 'Activate the environment before installing packages.',
                linux: 'source venv/bin/activate',
                windows: 'venv\\Scripts\\activate',
            },
            {
                label: 'Install FastAPI & Uvicorn',
                hint: 'Install FastAPI and an ASGI server.',
                linux: 'pip install "fastapi[standard]"',
                windows: 'pip install "fastapi[standard]"',
            },
            {
                label: 'Create application file',
                hint: 'Create a basic FastAPI app.',
                linux: 'echo "from fastapi import FastAPI\\n\\napp = FastAPI()\\n\\n@app.get(\'/\')\\ndef read_root():\\n    return {\'Hello\': \'World\'}" > main.py',
                windows: 'echo from fastapi import FastAPI > main.py\necho. >> main.py\necho app = FastAPI() >> main.py\necho. >> main.py\necho @app.get(\'/\') >> main.py\necho def read_root(): >> main.py\necho     return {\'Hello\': \'World\'} >> main.py',
            },
            {
                label: 'Run development server',
                hint: 'Start the development server with auto-reload.',
                linux: 'fastapi dev main.py',
                windows: 'fastapi dev main.py',
            },
        ],
    },
    {
        id: 'pyramid',
        name: 'Pyramid',
        icon: '🔺',
        badge: 'Flexible',
        badgeColor: '#ff2525',
        description: 'A small, fast, down-to-earth Python web framework. It makes real-world web application development and deployment more fun, more predictable, and more productive.',
        docs: 'https://docs.pylonsproject.org/projects/pyramid/en/latest/quick_tutorial/index.html',
        tags: ['python', 'flexible', 'pyramid', 'web'],
        steps: [
            {
                label: 'Create virtual environment',
                hint: 'Create an isolated Python environment.',
                linux: 'python3 -m venv venv',
                windows: 'python -m venv venv',
            },
            {
                label: 'Activate virtual environment',
                hint: 'Activate the environment before installing packages.',
                linux: 'source venv/bin/activate',
                windows: 'venv\\Scripts\\activate',
            },
            {
                label: 'Install Cookiecutter',
                hint: 'Install cookiecutter to generate a Pyramid project.',
                linux: 'pip install cookiecutter',
                windows: 'pip install cookiecutter',
            },
            {
                label: 'Create project',
                hint: 'Generate the Pyramid project structure.',
                linux: 'cookiecutter gh:Pylons/pyramid-cookiecutter-starter --checkout main',
                windows: 'cookiecutter gh:Pylons/pyramid-cookiecutter-starter --checkout main',
            },
            {
                label: 'Install project dependencies',
                hint: 'Install the newly created project in editable mode.',
                linux: 'cd <project_name>\npip install -e ".[testing]"',
                windows: 'cd <project_name>\npip install -e ".[testing]"',
            },
            {
                label: 'Run development server',
                hint: 'Start the Waitress development server.',
                linux: 'pserve development.ini --reload',
                windows: 'pserve development.ini --reload',
            },
        ],
    }
];

export const pythonCategories = ['All', 'Full-stack', 'Lightweight', 'API', 'Flexible'];

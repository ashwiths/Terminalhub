// AI Frameworks data
export const aiFrameworks = [
    {
        id: 'langchain',
        name: 'LangChain',
        icon: '🦜',
        badge: 'LLM Framework',
        badgeColor: '#eab308',
        description: 'A framework for developing applications powered by language models. Provides standard interfaces for chains, agents, and memory.',
        docs: 'https://python.langchain.com/docs/get_started/introduction',
        tags: ['ai', 'llm', 'agents', 'python', 'javascript'],
        steps: [
            {
                label: 'Install framework',
                hint: 'Install the core LangChain package.',
                python: 'pip install langchain',
                js: 'npm install langchain'
            },
            {
                label: 'Install LLM integration',
                hint: 'Install an integration package, e.g., for OpenAI.',
                python: 'pip install langchain-openai',
                js: 'npm install @langchain/openai'
            },
            {
                label: 'Create basic project/file',
                hint: 'Create an entry point for your application.',
                python: 'touch app.py',
                js: 'touch app.js'
            },
            {
                label: 'Example usage',
                hint: 'Initialize the model and invoke a simple prompt.',
                python: 'from langchain_openai import ChatOpenAI\n\nllm = ChatOpenAI()\nprint(llm.invoke("Hello, world!").content)',
                js: 'import { ChatOpenAI } from "@langchain/openai";\n\nconst model = new ChatOpenAI({});\nconst res = await model.invoke("Hello, world!");\nconsole.log(res);'
            },
            {
                label: 'Run application',
                hint: 'Execute the script (Requires OPENAI_API_KEY environment variable).',
                python: 'export OPENAI_API_KEY="sk-..."\npython app.py',
                js: 'export OPENAI_API_KEY="sk-..."\nnode app.js'
            }
        ],
    },
    {
        id: 'llamaindex',
        name: 'LlamaIndex',
        icon: '🦙',
        badge: 'Data Framework',
        badgeColor: '#3b82f6',
        description: 'A data framework for your LLM applications. Provides tools to ingest, structure, and access private or domain-specific data.',
        docs: 'https://docs.llamaindex.ai/en/stable/',
        tags: ['ai', 'llm', 'rag', 'data', 'python', 'typescript'],
        steps: [
            {
                label: 'Install framework',
                hint: 'Install LlamaIndex.',
                python: 'pip install llama-index',
                js: 'npm install llamaindex'
            },
            {
                label: 'Create basic project/file',
                hint: 'Create a script and a data folder for documents.',
                python: 'mkdir data && touch app.py',
                js: 'mkdir data && touch app.ts'
            },
            {
                label: 'Example usage',
                hint: 'Load documents and query the index.',
                python: 'from llama_index.core import VectorStoreIndex, SimpleDirectoryReader\n\ndocuments = SimpleDirectoryReader("data").load_data()\nindex = VectorStoreIndex.from_documents(documents)\nquery_engine = index.as_query_engine()\nprint(query_engine.query("What did the author do?"))',
                js: 'import { Document, VectorStoreIndex } from "llamaindex";\n\nconst doc = new Document({ text: "Llamas are great." });\nconst index = await VectorStoreIndex.fromDocuments([doc]);\nconst queryEngine = index.asQueryEngine();\nconsole.log(await queryEngine.query({ query: "What is great?" }));'
            },
            {
                label: 'Run application',
                hint: 'Execute the script.',
                python: 'export OPENAI_API_KEY="sk-..."\npython app.py',
                js: 'export OPENAI_API_KEY="sk-..."\nnpx ts-node app.ts'
            }
        ],
    },
    {
        id: 'haystack',
        name: 'Haystack',
        icon: '🌾',
        badge: 'LLM Orchestration',
        badgeColor: '#059669',
        description: 'An open-source framework by deepset for building production-ready LLM applications, RAG pipelines, and search systems.',
        docs: 'https://haystack.deepset.ai/overview/intro',
        tags: ['ai', 'llm', 'rag', 'python', 'search'],
        steps: [
            {
                label: 'Install framework',
                hint: 'Install Haystack using pip.',
                python: 'pip install haystack-ai',
                js: null
            },
            {
                label: 'Create basic project/file',
                hint: 'Create the main execution script.',
                python: 'touch pipeline.py',
                js: null
            },
            {
                label: 'Example usage',
                hint: 'Build a basic Pipeline with an LLM generator.',
                python: 'from haystack import Pipeline\nfrom haystack.components.generators import OpenAIGenerator\n\npipeline = Pipeline()\npipeline.add_component("llm", OpenAIGenerator())\nres = pipeline.run({"llm": {"prompt": "Tell me a joke"}})\nprint(res["llm"]["replies"])',
                js: null
            },
            {
                label: 'Run application',
                hint: 'Execute the Haystack pipeline.',
                python: 'export OPENAI_API_KEY="sk-..."\npython pipeline.py',
                js: null
            }
        ],
    },
    {
        id: 'tensorflowjs',
        name: 'TensorFlow.js',
        icon: '🧠',
        badge: 'ML Library',
        badgeColor: '#ea580c',
        description: 'A library for machine learning in JavaScript. Develop ML models in the browser or Node.js.',
        docs: 'https://www.tensorflow.org/js',
        tags: ['ai', 'ml', 'javascript', 'neural-networks'],
        steps: [
            {
                label: 'Install framework',
                hint: 'Install TensorFlow.js for Node or use CDN for browser.',
                python: null,
                js: 'npm install @tensorflow/tfjs-node'
            },
            {
                label: 'Create basic project/file',
                hint: 'Create a Node script to train a simple model.',
                python: null,
                js: 'touch model.js'
            },
            {
                label: 'Example usage',
                hint: 'Define and train a sequential model.',
                python: null,
                js: 'const tf = require("@tensorflow/tfjs-node");\n\nconst model = tf.sequential();\nmodel.add(tf.layers.dense({units: 1, inputShape: [1]}));\nmodel.compile({loss: "meanSquaredError", optimizer: "sgd"});\n\nconst xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);\nconst ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);\n\nmodel.fit(xs, ys, {epochs: 10}).then(() => {\n  model.predict(tf.tensor2d([5], [1, 1])).print();\n});'
            },
            {
                label: 'Run application',
                hint: 'Execute the script to train and predict.',
                python: null,
                js: 'node model.js'
            }
        ],
    }
];

export const aiCategories = ['All', 'LLM Framework', 'Data Framework', 'LLM Orchestration', 'ML Library'];

// Java Frameworks data
export const javaFrameworks = [
    {
        id: 'spring-boot',
        name: 'Spring Boot',
        icon: '🍃',
        badge: 'Enterprise',
        badgeColor: '#6db33f',
        description: 'Makes it easy to create stand-alone, production-grade Spring based Applications that you can "just run".',
        docs: 'https://spring.io/projects/spring-boot',
        tags: ['java', 'spring', 'enterprise', 'web'],
        steps: [
            {
                label: 'Create project',
                hint: 'Generate project using Spring Initr or curl.',
                maven: 'curl https://start.spring.io/starter.zip -d dependencies=web -o springboot-app.zip\nunzip springboot-app.zip -d springboot-app',
                gradle: 'curl https://start.spring.io/starter.zip -d type=gradle-project -d dependencies=web -o springboot-app.zip\nunzip springboot-app.zip -d springboot-app',
            },
            {
                label: 'Navigate to project',
                hint: 'Change into the project directory.',
                maven: 'cd springboot-app',
                gradle: 'cd springboot-app',
            },
            {
                label: 'Build project',
                hint: 'Compile code and package the application.',
                maven: './mvnw clean package',
                gradle: './gradlew build',
            },
            {
                label: 'Run development server',
                hint: 'Start the application in development mode.',
                maven: './mvnw spring-boot:run',
                gradle: './gradlew bootRun',
            },
            {
                label: 'Production run',
                hint: 'Run the compiled JAR file.',
                maven: 'java -jar target/demo-0.0.1-SNAPSHOT.jar',
                gradle: 'java -jar build/libs/demo-0.0.1-SNAPSHOT.jar',
            }
        ],
    },
    {
        id: 'micronaut',
        name: 'Micronaut',
        icon: 'Ⓜ️',
        badge: 'Microservices',
        badgeColor: '#000000',
        description: 'A modern, JVM-based, full-stack framework for building modular, easily testable microservice and serverless applications.',
        docs: 'https://micronaut.io/',
        tags: ['java', 'microservices', 'serverless', 'graalvm'],
        steps: [
            {
                label: 'Create project',
                hint: 'Generate project using curl or Micronaut CLI.',
                maven: 'curl -O https://launch.micronaut.io/demo.zip\nunzip demo.zip -d micronaut-app',
                gradle: 'curl -O "https://launch.micronaut.io/demo.zip?build=gradle"\nunzip demo.zip -d micronaut-app',
            },
            {
                label: 'Navigate to project',
                hint: 'Change into the project directory.',
                maven: 'cd micronaut-app',
                gradle: 'cd micronaut-app',
            },
            {
                label: 'Build project',
                hint: 'Compile the application and build the fat JAR.',
                maven: './mvnw package',
                gradle: './gradlew assemble',
            },
            {
                label: 'Run development server',
                hint: 'Start the application with continuous build.',
                maven: './mvnw mn:run',
                gradle: './gradlew run',
            },
            {
                label: 'Production run',
                hint: 'Run the compiled fat JAR.',
                maven: 'java -jar target/demo-0.1.jar',
                gradle: 'java -jar build/libs/demo-0.1-all.jar',
            }
        ],
    },
    {
        id: 'quarkus',
        name: 'Quarkus',
        icon: '⚛️',
        badge: 'Cloud Native',
        badgeColor: '#4695eb',
        description: 'A Kubernetes Native Java stack tailored for OpenJDK HotSpot and GraalVM, crafted from the best of breed Java libraries.',
        docs: 'https://quarkus.io/',
        tags: ['java', 'kubernetes', 'cloud-native', 'graalvm'],
        steps: [
            {
                label: 'Create project',
                hint: 'Generate a new Quarkus project.',
                maven: 'mvn io.quarkus.platform:quarkus-maven-plugin:3.6.4:create \\\n    -DprojectGroupId=org.acme \\\n    -DprojectArtifactId=quarkus-app \\\n    -Dextensions="resteasy-reactive"',
                gradle: 'gradle wrapper --gradle-version 8.5\n./gradlew io.quarkus.platform:quarkus-gradle-plugin:3.6.4:create \\\n    -DprojectGroupId=org.acme \\\n    -DprojectArtifactId=quarkus-app',
            },
            {
                label: 'Navigate to project',
                hint: 'Change into the project directory.',
                maven: 'cd quarkus-app',
                gradle: 'cd quarkus-app',
            },
            {
                label: 'Build project',
                hint: 'Compile the application to a runnable JAR.',
                maven: './mvnw package',
                gradle: './gradlew build',
            },
            {
                label: 'Run development server',
                hint: 'Start Quarkus in dev mode with live reload.',
                maven: './mvnw quarkus:dev',
                gradle: './gradlew quarkusDev',
            },
            {
                label: 'Production run',
                hint: 'Run the optimized fast-jar.',
                maven: 'java -jar target/quarkus-app/quarkus-run.jar',
                gradle: 'java -jar build/quarkus-app/quarkus-run.jar',
            }
        ],
    }
];

export const javaCategories = ['All', 'Enterprise', 'Microservices', 'Cloud Native'];

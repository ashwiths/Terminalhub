// Mobile Frameworks data
export const mobileFrameworks = [
    {
        id: 'react-native',
        name: 'React Native',
        icon: '📱',
        badge: 'Cross-platform',
        badgeColor: '#61dafb',
        description: 'A framework for building native apps using React. Core components map directly to native UI building blocks.',
        docs: 'https://reactnative.dev/docs/environment-setup',
        tags: ['mobile', 'react', 'cross-platform', 'ios', 'android'],
        steps: [
            {
                label: 'Install CLI (if required)',
                hint: 'Remove global CLI and use npx to guarantee latest version.',
                android: 'npm uninstall -g react-native-cli @react-native-community/cli',
                ios: 'npm uninstall -g react-native-cli @react-native-community/cli',
            },
            {
                label: 'Create project',
                hint: 'Initialize a new React Native app.',
                android: 'npx @react-native-community/cli@latest init MyApp',
                ios: 'npx @react-native-community/cli@latest init MyApp',
            },
            {
                label: 'Navigate to project',
                hint: 'Change into the project directory.',
                android: 'cd MyApp',
                ios: 'cd MyApp',
            },
            {
                label: 'Install dependencies',
                hint: 'Install CocoaPods dependencies (iOS only).',
                android: 'npm install',
                ios: 'npm install\ncd ios\npod install\ncd ..',
            },
            {
                label: 'Start development server',
                hint: 'Start the Metro bundler.',
                android: 'npm start',
                ios: 'npm start',
            },
            {
                label: 'Run on Device/Emulator',
                hint: 'Launch the application on your device.',
                android: 'npm run android',
                ios: 'npm run ios',
            },
            {
                label: 'Build for production',
                hint: 'Generate production release build.',
                android: 'cd android\n./gradlew assembleRelease',
                ios: '# Build handled primarily through Xcode',
            }
        ],
    },
    {
        id: 'flutter',
        name: 'Flutter',
        icon: '🦋',
        badge: 'Native-like',
        badgeColor: '#02569b',
        description: 'Google\'s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.',
        docs: 'https://docs.flutter.dev/get-started/install',
        tags: ['mobile', 'dart', 'cross-platform', 'google'],
        steps: [
            {
                label: 'Install Prerequisites',
                hint: 'Ensure Flutter SDK is installed and in your PATH.',
                android: 'flutter doctor',
                ios: 'flutter doctor',
            },
            {
                label: 'Create project',
                hint: 'Generate a new Flutter application.',
                android: 'flutter create my_app',
                ios: 'flutter create my_app',
            },
            {
                label: 'Navigate to project',
                hint: 'Change into the project directory.',
                android: 'cd my_app',
                ios: 'cd my_app',
            },
            {
                label: 'Install dependencies',
                hint: 'Fetch packages defined in pubspec.yaml.',
                android: 'flutter pub get',
                ios: 'flutter pub get',
            },
            {
                label: 'Start development server',
                hint: 'Since Flutter is native, there is no "dev server"; skip to run.',
                android: '# Skip',
                ios: '# Skip',
            },
            {
                label: 'Run on Device/Emulator',
                hint: 'Launch the app with "Hot Reload" enabled.',
                android: 'flutter run -d android',
                ios: 'flutter run -d ios',
            },
            {
                label: 'Build for production',
                hint: 'Generate app bundle or IPA.',
                android: 'flutter build appbundle',
                ios: 'flutter build ipa',
            }
        ],
    },
    {
        id: 'ionic',
        name: 'Ionic',
        icon: '🔋',
        badge: 'Hybrid',
        badgeColor: '#3880ff',
        description: 'An open source UI toolkit for building performant, high-quality mobile and desktop apps using web technologies.',
        docs: 'https://ionicframework.com/docs',
        tags: ['mobile', 'hybrid', 'capacitor', 'web'],
        steps: [
            {
                label: 'Install CLI',
                hint: 'Install the Ionic CLI globally.',
                android: 'npm install -g @ionic/cli',
                ios: 'npm install -g @ionic/cli',
            },
            {
                label: 'Create project',
                hint: 'Create an Ionic app (React is default in this example).',
                android: 'ionic start myApp blank --type=react',
                ios: 'ionic start myApp blank --type=react',
            },
            {
                label: 'Navigate to project',
                hint: 'Change into the project directory.',
                android: 'cd myApp',
                ios: 'cd myApp',
            },
            {
                label: 'Install dependencies (Capacitor)',
                hint: 'Add native platforms.',
                android: 'npm install\nionic capacitor add android',
                ios: 'npm install\nionic capacitor add ios',
            },
            {
                label: 'Start development server',
                hint: 'Run local browser development view.',
                android: 'ionic serve',
                ios: 'ionic serve',
            },
            {
                label: 'Run on Device/Emulator',
                hint: 'Sync native files and run the Capacitor project.',
                android: 'ionic capacitor run android -l --external',
                ios: 'ionic capacitor run ios -l --external',
            },
            {
                label: 'Build for production',
                hint: 'Build web assets and copy to native project.',
                android: 'ionic build --prod\nionic capacitor copy android\ncd android\n./gradlew assembleRelease',
                ios: 'ionic build --prod\nionic capacitor copy ios\n# Open in Xcode to build archive',
            }
        ],
    },
    {
        id: 'expo',
        name: 'Expo',
        icon: '⛰️',
        badge: 'Cross-platform',
        badgeColor: '#000020',
        description: 'An open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.',
        docs: 'https://docs.expo.dev/',
        tags: ['mobile', 'react-native', 'expo', 'universal'],
        steps: [
            {
                label: 'Install CLI (Optional)',
                hint: 'Global installation of Expo CLI (optional, npx preferred).',
                android: 'npm install -g eas-cli',
                ios: 'npm install -g eas-cli',
            },
            {
                label: 'Create project',
                hint: 'Initialize a new Expo React Native project.',
                android: 'npx create-expo-app my-app',
                ios: 'npx create-expo-app my-app',
            },
            {
                label: 'Navigate to project',
                hint: 'Change into the project directory.',
                android: 'cd my-app',
                ios: 'cd my-app',
            },
            {
                label: 'Install dependencies',
                hint: 'Use expo install to fetch compatible versions.',
                android: 'npx expo install',
                ios: 'npx expo install',
            },
            {
                label: 'Start development server',
                hint: 'Start Expo Go server.',
                android: 'npx expo start',
                ios: 'npx expo start',
            },
            {
                label: 'Run on Device/Emulator',
                hint: 'Press \'a\' or \'i\' in the terminal after starting.',
                android: 'npx expo start --android',
                ios: 'npx expo start --ios',
            },
            {
                label: 'Build for production',
                hint: 'Use Expo Application Services (EAS) to build.',
                android: 'eas build -p android --profile production',
                ios: 'eas build -p ios --profile production',
            }
        ],
    }
];

export const mobileCategories = ['All', 'Cross-platform', 'Native-like', 'Hybrid'];

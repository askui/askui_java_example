# AskUI Java Integration

This repository demonstrates how to integrate AskUI automation testing with Java, allowing you to run AskUI TypeScript tests from a Java environment.

## 🚀 Features

- Run AskUI automation tests from Java
- Environment configuration management
- Sample login automation test

## 📋 Prerequisites

- Java JDK 11 or higher
- Node.js and npm
- Visual Studio Code
- Chrome browser
- AskUI account and credentials (workspace ID and token)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd askui-java-integration
   ```

2. **Install Node.js dependencies**
   ```bash
   npm install askui @askui/jest-allure-circus ts-jest @types/jest
   ```

3. **Set up AskUI configuration**
   - Create `.askui/Settings` directory in your project root
   - Create `AskuiEnvironmentSettings.json` with your credentials
   - Update environment variables in `AskUIJavaRunner.java`:
     - `ASKUI_TOKEN`
     - `ASKUI_WORKSPACE_ID`

## 📁 Project Structure

java_askui/
├── .vscode/
├── src/
│   └── AskUIJavaRunner.java       # Main Java source file
├── target/                        # Generated by javac command
│   └── AskUIJavaRunner.class      # Compiled Java class file
├── settings.json
└── README.md

## 🔧 Configuration Files in askui project

- Make sure you change the following ts files in your askui repository ( that you have created by installing askui and wrote a sample.test.ts file)

### AskUI Helper (askui-helper.ts)
```typescript
// Configuration for AskUI controller and client
// See helpers/askui-helper.ts in repository by clicking on askui-helper.ts link above
```

### Jest Configuration (jest.config.ts)
```typescript
// Test runner configuration
// See jest.config.ts in repository by clicking on jest.config.ts link above
```
```

## 📝 Sample Test

The repository includes a sample test that demonstrates logging into a website:

```typescript
// See sample.test.ts in repository, place it in your askui folder that is created after you have installed askui in VS code
```

## 🚀 Running Tests

1. **Compile the Java runner**
   ```bash
   javac -d target src/AskUIJavaRunner.java
   ```

2. **Execute tests**
   ```bash
   java -cp target AskUIJavaRunner
   ```

## ⚙️ Customization

### Modifying Test Path
Update the `projectRoot` path in `AskUIJavaRunner.java` to match your project structure:

```java
Path projectRoot = Paths.get("YOUR_PROJECT_PATH");
```

### Updating AskUI Settings
Modify the `askuiSettingsPath` in `AskUIJavaRunner.java`:

```java
Path askuiSettingsPath = Paths.get("PATH_TO_ASKUI_SETTINGS");
```

## ⚠️ Important Notes

- Ensure all environment variables are properly set before running tests
- The Chrome browser must be installed for web automation tests
- Keep your AskUI credentials secure and never commit them to version control
- Make sure the paths in `AskUIJavaRunner.java` match your local setup

## 🆘 Troubleshooting

Common issues and solutions:

1. **Java Path Issues**
   - Ensure JAVA_HOME is properly set
   - Verify Java version compatibility

2. **Node.js Dependencies**
   - Run `npm install` to ensure all dependencies are installed
   - Check for any conflicting package versions

3. **AskUI Connection Issues**
   - Verify your workspace ID and token
   - Check network connectivity
   - Ensure the AskUI controller is running

## 📚 Additional Resources

- [AskUI Documentation](https://docs.askui.com/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

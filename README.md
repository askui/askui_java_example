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
- AskUI account and credentials (workspace id and token) ([Login here](https://app.askui.com/))
- Install AskUI Suite [Download here](https://docs.askui.com/docs/general/Getting%20Started/start)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/askui/askui_java_example.git
   cd askui_java_example
   ```

2. **Install askui dependencies**
   Open project, In VS-terminal type. ([Download AskUI Suite](https://docs.askui.com/docs/general/Getting%20Started/start))
   ```bash
   askui-shell
   ```

4. **Set up AskUI configuration**
   - Go to typescript-askui-project folder in the terminal, Update environment variables and npm install. (*Open [app.askui.com](https://app.askui.com/) -> Access Tokens -> Create Token*)
   ```bash
   # Installes node dependencies
   npm install
   AskUI-SetSettings -WorkspaceId <workspace id> -Token <access token>
   ```

## 📁 Project Structure
```
ASKUI_JAVA_EXAMPLE
├── askui_java
│   ├── .vscode
│   │   └── settings.json
│   ├── src
│   │   └── AskUIJavaRunner.java
│   └── target
│       └── AskUIJavaRunner.class
├── cucumber-java-skeleton
│   └── target
├── typescript-askui-project
│   ├── .askui
│   │   └── Settings
│   │       └── AskuiEnvironmentSettings.json
│   ├── allure-results
│   ├── askui_example
│   │   └── helpers
│   │       ├── askui-helper.ts
│   │       ├── jest.config.ts
│   │       └── sample.test.ts
│   ├── node_modules
│   ├── .eslintignore
│   ├── .eslintrc.json
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
```

## 📝 Sample Test

The repository includes a sample test that demonstrates logging into a website, which is what we would call to test in this project:

```typescript
// See sample.test.ts in repository, place it in your askui folder that is created after you have installed askui in VS code
```

## 🚀 Running Tests


1. **Start askui-controller**
```
AskUI-StartController -RunInBackground
```

2. **Compile the Java runner**
   ```bash
   javac -d target askui_java/src/AskUIJavaRunner.java
   ```

3. **Execute tests**
   ```bash
   java -cp target AskUIJavaRunner
   ```

4. **Show Output**
   ```bash
   <insert start>
   ...
   <Jest Test Report>
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

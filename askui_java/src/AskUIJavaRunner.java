import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Map;

public class AskUIJavaRunner {
    private static final String DEFAULT_NPX_PATH = "npx.cmd";
    private static final String JEST_COMMAND = "jest";
    
    public static void main(String[] args) {
        try {
            Path projectRoot = Paths.get("C:", "Users", "xxx", "xxx", "askui_example"); // replace with your askui project root
            Path askuiSettingsPath = Paths.get("C:", "Users", "xxx", "xxx", ".askui", "Settings", "AskuiEnvironmentSettings.json"); // go to askui environment settings json path in project root
            
            System.out.println("Starting AskUI test execution...");
            System.out.println("Using AskUI settings from: " + askuiSettingsPath);
            System.out.println("PATH: " + System.getenv("PATH"));
            
            ProcessBuilder processBuilder = new ProcessBuilder(
                DEFAULT_NPX_PATH, 
                JEST_COMMAND,
                "--config",
                "jest.config.ts",
                "--testEnvironment",
                "@askui/jest-allure-circus",
                "--verbose",
                "--no-cache",
                "sample.test.ts" // here is where you should write the name of your test file that needs to be executed
            );
            
            processBuilder.redirectErrorStream(true);
            processBuilder.directory(projectRoot.toFile());

            // Set AskUI environment secret_sauce variables
            Map<String, String> env = processBuilder.environment();
            env.put("PATH", System.getenv("PATH") + ";C:\\Program Files\\nodejs");
            env.put("ASKUI_CONFIG_PATH", askuiSettingsPath.toString());
            env.put("ASKUI_TOKEN", System.getenv("ASKUI_TOKEN")); //token
            env.put("ASKUI_WORKSPACE_ID", System.getenv("ASKUI_WORKSPACE_ID")); // Your workspace ID
            // Replace these lines in your code:
            env.put("NODE_ENV", "test");
            
            System.out.println("Working directory: " + processBuilder.directory().getAbsolutePath());
            System.out.println("Executing command: " + String.join(" ", processBuilder.command()));

            Process process = processBuilder.start();

            try (BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()))) {
                String line;
                while ((line = reader.readLine()) != null) {
                    System.out.println(line);
                }
            }

            int exitCode = process.waitFor();
            System.out.println("Test finished with exit code: " + exitCode);
            
        } catch (Exception e) {
            System.err.println("Error running AskUI tests: " + e.getMessage());
            e.printStackTrace();
            System.exit(1);
        }
    }
}

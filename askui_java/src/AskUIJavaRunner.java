import java.io.BufferedReader;
import java.io.InputStreamReader;

import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Map;

public class AskUIJavaRunner {
    private static final String DEFAULT_NPX_PATH = "npx.cmd";
    
    public static void main(String[] args) {
        try {
            Path projectRoot = Paths.get("typescript-askui-project"); 

            System.out.println("Starting AskUI test execution...");
            System.out.println("PATH: " + System.getenv("PATH"));
            
            ProcessBuilder processBuilder = new ProcessBuilder(
                "npm.cmd", // Works only for Windows!
                "run",
                "askui"
            ).directory(new File("typescript-askui-project"));
            
            processBuilder.redirectErrorStream(true);
            processBuilder.directory(projectRoot.toFile());

            Map<String, String> env = processBuilder.environment();
            
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

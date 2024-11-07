package Job.Portal.System;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * The entry point for the Job Portal System application.
 * This class contains the main method that starts the Spring Boot application.
 */
@SpringBootApplication // Indicates that this is a Spring Boot application
public class JobPortalSystemApplication {

	/**
	 * The main method which serves as the entry point for the application.
	 * This method initializes the Spring Boot application context and starts the application.
	 *
	 * @param args Command-line arguments passed to the application.
	 */
	public static void main(String[] args) {
		// Launches the Spring Boot application
		SpringApplication.run(JobPortalSystemApplication.class, args);
	}

}

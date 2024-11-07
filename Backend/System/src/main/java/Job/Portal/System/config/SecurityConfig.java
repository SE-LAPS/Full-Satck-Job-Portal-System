package Job.Portal.System.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

/**
 * SecurityConfig is responsible for configuring security-related settings for the application,
 * including authentication, authorization, password encoding, and CORS (Cross-Origin Resource Sharing) policies.
 */
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    /**
     * Provides the AuthenticationManager bean used for managing authentication processes.
     *
     * @param authenticationConfiguration the authentication configuration
     * @return the AuthenticationManager bean
     * @throws Exception if an error occurs during the authentication manager setup
     */
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    /**
     * Configures the SecurityFilterChain for handling HTTP security, including CORS, CSRF protection,
     * session management, and request authorization.
     *
     * @param http the HttpSecurity object used to configure web security
     * @return the configured SecurityFilterChain
     * @throws Exception if an error occurs during the security configuration
     */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        // Enable CORS and disable CSRF protection
        http
                .cors()
                .and()
                .csrf().disable()

                // Configure authorization for specific endpoints
                .authorizeHttpRequests(authz -> authz
                        .requestMatchers("/api/users/register", "/api/users/login").permitAll() // Allow registration and login
                        .requestMatchers("/api/users", "/api/users/logged-in").permitAll() // Allow access to these user-related endpoints
                        .requestMatchers("/api/job").permitAll() // Allow access to job-related endpoints
                        .requestMatchers(HttpMethod.POST, "/api/job/apply").permitAll() // Allow job application via POST requests
                        .requestMatchers("/api/job/apply/**").permitAll() // Allow access to job application endpoints
                        .anyRequest().authenticated() // All other requests require authentication
                )

                // Configure stateless session management
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        // Build and return the SecurityFilterChain
        return http.build();
    }

    /**
     * Provides the PasswordEncoder bean used for encoding passwords.
     *
     * @return the PasswordEncoder bean
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        // Use BCryptPasswordEncoder for password hashing
        return new BCryptPasswordEncoder();
    }

    /**
     * Configures CORS settings for the application, allowing specific origins, methods, and headers.
     *
     * @return the CorsConfigurationSource bean
     */
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        // Define a CORS configuration
        CorsConfiguration configuration = new CorsConfiguration();

        // Allow requests from localhost:3000 (React frontend)
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));

        // Allow specific HTTP methods
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"));

        // Allow specific headers
        configuration.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));

        // Allow credentials (cookies, authorization headers, etc.)
        configuration.setAllowCredentials(true);

        // Map the configuration to all URL patterns
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        // Return the configured CORS source
        return source;
    }
}

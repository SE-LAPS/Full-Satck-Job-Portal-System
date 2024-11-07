package Job.Portal.System.controller;

import Job.Portal.System.model.User;
import Job.Portal.System.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * This controller handles user-related operations such as registration, login, logout, and user retrieval.
 * It provides endpoints for managing user data within the job portal system.
 */
@RestController
@RequestMapping("/api/users")
public class UserController {

    // Injecting the UserService to handle business logic related to users
    @Autowired
    private UserService userService;

    /**
     * Registers a new user.
     *
     * @param user the user details to register
     * @return ResponseEntity with registered user details or an error message
     */
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            // Attempt to register the user using the UserService
            User registeredUser = userService.registerUser(user);
            return ResponseEntity.ok(registeredUser); // Return the registered user if successful
        } catch (Exception e) {
            // Return a bad request response if registration fails
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Registration failed: " + e.getMessage());
        }
    }

    /**
     * Authenticates a user and logs them in.
     *
     * @param loginRequest a map containing username and password
     * @return ResponseEntity with user details if authentication is successful or an error message
     */
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> loginRequest) {
        String username = loginRequest.get("username");
        String password = loginRequest.get("password");

        Optional<User> userOptional = userService.authenticateUser(username, password);
        if (userOptional.isPresent()) {
            return ResponseEntity.ok(userOptional.get());
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }

    /**
     * Logs out a user.
     *
     * @param logoutRequest a map containing the username
     * @return ResponseEntity with a success message or an error message
     */
    @PostMapping("/logout")
    public ResponseEntity<?> logoutUser(@RequestBody Map<String, String> logoutRequest) {
        try {
            // Extract username from the logout request
            String username = logoutRequest.get("username");

            // Set the user as logged out
            userService.setUserLoggedIn(username, false);
            return ResponseEntity.ok("User logged out successfully"); // Return success message
        } catch (Exception e) {
            // Return a bad request response if logout fails
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Logout failed: " + e.getMessage());
        }
    }

    /**
     * Retrieves all registered users.
     *
     * @return ResponseEntity with the list of all users
     */
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        // Retrieve the list of all users using the UserService
        List<User> users = userService.findAllUsers();
        return ResponseEntity.ok(users); // Return the list of users
    }

    /**
     * Retrieves all currently logged-in users.
     *
     * @return ResponseEntity with the list of logged-in users
     */
    @GetMapping("/logged-in")
    public ResponseEntity<List<User>> getLoggedInUsers() {
        // Retrieve the list of all logged-in users
        List<User> loggedInUsers = userService.findLoggedInUsers();
        return ResponseEntity.ok(loggedInUsers); // Return the list of logged-in users
    }

    /**
     * Retrieves a user by their username.
     *
     * @param username the username to search for
     * @return ResponseEntity with the user details or a not found status
     */
    @GetMapping("/username/{username}")
    public ResponseEntity<User> getUserByUsername(@PathVariable String username) {
        // Retrieve the user by username
        Optional<User> userOptional = userService.findByUsername(username);
        return userOptional.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build()); // Return user details or not found status
    }

    /**
     * Retrieves a user by their email.
     *
     * @param email the email to search for
     * @return ResponseEntity with the user details or a not found status
     */
    @GetMapping("/email/{email}")
    public ResponseEntity<User> getUserByEmail(@PathVariable String email) {
        // Retrieve the user by email
        Optional<User> userOptional = userService.findByEmail(email);
        return userOptional.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build()); // Return user details or not found status
    }
}

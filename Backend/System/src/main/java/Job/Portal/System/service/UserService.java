package Job.Portal.System.service;

import Job.Portal.System.model.User;
import java.util.List;
import java.util.Optional;

/**
 * UserService interface defines the contract for user-related operations in the job portal system.
 * It provides methods for user registration, retrieval, authentication, and login status management.
 */
public interface UserService {

    /**
     * Registers a new user in the system.
     *
     * @param user the user to register
     * @return the registered user
     */
    User registerUser(User user);

    /**
     * Finds a user by their ID.
     *
     * @param id the ID of the user
     * @return an Optional containing the user if found, otherwise empty
     */
    Optional<User> findById(Long id);

    /**
     * Finds a user by their username.
     *
     * @param username the username of the user
     * @return an Optional containing the user if found, otherwise empty
     */
    Optional<User> findByUsername(String username);

    /**
     * Finds a user by their email.
     *
     * @param email the email of the user
     * @return an Optional containing the user if found, otherwise empty
     */
    Optional<User> findByEmail(String email);

    /**
     * Retrieves a list of all users in the system.
     *
     * @return a list of all users
     */
    List<User> findAllUsers();

    /**
     * Sets the login status of a user.
     *
     * @param username the username of the user
     * @param loggedIn true if the user is logged in, false otherwise
     */
    void setUserLoggedIn(String username, boolean loggedIn);

    /**
     * Retrieves a list of all users who are currently logged in.
     *
     * @return a list of logged-in users
     */
    List<User> findLoggedInUsers();

    /**
     * Authenticates a user with the provided username and password.
     *
     * @param username the username of the user
     * @param password the password of the user
     * @return an Optional containing the authenticated user if successful, otherwise empty
     */
    Optional<User> authenticateUser(String username, String password);
}

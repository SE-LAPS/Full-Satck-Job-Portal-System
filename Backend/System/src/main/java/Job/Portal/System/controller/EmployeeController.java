package Job.Portal.System.controller;

import Job.Portal.System.model.Employee;
import Job.Portal.System.model.User;
import Job.Portal.System.service.EmployeeService;
import Job.Portal.System.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Optional;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    // Logger for logging purposes
    private static final Logger logger = LoggerFactory.getLogger(EmployeeController.class);

    // Injecting EmployeeService dependency
    @Autowired
    private EmployeeService employeeService;

    // Injecting UserService dependency
    @Autowired
    private UserService userService;

    /*
     * Register a new employee
     * This method registers a user first, associates it with the employee, and then registers the employee.
     */
    @PostMapping("/register")
    public ResponseEntity<Employee> registerEmployee(@RequestBody Employee employee) {
        User user = userService.registerUser(employee.getUser()); // Register user first
        employee.setUser(user);  // Set the registered user to the employee
        Employee registeredEmployee = employeeService.registerEmployee(employee);  // Register the employee
        return ResponseEntity.ok(registeredEmployee);  // Return the registered employee
    }

    /*
     * Update employee profile
     * This method updates the profile of an existing employee.
     */
    @PutMapping("/update")
    public ResponseEntity<Employee> updateEmployeeProfile(@RequestBody Employee employee) {
        Employee updatedEmployee = employeeService.updateEmployeeProfile(employee);  // Update employee profile
        return ResponseEntity.ok(updatedEmployee);  // Return the updated employee
    }

    /*
     * Get an employee by user ID
     * This method fetches an employee based on the provided user ID.
     */
    @GetMapping("/user/{userId}")
    public ResponseEntity<Employee> getEmployeeByUserId(@PathVariable Long userId) {
        logger.info("Fetching employee for user with ID: {}", userId);  // Log the operation
        Optional<User> user = userService.findById(userId);  // Find the user by ID

        // Check if the user is found
        if (user.isPresent()) {
            Employee employee = employeeService.findByUser(user.get());  // Find the employee by user
            if (employee != null) {
                logger.info("Found employee for user with ID: {}", userId);  // Log success
                return ResponseEntity.ok(employee);  // Return the employee
            } else {
                logger.warn("Employee not found for user with ID: {}", userId);  // Log warning
                return ResponseEntity.notFound().build();  // Return 404 response
            }
        } else {
            logger.warn("User with ID {} not found", userId);  // Log warning if user not found
            return ResponseEntity.notFound().build();  // Return 404 response
        }
    }
}

package Job.Portal.System.service;

import Job.Portal.System.model.Employee;
import Job.Portal.System.model.User;
import Job.Portal.System.repository.EmployeeRepository;
import Job.Portal.System.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    // Inject the EmployeeRepository bean
    @Autowired
    private EmployeeRepository employeeRepository;

    /*
     * Method to register a new employee
     * This method saves the employee object to the repository and returns the saved employee
     */
    @Override
    public Employee registerEmployee(Employee employee) {
        return employeeRepository.save(employee);  // Save and return the registered employee.
    }

    /*
     * Method to update an employee's profile
     * This method updates the employee's profile by saving the changes to the repository
     */
    @Override
    public Employee updateEmployeeProfile(Employee employee) {
        return employeeRepository.save(employee);  // Save and return the updated employee profile.
    }

    /*
     * Method to find an employee by their associated user
     * This method retrieves an employee from the repository using the associated user object
     */
    @Override
    public Employee findByUser(User user) {
        return employeeRepository.findByUser(user);  // Find and return the employee associated with the given user.
    }
}

package Job.Portal.System.repository;

import Job.Portal.System.model.Employee;
import Job.Portal.System.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository interface for {@link Employee} entity.
 * Provides methods to interact with the Employee data source.
 */
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    /**
     * Find an employee by their associated user.
     *
     * @param user the user associated with the employee
     * @return the employee associated with the given user
     */
    Employee findByUser(User user);
}

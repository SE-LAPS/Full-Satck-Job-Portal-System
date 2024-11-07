package Job.Portal.System.repository;

import Job.Portal.System.model.Resume;
import Job.Portal.System.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Repository interface for accessing and managing Resume entities in the database.
 * Provides methods for CRUD operations and custom queries related to Resume entities.
 */
@Repository
public interface ResumeRepository extends JpaRepository<Resume, Long> {

    /**
     * Retrieves a list of resumes associated with a specific user.
     *
     * @param user The user whose resumes are to be retrieved.
     * @return A list of resumes associated with the specified user.
     */
    List<Resume> findByUser(User user); // Custom query method to find resumes by user
}

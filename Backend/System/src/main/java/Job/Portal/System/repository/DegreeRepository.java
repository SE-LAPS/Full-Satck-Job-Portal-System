package Job.Portal.System.repository;

import Job.Portal.System.model.Resume;
import Job.Portal.System.model.Degree;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Repository interface for handling CRUD operations related to Degree entities.
 * Extends JpaRepository to provide standard data access methods.
 */
@Repository
public interface DegreeRepository extends JpaRepository<Degree, Long> {

    /**
     * Finds a list of degrees associated with a given resume.
     *
     * @param resume The resume for which to find degrees.
     * @return A list of Degree entities associated with the specified resume.
     */
    List<Degree> findByResume(Resume resume);  // Method to find degrees by resume
}

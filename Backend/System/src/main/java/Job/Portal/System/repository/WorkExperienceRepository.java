package Job.Portal.System.repository;

import Job.Portal.System.model.Resume;
import Job.Portal.System.model.WorkExperience;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Repository interface for handling CRUD operations related to WorkExperience entities.
 * Extends JpaRepository to provide standard data access methods for WorkExperience.
 */
@Repository
public interface WorkExperienceRepository extends JpaRepository<WorkExperience, Long> {

    /**
     * Finds a list of work experiences associated with a given resume.
     *
     * @param resume The resume for which to find work experiences.
     * @return A list of WorkExperience entities associated with the specified resume.
     */
    List<WorkExperience> findByResume(Resume resume); // Method to find work experiences by resume
}

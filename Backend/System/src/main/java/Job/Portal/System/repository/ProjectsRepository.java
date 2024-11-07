package Job.Portal.System.repository;

import Job.Portal.System.model.Resume;
import Job.Portal.System.model.Projects;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Repository interface for handling CRUD operations related to Projects entities.
 * Extends JpaRepository to provide standard data access methods for Projects.
 */
@Repository
public interface ProjectsRepository extends JpaRepository<Projects, Long> {

    /**
     * Finds a list of projects associated with a given resume.
     *
     * @param resume The resume for which to find projects.
     * @return A list of Projects entities associated with the specified resume.
     */
    List<Projects> findByResume(Resume resume); // Method to find projects by resume
}

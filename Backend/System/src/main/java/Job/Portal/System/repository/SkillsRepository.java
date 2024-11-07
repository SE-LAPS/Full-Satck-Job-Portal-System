package Job.Portal.System.repository;

import Job.Portal.System.model.Skills;
import Job.Portal.System.model.Resume;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Repository interface for handling CRUD operations related to Skills entities.
 * Extends JpaRepository to provide standard data access methods for Skills.
 */
@Repository
public interface SkillsRepository extends JpaRepository<Skills, Long> {

    /**
     * Finds a list of skills associated with a given resume.
     *
     * @param resume The resume for which to find skills.
     * @return A list of Skills entities associated with the specified resume.
     */
    List<Skills> findByResume(Resume resume); // Method to find skills by resume
}

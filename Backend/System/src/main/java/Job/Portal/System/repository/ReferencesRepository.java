package Job.Portal.System.repository;

import Job.Portal.System.model.Resume;
import Job.Portal.System.model.References;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Repository interface for handling CRUD operations related to References entities.
 * Extends JpaRepository to provide standard data access methods for References.
 */
@Repository
public interface ReferencesRepository extends JpaRepository<References, Long> {

    /**
     * Finds a list of references associated with a given resume.
     *
     * @param resume The resume for which to find references.
     * @return A list of References entities associated with the specified resume.
     */
    List<References> findByResume(Resume resume); // Method to find references by resume
}

package Job.Portal.System.repository;

import Job.Portal.System.model.Resume;
import Job.Portal.System.model.Links;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Repository interface for handling CRUD operations related to Links entities.
 * Extends JpaRepository to provide standard data access methods.
 */
@Repository
public interface LinksRepository extends JpaRepository<Links, Long> {

    /**
     * Finds a list of links associated with a given resume.
     *
     * @param resume The resume for which to find links.
     * @return A list of Links entities associated with the specified resume.
     */
    List<Links> findByResume(Resume resume); // Method to find links by resume
}

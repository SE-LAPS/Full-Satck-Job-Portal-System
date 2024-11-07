package Job.Portal.System.repository;

import Job.Portal.System.model.JobPosition;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repository interface for managing job positions in the database.
 * Extends JpaRepository to provide CRUD operations.
 */
public interface JobPositionRepository extends JpaRepository<JobPosition, Long> {
}
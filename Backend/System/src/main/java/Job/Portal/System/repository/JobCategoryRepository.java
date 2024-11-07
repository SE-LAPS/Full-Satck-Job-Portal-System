package Job.Portal.System.repository;

import Job.Portal.System.model.JobCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Repository interface for {@link JobCategory} entity.
 * Provides methods to interact with the JobCategory data source.
 */
@Repository
public interface JobCategoryRepository extends JpaRepository<JobCategory, Long> {
    /**
     * Find a job category by its name.
     *
     * @param name the name of the job category
     * @return the job category with the given name
     */
    JobCategory findByName(String name);
}

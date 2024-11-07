package Job.Portal.System.repository;

import Job.Portal.System.model.Employee;
import Job.Portal.System.model.Job;
import Job.Portal.System.model.JobCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Repository interface for {@link Job} entity.
 * Provides methods to interact with the Job data source.
 */
@Repository
public interface JobRepository extends JpaRepository<Job, Long> {
    /**
     * Find all jobs offered by a specific company.
     *
     * @param company the company offering the jobs
     * @return a list of jobs offered by the specified company
     */
    List<Job> findByCompany(Employee company);

    /**
     * Find all jobs in a specific category.
     *
     * @param category the category of the jobs
     * @return a list of jobs in the specified category
     */
    List<Job> findByCategory(JobCategory category);
}

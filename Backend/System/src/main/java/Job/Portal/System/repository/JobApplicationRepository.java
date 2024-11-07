package Job.Portal.System.repository;

import Job.Portal.System.model.Job;
import Job.Portal.System.model.JobApplication;
import Job.Portal.System.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Repository interface for {@link JobApplication} entity.
 * Provides methods to interact with the JobApplication data source.
 */
@Repository
public interface JobApplicationRepository extends JpaRepository<JobApplication, Long> {
    /**
     * Find all job applications by the job seeker.
     *
     * @param jobSeeker the user who applied for the job
     * @return a list of job applications made by the job seeker
     */
    List<JobApplication> findByJobSeeker(User jobSeeker);

    /**
     * Find all job applications for a specific job.
     *
     * @param job the job for which applications are to be found
     * @return a list of job applications for the specified job
     */
    List<JobApplication> findByJob(Job job);
}

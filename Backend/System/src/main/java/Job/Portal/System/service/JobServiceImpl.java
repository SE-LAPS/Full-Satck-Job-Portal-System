package Job.Portal.System.service;

import Job.Portal.System.model.Job;
import Job.Portal.System.model.Employee;
import Job.Portal.System.model.JobCategory;
import Job.Portal.System.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class JobServiceImpl implements JobService {

    // Inject the JobRepository bean
    @Autowired
    private JobRepository jobRepository;

    /*
     * Method to add a new job
     * This method saves the provided job object to the repository and returns the saved job.
     */
    @Override
    public Job addJob(Job job) {
        return jobRepository.save(job);  // Save and return the new job.
    }

    /*
     * Method to retrieve jobs by the company (Employee)
     * This method finds jobs by the given company (Employee) and returns them as a list.
     */
    @Override
    public List<Job> getJobsByCompany(Employee company) {
        return jobRepository.findByCompany(company);  // Return a list of jobs for the given company.
    }

    /*
     * Method to retrieve all jobs
     * This method retrieves all job entries from the repository and returns them as a list.
     */
    @Override
    public List<Job> getAllJobs() {
        return jobRepository.findAll();  // Return a list of all jobs.
    }

    /*
     * Method to search jobs based on a keyword in the title or description
     * This method filters jobs that contain the keyword in their title or description,
     * ignoring case differences, and returns the matching jobs as a list.
     */
    @Override
    public List<Job> searchJobs(String keyword) {
        return jobRepository.findAll().stream()
                .filter(job -> job.getTitle().toLowerCase().contains(keyword.toLowerCase())  // Match title with keyword.
                        || job.getDescription().toLowerCase().contains(keyword.toLowerCase()))  // Match description with keyword.
                .collect(Collectors.toList());  // Collect and return the list of matching jobs.
    }

    /*
     * Method to retrieve jobs by their category
     * This method finds jobs by the given category and returns them as a list.
     */
    @Override
    public List<Job> getJobsByCategory(JobCategory category) {
        return jobRepository.findByCategory(category);  // Return a list of jobs for the given category.
    }

    /*
     * Method to find a job by its ID
     * This method retrieves a job from the repository using its ID.
     * It returns an Optional containing the job if found, or an empty Optional if not.
     */
    @Override
    public Optional<Job> findById(Long id) {
        return jobRepository.findById(id);  // Find and return the job by ID, wrapped in an Optional.
    }
}

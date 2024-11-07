package Job.Portal.System.service;

import Job.Portal.System.model.JobCategory;
import Job.Portal.System.repository.JobCategoryRepository;
import Job.Portal.System.service.JobCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobCategoryServiceImpl implements JobCategoryService {

    // Inject the JobCategoryRepository bean
    @Autowired
    private JobCategoryRepository jobCategoryRepository;

    /*
     * Method to add a new job category
     * This method saves the provided job category object to the repository
     * and returns the saved job category.
     */
    @Override
    public JobCategory addJobCategory(JobCategory jobCategory) {
        return jobCategoryRepository.save(jobCategory);  // Save and return the new job category.
    }

    /*
     * Method to update an existing job category
     * This method updates the job category in the repository and returns the updated category.
     */
    @Override
    public JobCategory updateJobCategory(JobCategory jobCategory) {
        return jobCategoryRepository.save(jobCategory);  // Save and return the updated job category.
    }

    /*
     * Method to get all job categories
     * This method retrieves all job categories from the repository and returns them as a list.
     */
    @Override
    public List<JobCategory> getAllJobCategories() {
        return jobCategoryRepository.findAll();  // Return a list of all job categories.
    }

    /*
     * Method to delete a job category by its ID
     * This method deletes the job category with the specified ID from the repository.
     */
    @Override
    public void deleteJobCategory(Long id) {
        jobCategoryRepository.deleteById(id);  // Delete the job category by ID.
    }

    /*
     * Method to find a job category by its ID
     * This method retrieves a job category from the repository using its ID.
     * If the category is not found, it returns null.
     */
    @Override
    public JobCategory findById(Long id) {
        return jobCategoryRepository.findById(id).orElse(null);  // Find and return the job category by ID, or return null if not found.
    }
}

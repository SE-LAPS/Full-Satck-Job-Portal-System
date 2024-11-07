package Job.Portal.System.controller;

import Job.Portal.System.model.Job;
import Job.Portal.System.model.Employee;
import Job.Portal.System.model.JobCategory;
import Job.Portal.System.model.User;
import Job.Portal.System.service.JobService;
import Job.Portal.System.service.EmployeeService;
import Job.Portal.System.service.JobCategoryService;
import Job.Portal.System.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing job-related operations in the job portal system.
 * Provides endpoints for adding jobs, retrieving jobs by company, category, or search keyword,
 * and fetching all jobs.
 */
@RestController
@RequestMapping("/api/jobs")
public class JobController {

    // Service to manage job-related operations
    @Autowired
    private JobService jobService;

    // Service to manage employee-related operations
    @Autowired
    private EmployeeService employeeService;

    // Service to manage job category-related operations
    @Autowired
    private JobCategoryService jobCategoryService;

    // Service to manage user-related operations
    @Autowired
    private UserService userService;

    /**
     * Adds a new job to the system.
     *
     * @param job The job details to be added.
     * @return The added job wrapped in a ResponseEntity.
     */
    @PostMapping
    public ResponseEntity<Job> addJob(@RequestBody Job job) {
        // Call the service to add a new job
        Job newJob = jobService.addJob(job);
        // Return the added job with an HTTP OK status
        return ResponseEntity.ok(newJob);
    }

    /**
     * Retrieves a list of jobs posted by a specific company.
     *
     * @param companyId The ID of the company.
     * @return A list of jobs or a 404 Not Found status if the company is not found.
     */
    @GetMapping("/company/{companyId}")
    public ResponseEntity<List<Job>> getJobsByCompany(@PathVariable Long companyId) {
        // Find the user (company) by company ID
        Optional<User> userOptional = userService.findByUsername(companyId.toString());

        // Check if the user (company) exists
        if (userOptional.isPresent()) {
            // Find the company (employee) associated with the user
            Employee company = employeeService.findByUser(userOptional.get());
            if (company != null) {
                // Retrieve the list of jobs posted by the company
                List<Job> jobs = jobService.getJobsByCompany(company);
                // Return the list of jobs with an HTTP OK status
                return ResponseEntity.ok(jobs);
            }
        }
        // Return a 404 Not Found status if the company is not found
        return ResponseEntity.notFound().build();
    }

    /**
     * Retrieves a list of all jobs in the system.
     *
     * @return A list of all jobs wrapped in a ResponseEntity.
     */
    @GetMapping
    public ResponseEntity<List<Job>> getAllJobs() {
        // Retrieve the list of all jobs
        List<Job> jobs = jobService.getAllJobs();
        // Return the list of jobs with an HTTP OK status
        return ResponseEntity.ok(jobs);
    }

    /**
     * Searches for jobs based on a keyword.
     *
     * @param keyword The search keyword.
     * @return A list of jobs that match the keyword wrapped in a ResponseEntity.
     */
    @GetMapping("/search")
    public ResponseEntity<List<Job>> searchJobs(@RequestParam String keyword) {
        // Search for jobs using the provided keyword
        List<Job> jobs = jobService.searchJobs(keyword);
        // Return the list of matching jobs with an HTTP OK status
        return ResponseEntity.ok(jobs);
    }

    /**
     * Retrieves a list of jobs under a specific category.
     *
     * @param categoryId The ID of the job category.
     * @return A list of jobs under the category or a 404 Not Found status if the category is not found.
     */
    @GetMapping("/category/{categoryId}")
    public ResponseEntity<List<Job>> getJobsByCategory(@PathVariable Long categoryId) {
        // Find the job category by ID
        JobCategory category = jobCategoryService.findById(categoryId);

        // Check if the category exists
        if (category != null) {
            // Retrieve the list of jobs under the specified category
            List<Job> jobs = jobService.getJobsByCategory(category);
            // Return the list of jobs with an HTTP OK status
            return ResponseEntity.ok(jobs);
        }
        // Return a 404 Not Found status if the category is not found
        return ResponseEntity.notFound().build();
    }
}

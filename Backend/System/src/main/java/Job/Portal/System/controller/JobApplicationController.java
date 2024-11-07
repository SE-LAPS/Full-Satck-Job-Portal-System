package Job.Portal.System.controller;

import Job.Portal.System.model.JobApplication;
import Job.Portal.System.model.User;
import Job.Portal.System.model.Job;
import Job.Portal.System.service.JobApplicationService;
import Job.Portal.System.service.UserService;
import Job.Portal.System.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/job-applications")
public class JobApplicationController {

    // Logger for logging purposes
    private static final Logger logger = LoggerFactory.getLogger(JobApplicationController.class);

    // Injecting JobApplicationService dependency
    @Autowired
    private JobApplicationService jobApplicationService;

    // Injecting UserService dependency
    @Autowired
    private UserService userService;

    // Injecting JobService dependency
    @Autowired
    private JobService jobService;

    /*
     * Apply for a job
     * This method allows a user to apply for a job by submitting a job application.
     */
    @PostMapping
    public ResponseEntity<JobApplication> applyForJob(@RequestBody JobApplication jobApplication) {
        JobApplication newJobApplication = jobApplicationService.applyForJob(jobApplication);  // Apply for the job
        return ResponseEntity.ok(newJobApplication);  // Return the newly created job application
    }

    /*
     * Get job applications by job seeker ID
     * This method retrieves all job applications submitted by a specific job seeker.
     */
    @GetMapping("/job-seeker/{jobSeekerId}")
    public ResponseEntity<List<JobApplication>> getJobApplicationsByJobSeeker(@PathVariable Long jobSeekerId) {
        logger.info("Fetching job applications for job seeker with ID: {}", jobSeekerId);  // Log the operation
        Optional<User> jobSeeker = userService.findById(jobSeekerId);  // Find the job seeker by ID

        // Check if the job seeker is found
        if (jobSeeker.isPresent()) {
            List<JobApplication> jobApplications = jobApplicationService.getJobApplicationsByJobSeeker(jobSeeker.get());  // Get job applications
            logger.info("Found {} job applications for job seeker with ID: {}", jobApplications.size(), jobSeekerId);  // Log success
            return ResponseEntity.ok(jobApplications);  // Return the list of job applications
        } else {
            logger.warn("Job seeker with ID {} not found", jobSeekerId);  // Log warning if job seeker not found
            return ResponseEntity.notFound().build();  // Return 404 response
        }
    }

    /*
     * Get job applications by job ID
     * This method retrieves all job applications submitted for a specific job.
     */
    @GetMapping("/job/{jobId}")
    public ResponseEntity<List<JobApplication>> getJobApplicationsByJob(@PathVariable Long jobId) {
        Optional<Job> job = jobService.findById(jobId);  // Find the job by ID

        // Check if the job is found
        if (job.isPresent()) {
            List<JobApplication> jobApplications = jobApplicationService.getJobApplicationsByJob(job.get());  // Get job applications
            return ResponseEntity.ok(jobApplications);  // Return the list of job applications
        }
        return ResponseEntity.notFound().build();  // Return 404 response if job not found
    }

    /*
     * Get all job applications
     * This method retrieves all job applications submitted in the system.
     */
    @GetMapping
    public ResponseEntity<List<JobApplication>> getAllJobApplications() {
        logger.info("Fetching all job applications");  // Log the operation
        List<JobApplication> jobApplications = jobApplicationService.getAllJobApplications();  // Get all job applications
        logger.info("Found {} job applications", jobApplications.size());  // Log success
        return ResponseEntity.ok(jobApplications);  // Return the list of all job applications
    }

    /*
     * Update job application status
     * This method updates the status of a specific job application.
     */
    @PutMapping("/{id}/status")
    public ResponseEntity<JobApplication> updateJobApplicationStatus(@PathVariable Long id, @RequestBody JobApplication.Status status) {
        JobApplication updatedJobApplication = jobApplicationService.updateJobApplicationStatus(id, status);  // Update job application status
        return updatedJobApplication != null ? ResponseEntity.ok(updatedJobApplication) : ResponseEntity.notFound().build();  // Return updated application or 404 if not found
    }
}

package Job.Portal.System.controller;

import Job.Portal.System.model.JobCategory;
import Job.Portal.System.service.JobCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/job-categories")
public class JobCategoryController {

    // Injecting JobCategoryService dependency
    @Autowired
    private JobCategoryService jobCategoryService;

    /*
     * Add a new job category
     * This method adds a new job category to the system.
     */
    @PostMapping
    public ResponseEntity<JobCategory> addJobCategory(@RequestBody JobCategory jobCategory) {
        JobCategory newJobCategory = jobCategoryService.addJobCategory(jobCategory);  // Add new job category
        return ResponseEntity.ok(newJobCategory);  // Return the newly added job category
    }

    /*
     * Update an existing job category
     * This method updates the details of an existing job category.
     */
    @PutMapping("/{id}")
    public ResponseEntity<JobCategory> updateJobCategory(@PathVariable Long id, @RequestBody JobCategory jobCategory) {
        jobCategory.setId(id);  // Set the ID of the job category to be updated
        JobCategory updatedJobCategory = jobCategoryService.updateJobCategory(jobCategory);  // Update job category
        return ResponseEntity.ok(updatedJobCategory);  // Return the updated job category
    }

    /*
     * Get all job categories
     * This method retrieves all job categories available in the system.
     */
    @GetMapping
    public ResponseEntity<List<JobCategory>> getAllJobCategories() {
        List<JobCategory> jobCategories = jobCategoryService.getAllJobCategories();  // Get all job categories
        return ResponseEntity.ok(jobCategories);  // Return the list of job categories
    }

    /*
     * Delete a job category
     * This method deletes a specific job category by its ID.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJobCategory(@PathVariable Long id) {
        jobCategoryService.deleteJobCategory(id);  // Delete job category by ID
        return ResponseEntity.noContent().build();  // Return no content response (204)
    }
}

package Job.Portal.System.controller;

import Job.Portal.System.model.*;
import Job.Portal.System.service.ResumeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/resumes")
@RequiredArgsConstructor
public class ResumeController {

    // Service layer dependency for handling resume-related operations
    private final ResumeService resumeService;

    /**
     * Adds a new resume for the authenticated user.
     *
     * @param resume    The resume details to be added.
     * @param principal The currently authenticated user's principal.
     * @return The created Resume object.
     */
    @PostMapping
    public ResponseEntity<Resume> addResume(@RequestBody Resume resume, Principal principal) {
        // Delegate to the service layer to add the resume
        Resume createdResume = resumeService.addResume(resume, principal.getName());
        // Return the created resume in the response
        return ResponseEntity.ok(createdResume);
    }

    /**
     * Retrieves all resumes associated with the authenticated user.
     *
     * @param principal The currently authenticated user's principal.
     * @return A list of the user's resumes.
     */
    @GetMapping("/my")
    public ResponseEntity<List<Resume>> getMyResumes(Principal principal) {
        // Fetch resumes for the current user from the service layer
        List<Resume> resumes = resumeService.getResumesByUser(principal.getName());
        // Return the list of resumes in the response
        return ResponseEntity.ok(resumes);
    }

    /**
     * Retrieves all work experiences associated with a specific resume.
     *
     * @param resumeId The ID of the resume.
     * @return A list of work experiences associated with the resume.
     */
    @GetMapping("/{resumeId}/work-experiences")
    public ResponseEntity<List<WorkExperience>> getWorkExperiences(@PathVariable Long resumeId) {
        // Fetch work experiences for the specified resume from the service layer
        List<WorkExperience> workExperiences = resumeService.getWorkExperiencesByResume(resumeId);
        // Return the list of work experiences in the response
        return ResponseEntity.ok(workExperiences);
    }

    /**
     * Retrieves all skills associated with a specific resume.
     *
     * @param resumeId The ID of the resume.
     * @return A list of skills associated with the resume.
     */
    @GetMapping("/{resumeId}/skills")
    public ResponseEntity<List<Skills>> getSkills(@PathVariable Long resumeId) {
        // Fetch skills for the specified resume from the service layer
        List<Skills> skills = resumeService.getSkillsByResume(resumeId);
        // Return the list of skills in the response
        return ResponseEntity.ok(skills);
    }

    /**
     * Retrieves all degrees associated with a specific resume.
     *
     * @param resumeId The ID of the resume.
     * @return A list of degrees associated with the resume.
     */
    @GetMapping("/{resumeId}/degree")
    public ResponseEntity<List<Degree>> getDegree(@PathVariable Long resumeId) {
        // Fetch degrees for the specified resume from the service layer
        List<Degree> degree = resumeService.getDegreeByResume(resumeId);
        // Return the list of degrees in the response
        return ResponseEntity.ok(degree);
    }

    /**
     * Retrieves all links associated with a specific resume.
     *
     * @param resumeId The ID of the resume.
     * @return A list of links associated with the resume.
     */
    @GetMapping("/{resumeId}/links")
    public ResponseEntity<List<Links>> getLinks(@PathVariable Long resumeId) {
        // Fetch links for the specified resume from the service layer
        List<Links> links = resumeService.getLinksByResume(resumeId);
        // Return the list of links in the response
        return ResponseEntity.ok(links);
    }

    /**
     * Retrieves all projects associated with a specific resume.
     *
     * @param resumeId The ID of the resume.
     * @return A list of projects associated with the resume.
     */
    @GetMapping("/{resumeId}/projects")
    public ResponseEntity<List<Projects>> getProjects(@PathVariable Long resumeId) {
        // Fetch projects for the specified resume from the service layer
        List<Projects> projects = resumeService.getProjectsByResume(resumeId);
        // Return the list of projects in the response
        return ResponseEntity.ok(projects);
    }

    /**
     * Retrieves all references associated with a specific resume.
     *
     * @param resumeId The ID of the resume.
     * @return A list of references associated with the resume.
     */
    @GetMapping("/{resumeId}/references")
    public ResponseEntity<List<References>> getReferences(@PathVariable Long resumeId) {
        // Fetch references for the specified resume from the service layer
        List<References> references = resumeService.getReferencesByResume(resumeId);
        // Return the list of references in the response
        return ResponseEntity.ok(references);
    }
}

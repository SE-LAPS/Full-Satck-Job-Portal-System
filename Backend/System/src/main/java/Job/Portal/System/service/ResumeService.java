package Job.Portal.System.service;

import Job.Portal.System.model.*;
import Job.Portal.System.repository.*;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.List;

/**
 * Service class for managing resumes and associated entities such as work experience,
 * skills, degrees, links, projects, and references.
 */
@Service
public class ResumeService {

    @Autowired
    private UserRepository userRepository; // Repository for accessing user data

    @Autowired
    private ResumeRepository resumeRepository; // Repository for accessing resume data

    @Autowired
    private WorkExperienceRepository workExperienceRepository; // Repository for accessing work experience data

    @Autowired
    private SkillsRepository skillsRepository; // Repository for accessing skills data

    @Autowired
    private DegreeRepository degreeRepository; // Repository for accessing degree data

    @Autowired
    private LinksRepository linksRepository; // Repository for accessing links data

    @Autowired
    private ProjectsRepository projectsRepository; // Repository for accessing projects data

    @Autowired
    private ReferencesRepository referencesRepository; // Repository for accessing references data

    /**
     * Retrieves a list of resumes associated with a user identified by their email.
     *
     * @param email The email of the user whose resumes are to be retrieved.
     * @return A list of resumes associated with the specified user.
     * @throws UsernameNotFoundException if no user is found with the given email.
     */
    public List<Resume> getResumesByUser(String email) {
        // Find the user by email, throw exception if not found
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        // Return the list of resumes associated with the user
        return resumeRepository.findByUser(user);
    }

    /**
     * Adds a new resume to a user identified by their username.
     *
     * @param resume   The resume to be added.
     * @param username The username of the user to whom the resume is to be added.
     * @return The saved resume entity.
     * @throws UsernameNotFoundException if no user is found with the given username.
     */
    public Resume addResume(Resume resume, String username) {
        // Find the user by username, throw exception if not found
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        // Associate the resume with the user
        resume.setUser(user);
        // Save and return the resume entity
        return resumeRepository.save(resume);
    }

    /**
     * Retrieves a list of work experiences associated with a specific resume.
     *
     * @param resumeId The ID of the resume whose work experiences are to be retrieved.
     * @return A list of work experiences associated with the specified resume.
     * @throws EntityNotFoundException if no resume is found with the given ID.
     */
    public List<WorkExperience> getWorkExperiencesByResume(Long resumeId) {
        // Find the resume by ID, throw exception if not found
        Resume resume = resumeRepository.findById(resumeId)
                .orElseThrow(() -> new EntityNotFoundException("Resume not found"));
        // Return the list of work experiences associated with the resume
        return workExperienceRepository.findByResume(resume);
    }

    /**
     * Retrieves a list of skills associated with a specific resume.
     *
     * @param resumeId The ID of the resume whose skills are to be retrieved.
     * @return A list of skills associated with the specified resume.
     * @throws EntityNotFoundException if no resume is found with the given ID.
     */
    public List<Skills> getSkillsByResume(Long resumeId) {
        // Find the resume by ID, throw exception if not found
        Resume resume = resumeRepository.findById(resumeId)
                .orElseThrow(() -> new EntityNotFoundException("Resume not found"));
        // Return the list of skills associated with the resume
        return skillsRepository.findByResume(resume);
    }

    /**
     * Retrieves a list of degrees associated with a specific resume.
     *
     * @param resumeId The ID of the resume whose degrees are to be retrieved.
     * @return A list of degrees associated with the specified resume.
     * @throws EntityNotFoundException if no resume is found with the given ID.
     */
    public List<Degree> getDegreeByResume(Long resumeId) {
        // Find the resume by ID, throw exception if not found
        Resume resume = resumeRepository.findById(resumeId)
                .orElseThrow(() -> new EntityNotFoundException("Resume not found"));
        // Return the list of degrees associated with the resume
        return degreeRepository.findByResume(resume);
    }

    /**
     * Retrieves a list of links associated with a specific resume.
     *
     * @param resumeId The ID of the resume whose links are to be retrieved.
     * @return A list of links associated with the specified resume.
     * @throws EntityNotFoundException if no resume is found with the given ID.
     */
    public List<Links> getLinksByResume(Long resumeId) {
        // Find the resume by ID, throw exception if not found
        Resume resume = resumeRepository.findById(resumeId)
                .orElseThrow(() -> new EntityNotFoundException("Resume not found"));
        // Return the list of links associated with the resume
        return linksRepository.findByResume(resume);
    }

    /**
     * Retrieves a list of projects associated with a specific resume.
     *
     * @param resumeId The ID of the resume whose projects are to be retrieved.
     * @return A list of projects associated with the specified resume.
     * @throws EntityNotFoundException if no resume is found with the given ID.
     */
    public List<Projects> getProjectsByResume(Long resumeId) {
        // Find the resume by ID, throw exception if not found
        Resume resume = resumeRepository.findById(resumeId)
                .orElseThrow(() -> new EntityNotFoundException("Resume not found"));
        // Return the list of projects associated with the resume
        return projectsRepository.findByResume(resume);
    }

    /**
     * Retrieves a list of references associated with a specific resume.
     *
     * @param resumeId The ID of the resume whose references are to be retrieved.
     * @return A list of references associated with the specified resume.
     * @throws EntityNotFoundException if no resume is found with the given ID.
     */
    public List<References> getReferencesByResume(Long resumeId) {
        // Find the resume by ID, throw exception if not found
        Resume resume = resumeRepository.findById(resumeId)
                .orElseThrow(() -> new EntityNotFoundException("Resume not found"));
        // Return the list of references associated with the resume
        return referencesRepository.findByResume(resume);
    }
}

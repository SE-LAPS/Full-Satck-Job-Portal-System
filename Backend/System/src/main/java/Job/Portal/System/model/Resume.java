package Job.Portal.System.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

/**
 * Represents a resume entity in the job portal system.
 * Contains details about the user's resume including work experiences, skills,
 * education, and other relevant information.
 */
@Data
@Entity
@Table(name = "resume")
public class Resume {

    /**
     * Unique identifier for the resume.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /**
     * The name of the individual to whom the resume belongs.
     */
    private String name;

    /**
     * The position or title the individual is applying for or currently holds.
     */
    private String position;

    /**
     * A brief summary or objective statement on the resume.
     */
    private String summary;

    /**
     * The email address of the individual.
     */
    private String email;

    /**
     * The phone number of the individual.
     */
    private String phone;

    /**
     * The location (city or region) of the individual.
     */
    private String location;

    /**
     * The user to whom this resume belongs.
     * Many resumes can belong to one user.
     */
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    /**
     * List of work experiences associated with this resume.
     * Each work experience is tied to this resume.
     */
    @OneToMany(mappedBy = "resume", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<WorkExperience> workExperiences;

    /**
     * List of skills associated with this resume.
     * Each skill is tied to this resume.
     */
    @OneToMany(mappedBy = "resume", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Skills> skills;

    /**
     * List of degrees associated with this resume.
     * Each degree is tied to this resume.
     */
    @OneToMany(mappedBy = "resume", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Degree> Degree;

    /**
     * List of links associated with this resume.
     * Each link is tied to this resume.
     */
    @OneToMany(mappedBy = "resume", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Links> Links;

    /**
     * List of projects associated with this resume.
     * Each project is tied to this resume.
     */
    @OneToMany(mappedBy = "resume", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Projects> Projects;

    /**
     * List of references associated with this resume.
     * Each reference is tied to this resume.
     */
    @OneToMany(mappedBy = "resume", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<References> References;

}

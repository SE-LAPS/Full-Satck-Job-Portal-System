package Job.Portal.System.model;

import jakarta.persistence.*;
import org.hibernate.annotations.Type;

import java.time.LocalDate;

/**
 * Entity class representing a work experience associated with a resume.
 * This class maps to a table in the database where work experiences are stored.
 */
@Entity
public class WorkExperience {

    /**
     * The primary key for the WorkExperience entity.
     * This ID is auto-generated by the database.
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;  // Unique identifier for the work experience

    /**
     * The type of work experience.
     * This is an enumeration that describes the nature of the work.
     */
    @Enumerated(EnumType.STRING)
    private workType type;  // Type of work experience (e.g., FULL_TIME, PART_TIME)

    /**
     * The job title held during the work experience.
     */
    private String jobTitle;  // Title of the job (e.g., "Software Engineer")

    /**
     * The name of the company where the work experience took place.
     */
    private String company;  // Name of the company (e.g., "ABC Corp")

    /**
     * A description of the responsibilities and achievements during the work experience.
     */
    @Lob
    private String description;  // Detailed description of the job role

    /**
     * The location of the company or where the work experience took place.
     */
    private String location;  // Location of the job (e.g., "New York, NY")

    /**
     * The start date of the work experience.
     */
    private LocalDate startDate;  // Start date of the job role

    /**
     * The end date of the work experience.
     */
    private LocalDate endDate;  // End date of the job role

    /**
     * Enumeration for different types of work experiences.
     * This helps categorize the work experience into various types.
     */
    public enum workType {
        FULL_TIME, PART_TIME, SELF_EMPLOYED, FREELANCE, CONTRACT, INTERNSHIP
    }

    /**
     * Many-to-one relationship with the Resume entity.
     * This indicates that multiple work experiences can be associated with a single resume.
     */
    @ManyToOne
    @JoinColumn(name = "resume_id")
    private Resume resume;  // The resume to which this work experience is associated

    // Getters and setters
}
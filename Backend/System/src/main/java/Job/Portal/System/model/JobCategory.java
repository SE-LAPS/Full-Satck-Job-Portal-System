package Job.Portal.System.model;

import jakarta.persistence.*;
import lombok.Data;

/**
 * Represents a job category in the job portal system.
 */
@Data
@Entity
@Table(name = "job_categories")
public class JobCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;  // Unique identifier for the job category

    @Column(unique = true, nullable = false)
    private String name;  // Name of the job category
}

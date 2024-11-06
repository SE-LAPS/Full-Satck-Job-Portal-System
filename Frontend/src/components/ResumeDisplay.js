import React from 'react';

const ResumeDisplay = ({ resumeData }) => {
  return (
    <div>
      <h2>{resumeData.name}</h2>
      <p><strong>Position:</strong> {resumeData.position}</p>
      <p><strong>Email:</strong> {resumeData.email}</p>
      <p><strong>Phone:</strong> {resumeData.phone}</p>
      <p><strong>Location:</strong> {resumeData.location}</p>
      <p><strong>Summary:</strong> {resumeData.summary}</p>

      <h3>Skills</h3>
      <ul>
        {resumeData.skills.map((skill, index) => (
          <li key={index}>
            {skill.name} ({skill.years} years)
          </li>
        ))}
      </ul>

      <h3>Work Experience</h3>
      <ul>
        {resumeData.workExperiences.map((work, index) => (
          <li key={index}>
            <strong>{work.jobTitle}</strong> at {work.company} ({work.type})
            <br />
            {work.description}
            <br />
            Location: {work.location}
            <br />
            Duration: {work.startDate} - {work.endDate}
          </li>
        ))}
      </ul>

      <h3>Education</h3>
      <ul>
        {resumeData.degree.map((edu, index) => (
          <li key={index}>
            <strong>{edu.degree}</strong> from {edu.school} ({edu.gradDate})
            <br />
            Grade: {edu.grade}
          </li>
        ))}
      </ul>

      <h3>Projects</h3>
      <ul>
        {resumeData.projects.map((project, index) => (
          <li key={index}>
            <strong>{project.title}</strong>: {project.description}
            <br />
            Duration: {project.duration} months (Completed: {project.endDate})
          </li>
        ))}
      </ul>

      <h3>References</h3>
      <ul>
        {resumeData.references.map((reference, index) => (
          <li key={index}>
            <strong>{reference.fullName}</strong> - {reference.organization}
            <br />
            Contact: {reference.phone}, {reference.email}
          </li>
        ))}
      </ul>

      <h3>Links</h3>
      <ul>
        {resumeData.links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeDisplay;
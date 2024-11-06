import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, Button } from '@mui/material';
import ResumeForm from '../components/resumeForms/ResumeForm';
import SkillsForm from '../components/resumeForms/SkillsForm';
import ProjectsForm from '../components/resumeForms/ProjectsForm';
import LinksForm from '../components/resumeForms/LinksForm';
import ReferencesForm from '../components/resumeForms/ReferencesForm';
import EducationForm from '../components/resumeForms/EducationForm';
import WorkExperienceForm from '../components/resumeForms/WorkExperienceForm';
import ResumeDisplay from '../components/ResumeDisplay';

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState({
    name: '',
    position: '',
    summary: '',
    email: '',
    phone: '',
    location: '',
    skills: [],
    workExperiences: [],
    degree: [],
    links: [],
    projects: [],
    references: [],
  });

  // Mock Data
  const handleLoadMockData = () => {
    setResumeData({
      name: 'Lahiru Senavirathna',
      position: 'Senior Software Engineer',
      summary: 'Experienced software engineer with expertise in full-stack development.',
      email: 'lahirusenavirathna@gmail.com',
      phone: '+94 77 123 4567',
      location: 'Colombo, Sri Lanka',
      skills: [
        { name: 'Java', years: 5 },
        { name: 'React.js', years: 3 },
        { name: 'MySQL', years: 4 }
      ],
      workExperiences: [
        {
          type: 'FULL_TIME',
          jobTitle: 'Senior Software Engineer',
          company: 'Tech Solutions Ltd.',
          description: 'Led a team of 5 engineers in developing enterprise-level web applications using Java Spring Boot and React.js.',
          location: 'Colombo, Sri Lanka',
          startDate: '2019-01-15',
          endDate: '2023-08-30',
        },
        {
          type: 'PART_TIME',
          jobTitle: 'Freelance Developer',
          company: 'Self-Employed',
          description: 'Worked on various freelance projects including e-commerce platforms and mobile applications.',
          location: 'Remote',
          startDate: '2021-05-01',
          endDate: '2022-12-31',
        }
      ],
      degree: [
        {
          degree: 'Bachelor of Science in Computer Science',
          school: 'University of Colombo',
          gradDate: '2018-07-10',
          grade: 'First Class Honours',
        }
      ],
      links: [
        { label: 'GitHub', url: 'https://github.com/example' },
        { label: 'LinkedIn', url: 'https://linkedin.com/in/example' }
      ],
      projects: [
        {
          title: 'Job Portal System',
          description: 'Developed a full-stack job portal system using React.js for the front end and Java Spring Boot for the back end.',
          duration: 6,
          endDate: '2023-06-30',
        },
        {
          title: 'E-Commerce Platform',
          description: 'Built a scalable e-commerce platform with product management, shopping cart, and payment gateway integration.',
          duration: 4,
          endDate: '2022-09-15',
        }
      ],
      references: [
        {
          fullName: 'John Doe',
          organization: 'Tech Solutions Ltd.',
          phone: '+94 77 123 4567',
          email: 'john.doe@example.com'
        },
        {
          fullName: 'Jane Smith',
          organization: 'Freelance Client',
          phone: '+94 77 765 4321',
          email: 'jane.smith@example.com'
        }
      ]
    });
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Resume Builder
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Personal Information
            </Typography>
            <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              Skills
            </Typography>
            <SkillsForm resumeData={resumeData} setResumeData={setResumeData} />

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              Projects
            </Typography>
            <ProjectsForm resumeData={resumeData} setResumeData={setResumeData} />

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              Links
            </Typography>
            <LinksForm resumeData={resumeData} setResumeData={setResumeData} />

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              References
            </Typography>
            <ReferencesForm resumeData={resumeData} setResumeData={setResumeData} />

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              Education
            </Typography>
            <EducationForm resumeData={resumeData} setResumeData={setResumeData} />

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              Work Experience
            </Typography>
            <WorkExperienceForm resumeData={resumeData} setResumeData={setResumeData} />

            <Button variant="contained" onClick={handleLoadMockData} sx={{ mt: 4 }}>
              Load Mock Data
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Resume Preview
            </Typography>
            <ResumeDisplay resumeData={resumeData} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResumeBuilder;
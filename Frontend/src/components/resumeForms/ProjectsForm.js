import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ProjectsForm = ({ resumeData, setResumeData }) => {
  const [project, setProject] = useState({
    title: '',
    description: '',
    duration: '',
    endDate: '',
  });

  const handleAddProject = () => {
    if (!project.title || !project.description || !project.duration || !project.endDate) {
      alert('Please fill out all required fields');
      return;
    }
    setResumeData({
      ...resumeData,
      projects: [...resumeData.projects, project],
    });
    setProject({
      title: '',
      description: '',
      duration: '',
      endDate: '',
    });
  };

  const handleDeleteProject = (index) => {
    setResumeData({
      ...resumeData,
      projects: resumeData.projects.filter((_, i) => i !== index),
    });
  };

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Project Title"
            value={project.title}
            onChange={(e) => setProject({ ...project, title: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description"
            multiline
            rows={3}
            value={project.description}
            onChange={(e) => setProject({ ...project, description: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Duration (months)"
            type="number"
            value={project.duration}
            onChange={(e) => setProject({ ...project, duration: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="End Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={project.endDate}
            onChange={(e) => setProject({ ...project, endDate: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleAddProject} fullWidth>
            Add Project
          </Button>
        </Grid>
      </Grid>
      <List>
        {resumeData.projects.map((proj, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" onClick={() => handleDeleteProject(index)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={proj.title}
              secondary={
                <>
                  {proj.description}
                  <br />
                  Duration: {proj.duration} months
                  <br />
                  End Date: {proj.endDate}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </form>
  );
};

export default ProjectsForm;

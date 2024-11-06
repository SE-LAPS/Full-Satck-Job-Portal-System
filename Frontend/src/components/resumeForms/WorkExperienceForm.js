import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton, Grid, MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const WorkExperienceForm = ({ resumeData, setResumeData }) => {
  const [workExperience, setWorkExperience] = useState({
    type: '',
    jobTitle: '',
    company: '',
    description: '',
    location: '',
    startDate: '',
    endDate: '',
  });

  const handleAddWorkExperience = () => {
    if (
      !workExperience.jobTitle ||
      !workExperience.company ||
      !workExperience.startDate ||
      !workExperience.endDate ||
      !workExperience.type
    ) {
      // Handle validation if needed
      alert('Please fill out all required fields');
      return;
    }
    setResumeData({
      ...resumeData,
      workExperiences: [...resumeData.workExperiences, workExperience],
    });
    setWorkExperience({
      type: '',
      jobTitle: '',
      company: '',
      description: '',
      location: '',
      startDate: '',
      endDate: '',
    });
  };

  const handleDeleteWorkExperience = (index) => {
    setResumeData({
      ...resumeData,
      workExperiences: resumeData.workExperiences.filter((_, i) => i !== index),
    });
  };

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Job Title"
            value={workExperience.jobTitle}
            onChange={(e) => setWorkExperience({ ...workExperience, jobTitle: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Company"
            value={workExperience.company}
            onChange={(e) => setWorkExperience({ ...workExperience, company: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description"
            multiline
            rows={3}
            value={workExperience.description}
            onChange={(e) => setWorkExperience({ ...workExperience, description: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Location"
            value={workExperience.location}
            onChange={(e) => setWorkExperience({ ...workExperience, location: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Start Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={workExperience.startDate}
            onChange={(e) => setWorkExperience({ ...workExperience, startDate: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="End Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={workExperience.endDate}
            onChange={(e) => setWorkExperience({ ...workExperience, endDate: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            select
            label="Employment Type"
            value={workExperience.type}
            onChange={(e) => setWorkExperience({ ...workExperience, type: e.target.value })}
          >
            <MenuItem value="FULL_TIME">Full Time</MenuItem>
            <MenuItem value="PART_TIME">Part Time</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleAddWorkExperience} fullWidth>
            Add Work Experience
          </Button>
        </Grid>
      </Grid>
      <List>
        {resumeData.workExperiences.map((work, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" onClick={() => handleDeleteWorkExperience(index)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={`${work.jobTitle} at ${work.company} (${work.type})`}
              secondary={
                <>
                  {work.description}
                  <br />
                  Location: {work.location}
                  <br />
                  Duration: {work.startDate} - {work.endDate}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </form>
  );
};

export default WorkExperienceForm;

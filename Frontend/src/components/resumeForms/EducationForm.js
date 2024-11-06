import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const EducationForm = ({ resumeData, setResumeData }) => {
  const [education, setEducation] = useState({
    degree: '',
    school: '',
    gradDate: '',
    grade: '',
  });

  const handleAddEducation = () => {
    if (
      !education.degree ||
      !education.school ||
      !education.gradDate ||
      !education.grade
    ) {
      alert('Please fill out all required fields');
      return;
    }
    setResumeData({
      ...resumeData,
      degree: [...resumeData.degree, education],
    });
    setEducation({
      degree: '',
      school: '',
      gradDate: '',
      grade: '',
    });
  };

  const handleDeleteEducation = (index) => {
    setResumeData({
      ...resumeData,
      degree: resumeData.degree.filter((_, i) => i !== index),
    });
  };

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Degree"
            value={education.degree}
            onChange={(e) => setEducation({ ...education, degree: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="School"
            value={education.school}
            onChange={(e) => setEducation({ ...education, school: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Graduation Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={education.gradDate}
            onChange={(e) => setEducation({ ...education, gradDate: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Grade"
            value={education.grade}
            onChange={(e) => setEducation({ ...education, grade: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleAddEducation} fullWidth>
            Add Education
          </Button>
        </Grid>
      </Grid>
      <List>
        {resumeData.degree.map((edu, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" onClick={() => handleDeleteEducation(index)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={`${edu.degree} from ${edu.school}`}
              secondary={
                <>
                  Grade: {edu.grade}
                  <br />
                  Graduation Date: {edu.gradDate}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </form>
  );
};

export default EducationForm;

import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ReferencesForm = ({ resumeData, setResumeData }) => {
  const [reference, setReference] = useState({
    fullName: '',
    organization: '',
    phone: '',
    email: '',
  });

  const handleAddReference = () => {
    if (!reference.fullName || !reference.organization || !reference.phone || !reference.email) {
      alert('Please fill out all required fields');
      return;
    }

    setResumeData({
      ...resumeData,
      references: [...resumeData.references, reference],
    });

    setReference({
      fullName: '',
      organization: '',
      phone: '',
      email: '',
    });
  };

  const handleDeleteReference = (index) => {
    setResumeData({
      ...resumeData,
      references: resumeData.references.filter((_, i) => i !== index),
    });
  };

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Full Name"
            value={reference.fullName}
            onChange={(e) => setReference({ ...reference, fullName: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Organization"
            value={reference.organization}
            onChange={(e) => setReference({ ...reference, organization: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Phone"
            value={reference.phone}
            onChange={(e) => setReference({ ...reference, phone: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Email"
            value={reference.email}
            onChange={(e) => setReference({ ...reference, email: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleAddReference} fullWidth>
            Add Reference
          </Button>
        </Grid>
      </Grid>
      <List>
        {resumeData.references.map((ref, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" onClick={() => handleDeleteReference(index)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={ref.fullName}
              secondary={
                <>
                  Organization: {ref.organization}
                  <br />
                  Phone: {ref.phone}
                  <br />
                  Email: {ref.email}
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </form>
  );
};

export default ReferencesForm;

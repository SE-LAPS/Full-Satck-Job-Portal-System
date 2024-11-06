import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const LinksForm = ({ resumeData, setResumeData }) => {
  const [link, setLink] = useState({label: '', url: ''});

  const handleAddLink = () => {
    setResumeData({
      ...resumeData,
      links: [...resumeData.links, link],
    });
    setLink({label: '', url: ''});
  };

  const handleDeleteLink = (index) => {
    setResumeData({
      ...resumeData,
      links: resumeData.links.filter((_, i) => i !== index),
    });
  };

  return (
    <form>
      <TextField
        label="Label"
        value={link.label}
        onChange={(e) => setLink({ ...link, label: e.target.value })}
        fullWidth
      />
      <TextField
        label="URL"
        value={link.url}
        onChange={(e) => setLink({ ...link, url: e.target.value })}
        fullWidth
        sx={{ mt: 2 }}
      />
      <Button variant="contained" onClick={handleAddLink} sx={{ mt: 2 }} fullWidth>
        Add Link
      </Button>
      <List>
        {resumeData.links.map((link, index) => (
          <ListItem key={index} secondaryAction={
            <IconButton edge="end" onClick={() => handleDeleteLink(index)}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemText primary={`${link.label} from ${link.url}`} />
          </ListItem>
        ))}
      </List>
    </form>
  );
};

export default LinksForm;

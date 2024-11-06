import React, { useState } from 'react';
import { TextField, Button, Chip, Stack } from '@mui/material';

const SkillsForm = ({ resumeData, setResumeData }) => {
  const [skill, setSkill] = useState({ name: '', years: '' });

  const handleAddSkill = () => {
    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, skill],
    });
    setSkill({ name: '', years: '' });
  };

  const handleDeleteSkill = (skillToDelete) => {
    setResumeData({
      ...resumeData,
      skills: resumeData.skills.filter((s) => s !== skillToDelete),
    });
  };

  return (
    <form>
      <TextField
        label="Skill"
        value={skill.name}
        onChange={(e) => setSkill({ ...skill, name: e.target.value })}
        fullWidth
      />
      <TextField
        label="Years"
        type="number"
        value={skill.years}
        onChange={(e) => setSkill({ ...skill, years: e.target.value })}
        fullWidth
        sx={{ mt: 2 }}
      />
      
      <Button variant="contained" onClick={handleAddSkill} sx={{ mt: 2 }} fullWidth>
        Add Skill
      </Button>
      <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
        {resumeData.skills.map((s, index) => (
          <Chip
            key={index}
            label={`${s.name} (${s.years} y)`}
            onDelete={() => handleDeleteSkill(s)}
          />
        ))}
      </Stack>
    </form>
  );
};

export default SkillsForm;

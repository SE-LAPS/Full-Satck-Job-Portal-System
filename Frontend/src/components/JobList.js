import React, { useState } from 'react';
import { getCompanyLogo } from '../utils/getCompanyLogo';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Avatar, ListItemAvatar, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination'; 
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const JobList = ({ jobs = [], onJobSelect }) => {
  const [page, setPage] = useState(1); // State - manage current page
  const itemsPerPage = 10; // number of items per page

  // Handle - page change in pagination
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // Get - jobs for the current page
  const paginatedJobs = jobs.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="job-list-container">
      <div className="job-list">
        <Box sx={{ justifyContent: 'center', display: 'flex', flexWrap: 'wrap', maxWidth: 320, height: 690, overflowY: 'scroll' }}>
          {paginatedJobs.map(job => (
            <List key={job.id} sx={{ width: '90%', color: 'background.paper' }}>
              <Paper elevation={3}>
                {/* List item for each job */}
                <ListItemButton onClick={() => onJobSelect(job)}>
                  <ListItemAvatar>
                    {/* Display company logo */}
                    <Avatar alt={job.company} src={getCompanyLogo(job.company)} />
                  </ListItemAvatar>
                  <ListItemText 
                    primary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body1"
                          color="text.primary"
                        >
                          {job.title} {/* Job title */}
                        </Typography>
                      </React.Fragment>
                    }
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {job.jobType} {/* Job type */}
                        </Typography>
                        <br />
                        {job.company} - {job.location} {/* Company and location */}
                      </React.Fragment>
                    }
                  />
                </ListItemButton>
              </Paper>
            </List>
          ))}
        </Box>
        {/* Pagination controls */}
        <Box sx={{ justifyContent: 'center', display: 'flex', flexWrap: 'wrap', maxWidth: 320, mt: 2 }}>
          <Pagination 
            count={Math.ceil(jobs.length / itemsPerPage)} 
            page={page} 
            onChange={handlePageChange} 
          />
        </Box>
      </div>
    </div>
  );
};

export default JobList;

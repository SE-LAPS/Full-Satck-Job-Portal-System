import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import JobList from '../components/JobList';
import JobDetails from '../components/JobDetails'; 
import { jobs, jobDetails } from '../api/jobs_api'; 

import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Autocomplete } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function SearchJobs() {
  const location = useLocation();
  const { jobTitle, location: loc, jobType } = location.state || {};

  const [searchTerm, setSearchTerm] = useState(jobTitle || '');
  const [jobLocation, setJobLocation] = useState(loc || '');
  const [type, setType] = useState(jobType || '');
  const [selectedJob, setSelectedJob] = useState(null);
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const handleFindJobsClick = useCallback((e) => {
    if (e) {
      e.preventDefault();
    }
    const filtered = jobs.filter(job => 
      (job.title.toLowerCase().includes((searchTerm || '').toLowerCase())) &&
      (job.location.toLowerCase().includes((jobLocation || '').toLowerCase())) &&
      (job.jobType.toLowerCase().includes((type || '').toLowerCase()))
    );
    setFilteredJobs(filtered);
  }, [searchTerm, jobLocation, type]);

  useEffect(() => {
    if (jobTitle || loc || jobType) {
      handleFindJobsClick();
    }
  }, [jobTitle, loc, jobType, handleFindJobsClick]);

  useEffect(() => {
    // Set the first job's details as default when loading or refreshing
    if (jobs.length > 0) {
      setSelectedJob({ ...jobs[0], ...jobDetails[0] });
    }
  }, []);

  const handleJobSelect = (job) => {
    const fullJobDetails = { ...job, ...jobDetails.find(detail => detail.id === job.id) };
    setSelectedJob(fullJobDetails);
  };

  return (
    <div>
      <header>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
          <FormControl style={{margin: '0 10px' }}>
            <Stack spacing={3} direction={'row'}>
              <Autocomplete
                labelId="search"
                id="search"
                sx={{ width: 300 }}
                value={searchTerm}
                onChange={(e, value) => setSearchTerm(value)}
                options={jobs.map(job => job.title)}
                renderInput={(params) => <TextField {...params} label="Search for jobs" />}
              />
            <FormControl>
               <InputLabel id="location-label">Location</InputLabel>
                <Select
                  sx={{ width: 150 }}
                  labelId="location-label"
                  id="location"
                  value={jobLocation}
                  label="Location"
                  onChange={(e) => setJobLocation(e.target.value)}
                >
                  <MenuItem value="">
                    <em>All</em>
                  </MenuItem>
                  <MenuItem value="Colombo">Colombo</MenuItem>
                  <MenuItem value="Kandy">Kandy</MenuItem>
                  <MenuItem value="Galle">Galle</MenuItem>
                  <MenuItem value="Jaffna">Jaffna</MenuItem>
                  <MenuItem value="Negombo">Negombo</MenuItem>
                  <MenuItem value="Remote">Remote</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel id="type-labe">Type</InputLabel>
                <Select
                  sx={{ width: 150 }}
                  labelId="type-label"
                  id="type"
                  value={type}
                  label="Type"
                  onChange={(e) => setType(e.target.value)}
                >
                  <MenuItem value="">
                    <em>All</em>
                  </MenuItem>
                  <MenuItem value="Full-Time">Full-Time</MenuItem>
                  <MenuItem value="Part-Time">Part-Time</MenuItem>
                  <MenuItem value="Contract">Contract</MenuItem>
                </Select>
              </FormControl>
              <Button variant="contained" onClick={handleFindJobsClick}>Find Jobs</Button>
            </Stack>
          </FormControl>
        </div>
      </header>
      <Container maxWidth="lg">
        <h3>Jobs Found</h3>
        <main style={{ display: 'flex' }}>
          <div style={{ flex: 2 }}>
            <JobList 
              jobs={filteredJobs} 
              searchTerm={searchTerm} 
              type={type} 
              location={jobLocation} 
              onJobSelect={handleJobSelect} 
            />            
          </div>
          <div style={{ flex: 3 }}>
            {selectedJob ? <JobDetails job={selectedJob} /> : <p>Please select a job to view details</p>}
          </div> 
        </main>
      </Container>
    </div>
  );
}

export default SearchJobs;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, FormControl, InputLabel, MenuItem, Select, Button, Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../css/SearchForm.css';
import job01Image from '../assets/job-01.png';
import job02Image from '../assets/job-02.png';
import job03Image from '../assets/job-03.png';
import job04Image from '../assets/job-04.png';
import job05Image from '../assets/job-05.png';
import job06Image from '../assets/job-06.png';
import job07Image from '../assets/job-07.png';

const SearchForm = () => {
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');

  const [items, setItems] = useState([
    {
      image: job01Image,
      name: 'Hiring Without Boundaries™',
      description: 'Move Faster and Hire Smarter with a Modern, All-in-One Hiring Platform.',
    },
    {
      image: job02Image,
      name: 'Join the Next Generation of Job Hunters™',
      description: 'Upload your Video CV now and increase your chances of being found by top employers.',
    },
    {
      image: job03Image,
      name: 'Hiring Without Boundaries™',
      description: 'Move Faster and Hire Smarter with a Modern, All-in-One Hiring Platform.',
    },
    {
      image: job04Image,
      name: 'Join the Next Generation of Job Hunters™',
      description: 'Upload your Video CV now and increase your chances of being found by top employers.',
    },
    {
      image: job05Image,
      name: 'Hiring Without Boundaries™',
      description: 'Move Faster and Hire Smarter with a Modern, All-in-One Hiring Platform.',
    },
    {
      image: job06Image,
      name: 'Join the Next Generation of Job Hunters™',
      description: 'Upload your Video CV now and increase your chances of being found by top employers.',
    },
    {
      image: job07Image,
      name: 'Hiring Without Boundaries™',
      description: 'Move Faster and Hire Smarter with a Modern, All-in-One Hiring Platform.',
    },
  ]);

  const handleFindJobsClick = (e) => {
    if (e) {
      e.preventDefault();
    }
    navigate('/search', { state: { jobTitle, location, jobType } });
  };

  const handleNext = () => {
    setItems(prevItems => {
      const [first, ...rest] = prevItems;
      return [...rest, first];
    });
  };

  const handlePrev = () => {
    setItems(prevItems => {
      const last = prevItems[prevItems.length - 1];
      return [last, ...prevItems.slice(0, -1)];
    });
  };

  // Set up automatic image changing
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000); // Change image every 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="search-form">
      <div className="image-slider">
        <div className="container">
          <div className="slide">
            {items.map((item, index) => (
              <div
                key={index}
                className="item"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="content">
                  <div className="name">{item.name}</div>
                  <div className="des">{item.description}</div>
                  <button className="btn" type="button">
                    <strong>REGISTER FREE</strong>
                    <div id="container-stars">
                      <div id="stars"></div>
                    </div>
                    <div id="glow">
                      <div className="circle"></div>
                      <div className="circle"></div>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="button">
            <button className="prev" onClick={handlePrev}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button className="next" onClick={handleNext}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>

      <div className="search-fields">
        <Stack spacing={2} direction="row" justifyContent="center">
          <TextField
            label="Job Title"
            variant="outlined"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            fullWidth
          />
          <FormControl fullWidth variant="outlined">
            <InputLabel id="location-label">Location</InputLabel>
            <Select
              labelId="location-label"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              label="Location"
            >
              <MenuItem value=""><em>Location</em></MenuItem>
              <MenuItem value="Remote">Remote</MenuItem>
              <MenuItem value="Colombo">Colombo</MenuItem>
              <MenuItem value="Kandy">Kandy</MenuItem>
              <MenuItem value="Galle">Galle</MenuItem>
              <MenuItem value="Jaffna">Jaffna</MenuItem>
              <MenuItem value="Negombo">Negombo</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth variant="outlined">
            <InputLabel id="job-type-label">Job Type</InputLabel>
            <Select
              labelId="job-type-label"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              label="Job Type"
            >
              <MenuItem value=""><em>Job Type</em></MenuItem>
              <MenuItem value="Full-Time">Full-Time</MenuItem>
              <MenuItem value="Part-Time">Part-Time</MenuItem>
              <MenuItem value="Internship">Internship</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" onClick={handleFindJobsClick}>
            Search Jobs
          </Button>
        </Stack>
      </div>
    </section>
  );
};

export default SearchForm;
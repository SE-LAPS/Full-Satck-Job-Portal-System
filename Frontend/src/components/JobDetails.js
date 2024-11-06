import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jobDetails } from '../api/jobs_api'; // Mock API data for job details
import { getCompanyLogo } from '../utils/getCompanyLogo'; // Utility function to get company logo
import companyImg from '../assets/company1.jpg'; // Placeholder image for company

// Material UI components
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';

// for expand button
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const JobDetails = ({ job }) => {
  const [expanded, setExpanded] = useState(false); // State to control expand/collapse
  const navigate = useNavigate(); // Hook for navigation

  // Handler - toggles the expanded state
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // Handler - navigates to the ApplyJobs page with job details
  const handleApplyNow = () => {
    navigate('/view-job-details', { state: { job } }); // Pass job details to ApplyJobs page if needed
  };

  // Check - details are available?
  if (!job) {
    return <p>No job details available. Please select a job from the list.</p>;
  }

  // Find job details by  ID 
  const jobID = jobDetails.find(j => j.id === job.id);

  // Error -  job ID not found
  try {
    if (!jobID) {
      throw new Error('Job ID not found');
    }
  } catch (error) {
    console.log(error);
    return <p>Unable to find job details. Please try again later.</p>;
  }

  return (
    <Card sx={{ maxWidth: 780, marginBottom: 5 }}>
      <CardHeader
        avatar={
          <Avatar alt={job.company} src={getCompanyLogo(job.company)} /> // Display company logo
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon /> {/* Icon for settings */}
          </IconButton>
        }
        title={job.company} // Display company name
        subheader="September 14, 2016" // Static date, consider making dynamic if necessary
      />
      <CardMedia
        component="img"
        height="194"
        image={companyImg} // Placeholder image for company
        alt="Company Image"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {jobID.description} {/* Display job description */}
        </Typography>
        <Typography variant='h6' color="text.secondary">Responsibility:</Typography>
        <Typography variant="body2" color="text.secondary">
          {jobID.responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li> // List responsibilities
          ))}
        </Typography>
        <Typography variant='h6' color="text.secondary">Qualifications:</Typography>
        <Typography variant="body2" color="text.secondary">
          {jobID.qualifications.map((qualification, index) => (
            <li key={index}>{qualification}</li> // List qualifications
          ))}
        </Typography>
      </CardContent>
      <Button variant="contained" onClick={handleApplyNow} sx={{margin: 2}}>Apply Now</Button> {/* Button to apply for the job */}
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon /> {/* Icon to add to favorites */}
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon /> {/* Icon to share job details */}
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon /> {/* Icon to expand/collapse additional details */}
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant='h6' color="text.secondary">Our Values:</Typography>
          <Typography variant="body2" color="text.secondary">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. {/* Placeholder text */}
          </Typography>
          <Typography variant='h6' color="text.secondary">Job Benefits:</Typography>
          <Typography variant="body2" color="text.secondary">
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. {/* Placeholder text */}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default JobDetails;

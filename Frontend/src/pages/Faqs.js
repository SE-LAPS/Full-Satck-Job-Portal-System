import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: 'What is the purpose of this job portal?',
    answer: 'This job portal connects job seekers with potential employers, offering a platform to search for job opportunities and apply online.',
  },
  {
    question: 'How do I create an account?',
    answer: 'Click on the "Sign Up" button in the header, fill out the registration form with your details, and submit. You will receive a confirmation email to activate your account.',
  },
  {
    question: 'How do I post a job?',
    answer: 'Employers can post a job by logging in, navigating to the "Post a Job" section, filling out the job details, and submitting the form. Jobs will be live on the site after admin approval.',
  },
  {
    question: 'How can I contact you?',
    answer: 'You can contact us by emailing us at info@hb-tech.org.',
  },
  {
    question: 'Where can I get my receipt?',
    answer: 'You will automatically receive your receipt by email once payment is confirmed. If you did not receive it, please check your spam folder. If you still cannot find it, please contact us at info@hb-tech.org.',
  },
  {
    question: 'What kind of jobs can I find on Remote Jobs by HBTech?',
    answer: 'Remote Jobs by HBTech features a wide variety of remote job opportunities across different industries and roles. Whether you\'re looking for a position in tech, design, marketing, customer service, or any other field, you\'re likely to find suitable remote job listings on our platform.',
  },
  {
    question: 'Do you offer any resources for remote job seekers?',
    answer: 'Yes, we offer a range of resources for remote job seekers, including articles, tips, and guides on how to find and secure remote work, how to prepare for remote job interviews, and how to thrive in a remote work environment. Check out our blog for more information.',
  },
  {
    question: 'Do you offer quick Q&As for job seekers?',
    answer: 'Yes, we offer quick Q&As for job seekers on a variety of topics related to remote work, job hunting, and career development. Check out the quickbits for more information.',
  },
  {
    question: 'How can I edit a job posting?',
    answer: 'If you need to make any changes to your job posting, please contact us directly at info@hb-tech.org with the details of the edits you\'d like to make. Our team will assist you in updating your job listing as soon as possible. Please note that edits may take up to 24 hours to be reflected on the site.',
  },
  {
    question: 'Can I feature my job listing to attract more candidates?',
    answer: 'Yes, you can choose to feature your job listing for an additional fee. Featured listings are prominently displayed at the top of the job board and in our newsletter to attract more attention from qualified candidates. Please contact us at info@hb-tech.org for more information on featuring your job.',
  },
];

const Faqs = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
};

export default Faqs;
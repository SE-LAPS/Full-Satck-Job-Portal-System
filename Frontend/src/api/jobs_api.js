const jobs = [
  { id: 1, company: 'AMAZON', title: 'Fullstack Developer', location: 'Colombo', category: 'Fullstack', jobType: 'Full-Time', workStyle: 'On-Site', salary: 'LKR 150,000', jobPosted: '2024-07-20', jobExpiresIn: '30 days', educationLevel: 'Bachelors', jobLevel: 'Entry Level' },
  { id: 2, company: 'FLP', title: 'Digital Marketing', location: 'Colombo', category: 'Digital Marketing', jobType: 'Part-Time', workStyle: 'Remote', salary: 'LKR 80,000', jobPosted: '2024-07-22', jobExpiresIn: '45 days', educationLevel: 'Bachelors', jobLevel: 'Entry Level' },
  { id: 3, company: 'PAYTM', title: 'Frontend Developer', location: 'Kandy', category: 'Frontend', jobType: 'Contract', workStyle: 'Hybrid', salary: 'LKR 100,000', jobPosted: '2024-07-25', jobExpiresIn: '60 days', educationLevel: 'Bachelors', jobLevel: 'Entry Level' },
  { id: 4, company: 'TESLA', title: 'Software Engineer', location: 'Galle', category: 'Full Stack', jobType: 'Full-Time', workStyle: 'On-Site', salary: 'LKR 200,000', jobPosted: '2024-07-18', jobExpiresIn: '30 days', educationLevel: 'Bachelors', jobLevel: 'Mid Level' },
  { id: 5, company: 'ELASTIC RUN', title: 'Backend Developer', location: 'Jaffna', category: 'Backend', jobType: 'Part-Time', workStyle: 'Remote', salary: 'LKR 90,000', jobPosted: '2024-07-23', jobExpiresIn: '50 days', educationLevel: 'Bachelors', jobLevel: 'Entry Level' },
  { id: 6, company: 'TCS', title: 'Devops Engineer', location: 'Colombo', category: 'Devops', jobType: 'Full-Time', workStyle: 'On-Site', salary: 'LKR 110,000', jobPosted: '2024-07-19', jobExpiresIn: '30 days', educationLevel: 'Bachelors', jobLevel: 'Entry Level' },
  { id: 7, company: 'MYNTRA', title: 'Frontend Developer', location: 'Colombo', category: 'Frontend', jobType: 'Part-Time', workStyle: 'Hybrid', salary: 'LKR 95,000', jobPosted: '2024-07-21', jobExpiresIn: '40 days', educationLevel: 'Bachelors', jobLevel: 'Entry Level' },
  { id: 8, company: 'SYNOPSYS', title: 'Full Stack Engineer', location: 'Negombo', category: 'Fullstack', jobType: 'Full-Time', workStyle: 'On-Site', salary: 'LKR 180,000', jobPosted: '2024-07-20', jobExpiresIn: '35 days', educationLevel: 'Bachelors', jobLevel: 'Mid Level' },
  { id: 9, company: 'OPTUM', title: 'Front-End Developer', location: 'Colombo', category: 'Frontend', jobType: 'Full-Time', workStyle: 'Remote', salary: 'LKR 120,000', jobPosted: '2024-07-25', jobExpiresIn: '25 days', educationLevel: 'Bachelors', jobLevel: 'Entry Level' },
  { id: 10, company: 'INFOSYS', title: 'React Developer', location: 'Colombo', category: 'Frontend', jobType: 'Full-Time', workStyle: 'On-Site', salary: 'LKR 130,000', jobPosted: '2024-07-22', jobExpiresIn: '30 days', educationLevel: 'Bachelors', jobLevel: 'Entry Level' },
  { id: 11, company: 'TECH MAHINDRA', title: 'NodeJS Developer', location: 'Jaffna', category: 'Backend', jobType: 'Full-Time', workStyle: 'Hybrid', salary: 'LKR 140,000', jobPosted: '2024-07-24', jobExpiresIn: '40 days', educationLevel: 'Bachelors', jobLevel: 'Entry Level' },
  { id: 12, company: 'CLOUD MENTOR', title: 'Software Engineer', location: 'Galle', category: 'Full Stack', jobType: 'Full-Time', workStyle: 'On-Site', salary: 'LKR 190,000', jobPosted: '2024-07-19', jobExpiresIn: '35 days', educationLevel: 'Bachelors', jobLevel: 'Mid Level' },
  { id: 13, company: 'FLIPKART', title: 'Devops Engineer', location: 'Kandy', category: 'Devops', jobType: 'Full-Time', workStyle: 'Remote', salary: 'LKR 220,000', jobPosted: '2024-07-25', jobExpiresIn: '25 days', educationLevel: 'Bachelors', jobLevel: 'Senior Level' },
  { id: 14, company: 'COGNIZANT', title: 'Front-End Developer', location: 'Negombo', category: 'Frontend', jobType: 'Full-Time', workStyle: 'On-Site', salary: 'LKR 130,000', jobPosted: '2024-07-23', jobExpiresIn: '30 days', educationLevel: 'Bachelors', jobLevel: 'Entry Level' },
  { id: 15, company: 'IBM', title: 'Backend Developer', location: 'Colombo', category: 'Backend', jobType: 'Contract', workStyle: 'Hybrid', salary: 'LKR 100,000', jobPosted: '2024-07-20', jobExpiresIn: '45 days', educationLevel: 'Bachelors', jobLevel: 'Entry Level' }
];

const jobDetails = [
  {
    id: 1,
    description: 'We are looking for a highly skilled Fullstack Developer to join our team. You will be responsible for developing and maintaining web applications, collaborating with cross-functional teams, and ensuring the technical feasibility of UI/UX designs.',
    responsibilities: [
      'Develop and maintain web applications',
      'Collaborate with cross-functional teams',
      'Ensure technical feasibility of UI/UX designs',
      'Write clean, maintainable, and efficient code',
      'Participate in code reviews and team meetings'
    ],
    qualifications: [
      'Bachelor’s degree in Computer Science or related field',
      '3+ years of experience as a Fullstack Developer',
      'Proficient in JavaScript, HTML, CSS, and React.js',
      'Experience with Node.js and Express',
      'Strong problem-solving and communication skills'
    ]
  },
  {
    id: 2,
    description: 'As a Digital Marketing Specialist, you will be responsible for planning, implementing, and managing our digital marketing strategy. You will help to increase our online presence and improve our marketing and sales efforts.',
    responsibilities: [
      'Plan and execute digital marketing campaigns',
      'Monitor and analyze the performance of marketing campaigns',
      'Manage social media accounts',
      'Optimize content for SEO and SEM',
      'Collaborate with the sales team to create marketing strategies'
    ],
    qualifications: [
      'Bachelor’s degree in Marketing or related field',
      '2+ years of experience in digital marketing',
      'Proficient in Google Analytics and SEO tools',
      'Strong understanding of social media platforms',
      'Excellent communication and organizational skills'
    ]
  },
  {
    id: 3,
    description: 'We are looking for a Junior Frontend Developer to join our development team. You will work on the development of web applications and collaborate with senior developers to create high-quality user interfaces.',
    responsibilities: [
      'Assist in the development of web applications',
      'Work closely with senior developers',
      'Write clean and efficient code',
      'Participate in code reviews and team meetings',
      'Learn and apply new technologies'
    ],
    qualifications: [
      'Bachelor’s degree in Computer Science or related field',
      '1+ year of experience in frontend development',
      'Proficient in HTML, CSS, and JavaScript',
      'Experience with React.js is a plus',
      'Good problem-solving skills and eagerness to learn'
    ]
  },
  {
    id: 4,
    description: 'We are seeking a Software Engineer to join our team. You will be responsible for designing, developing, and maintaining software applications. You will also work with other engineers to build high-quality software solutions.',
    responsibilities: [
      'Design and develop software applications',
      'Maintain and improve existing applications',
      'Collaborate with other engineers on software projects',
      'Write clean, scalable, and maintainable code',
      'Conduct code reviews and provide feedback'
    ],
    qualifications: [
      'Bachelor’s degree in Computer Science or related field',
      '3+ years of experience in software development',
      'Proficient in Java, Python, or C++',
      'Experience with software development tools and methodologies',
      'Strong problem-solving and analytical skills'
    ]
  },
  {
    id: 5,
    description: 'We are looking for a Junior Backend Developer to assist in the development and maintenance of our backend systems. You will work with a team of developers to ensure the performance and reliability of our applications.',
    responsibilities: [
      'Assist in the development of backend systems',
      'Write clean and efficient code',
      'Collaborate with frontend developers to integrate user-facing elements',
      'Participate in code reviews and team meetings',
      'Maintain and improve existing backend applications'
    ],
    qualifications: [
      'Bachelor’s degree in Computer Science or related field',
      '1+ year of experience in backend development',
      'Proficient in Node.js, Python, or Java',
      'Experience with databases such as MySQL or MongoDB',
      'Good problem-solving skills and eagerness to learn'
    ]
  }
];

export { jobs, jobDetails };
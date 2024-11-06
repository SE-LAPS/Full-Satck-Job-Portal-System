import React from 'react';
import { Avatar, Button, Container, Grid, Paper, Typography, Divider, Box, Stack, List, ListItem, Card, CardContent, CardActions, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const mockData = {
    name: "Prasitha Samaraarachchi",
    image: "https://i.pinimg.com/originals/16/19/3e/16193eeb4e893c108f762668e9b42e78.jpg",
    title: "Software Engineer",
    location: "New York, USA",
    email: "prasitha@example.com",
    phone: "+1 123 456 7890",
    address: "123 Main Street, New York, USA",
    jobHistory: [
        { title: "Software Engineer", company: "Google", startDate: "2022", endDate: "Present" },
        { title: "Intern", company: "Microsoft", startDate: "2021", endDate: "2022" }
    ],
    acceptedJobs: [
        { company: "Google", position: "Software Engineer" }
    ],
    viewedJobs: [
        { company: "Microsoft", position: "Data Analyst" },
        { company: "Facebook", position: "Frontend Developer" }
    ],
    projects: [
        { title: "Personal Portfolio Website", description: "Built using React", imageUrl:"https://static.vecteezy.com/system/resources/thumbnails/024/354/241/small_2x/happy-girl-standing-in-creative-office-illustration-ai-generative-free-photo.jpg" },
        { title: "E-commerce Website", description: "Full-stack application with React and Node.js", imageUrl:"https://static.vecteezy.com/system/resources/thumbnails/024/354/241/small_2x/happy-girl-standing-in-creative-office-illustration-ai-generative-free-photo.jpg" }
    ]
};

function UserProfile() {
    const navigate = useNavigate();

    const handleResume = () => {
        navigate('/resume');
    };

    const handleEditProfile = () => {
        navigate('/edit_profile');
    };

    return (
        <Container maxWidth="lg" sx={{ margin: 4 }}>
            <Grid container spacing={4}>
                {/* Profile Section */}
                <Grid item xs={12} sm={4}>
                    <Card sx={{ backgroundColor: '#f5f5f5', padding: 2, borderRadius: 4 }}>
                        <CardContent>
                            <Stack spacing={2} alignItems="center">
                                <Avatar alt={mockData.name} src={mockData.image} sx={{ width: 120, height: 120 }} />
                                <Typography variant="h5" fontWeight="bold">{mockData.name}</Typography>
                                <Typography variant="subtitle1" color="textSecondary">{mockData.title}</Typography>
                                <Typography variant="body2" color="textSecondary">{mockData.location}</Typography>
                            </Stack>
                        </CardContent>
                        <CardActions sx={{ justifyContent: 'center' }}>
                            <Button variant="contained" sx={{ backgroundColor: '#007bff', borderRadius: 20, px: 4 }} onClick={handleEditProfile}>
                                Edit Profile
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

                {/* Main Content Section */}
                <Grid item xs={12} sm={8}>
                    <Paper elevation={4} sx={{ padding: 4, borderRadius: 4 }}>
                        {/* Personal Information */}
                        <Divider textAlign="left" sx={{ marginBottom: 3 }}>
                            <Typography variant="overline" sx={{ fontSize: '1rem', color: '#007bff' }}>Personal Information</Typography>
                        </Divider>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="subtitle1" fontWeight="bold">Email</Typography>
                                <Typography variant="body1">{mockData.email}</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="subtitle1" fontWeight="bold">Phone</Typography>
                                <Typography variant="body1">{mockData.phone}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="subtitle1" fontWeight="bold">Address</Typography>
                                <Typography variant="body1">{mockData.address}</Typography>
                            </Grid>
                        </Grid>

                        {/* Job History */}
                        <Divider textAlign="left" sx={{ marginY: 3 }}>
                            <Typography variant="overline" sx={{ fontSize: '1rem', color: '#007bff' }}>Job History</Typography>
                        </Divider>
                        <List>
                            {mockData.jobHistory.map((job, index) => (
                                <ListItem key={index}>{`${job.title} - ${job.company} (${job.startDate} - ${job.endDate})`}</ListItem>
                            ))}
                        </List>

                        {/* Accepted Job Applications */}
                        <Divider textAlign="left" sx={{ marginY: 3 }}>
                            <Typography variant="overline" sx={{ fontSize: '1rem', color: '#007bff' }}>Accepted Job Applications</Typography>
                        </Divider>
                        <List>
                            {mockData.acceptedJobs.map((job, index) => (
                                <ListItem key={index}>{`${job.company} - ${job.position}`}</ListItem>
                            ))}
                        </List>

                        {/* Viewed Job Applications */}
                        <Divider textAlign="left" sx={{ marginY: 3 }}>
                            <Typography variant="overline" sx={{ fontSize: '1rem', color: '#007bff' }}>Viewed Job Applications</Typography>
                        </Divider>
                        <List>
                            {mockData.viewedJobs.map((job, index) => (
                                <ListItem key={index}>{`${job.company} - ${job.position}`}</ListItem>
                            ))}
                        </List>

                        {/* Project Portfolio */}
                        <Divider textAlign="left" sx={{ marginY: 3 }}>
                            <Typography variant="overline" sx={{ fontSize: '1rem', color: '#007bff' }}>Project Portfolio</Typography>
                        </Divider>
                        <Box sx={{ display: 'flex', overflowX: 'auto', padding: 1 }}>
                            {mockData.projects.map((project, index) => (
                                <Card key={index} sx={{ minWidth: 300, marginRight: 2 }}>
                                    <CardMedia
                                        component="img"
                                        alt="Project Image"
                                        height="140"
                                        image={project.imageUrl}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" fontWeight="bold">{project.title}</Typography>
                                        <Typography variant="body2">{project.description}</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">More Details</Button>
                                    </CardActions>
                                </Card>
                            ))}
                        </Box>
                        {/* Resume Upload */}
                        <Divider textAlign="left" sx={{ marginY: 3 }}>
                            <Typography variant="overline" sx={{ fontSize: '1rem', color: '#007bff' }}>Resume</Typography>
                        </Divider>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button variant="outlined" onClick={handleResume} sx={{ color: '#007bff', borderColor: '#007bff', borderRadius: 20 }}>
                                Your Resumes
                            </Button>
                            <Button variant="outlined" component="label" sx={{ color: '#007bff', borderColor: '#007bff', borderRadius: 20 }}>
                                Upload Resume
                                <input type="file" hidden />
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default UserProfile;
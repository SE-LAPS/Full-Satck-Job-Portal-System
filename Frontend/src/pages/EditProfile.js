import React, { useState } from 'react';
import { Container, Grid, Paper, TextField, Button, Typography, Avatar, Stack, Divider, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function EditProfile() {
    const navigate = useNavigate();

    // Profile state (initial values can be loaded from props or a database)
    const [profile, setProfile] = useState({
        name: 'Prasitha Samaraarachchi',
        jobTitle: 'Software Engineer',
        location: 'New York, USA',
        email: 'john.doe@example.com',
        phone: '+1 123 456 7890',
        address: '123 Main Street, New York, USA',
    });

    // Handler for form changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit the updated profile (e.g., to a server or state management)
        console.log('Updated Profile:', profile);
        navigate('/profile'); // Redirect back to the profile page after saving
    };

    // Handle cancel button (navigate back without saving)
    const handleCancel = () => {
        navigate('/profile');
    };

    return (
        <Container maxWidth="lg">
            <Grid container spacing={4}>
                {/* Profile Picture and Name */}
                <Grid item xs={12} sm={4}>
                    <Paper sx={{ padding: 2, borderRadius: 4 }}>
                        <Stack spacing={2} alignItems="center">
                            <Avatar alt="Prasitha Samaraarachchi" src="/profile-pic.jpg" sx={{ width: 120, height: 120 }} />
                            <Typography variant="h5" fontWeight="bold">{profile.name}</Typography>
                        </Stack>
                    </Paper>
                </Grid>

                {/* Form Section */}
                <Grid item xs={12} sm={8}>
                    <Paper elevation={4} sx={{ padding: 4, borderRadius: 4 }}>
                        <form onSubmit={handleSubmit}>
                            <Typography variant="h5" sx={{ marginBottom: 2 }}>
                                Edit Profile
                            </Typography>
                            <Divider sx={{ marginBottom: 3 }} />

                            {/* Name */}
                            <TextField
                                fullWidth
                                label="Full Name"
                                name="name"
                                value={profile.name}
                                onChange={handleChange}
                                variant="outlined"
                                sx={{ marginBottom: 3 }}
                            />

                            {/* Job Title */}
                            <TextField
                                fullWidth
                                label="Job Title"
                                name="jobTitle"
                                value={profile.jobTitle}
                                onChange={handleChange}
                                variant="outlined"
                                sx={{ marginBottom: 3 }}
                            />

                            {/* Location */}
                            <TextField
                                fullWidth
                                label="Location"
                                name="location"
                                value={profile.location}
                                onChange={handleChange}
                                variant="outlined"
                                sx={{ marginBottom: 3 }}
                            />

                            {/* Email */}
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                value={profile.email}
                                onChange={handleChange}
                                variant="outlined"
                                type="email"
                                sx={{ marginBottom: 3 }}
                            />

                            {/* Phone */}
                            <TextField
                                fullWidth
                                label="Phone"
                                name="phone"
                                value={profile.phone}
                                onChange={handleChange}
                                variant="outlined"
                                sx={{ marginBottom: 3 }}
                            />

                            {/* Address */}
                            <TextField
                                fullWidth
                                label="Address"
                                name="address"
                                value={profile.address}
                                onChange={handleChange}
                                variant="outlined"
                                sx={{ marginBottom: 3 }}
                            />

                            {/* Action Buttons */}
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
                                <Button variant="outlined" color="secondary" onClick={handleCancel}>
                                    Cancel
                                </Button>
                                <Button type="submit" variant="contained" sx={{ backgroundColor: '#007bff' }}>
                                    Save Changes
                                </Button>
                            </Box>
                        </form>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default EditProfile;
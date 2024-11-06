import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { TextField, Button, Grid } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));

const UserProfileEditForm = () => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [education, setEducation] = useState('');
    const [experience, setExperience] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <TextField
                        label="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Education"
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                    />
                    <TextField
                        label="Education"
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                    />
                    <TextField
                        label="Education"
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Experience"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                    />
                    <TextField
                        label="Experience"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                    />
                    <TextField
                        label="Experience"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Button
                className={classes.button}
                variant="contained"
                color="primary"
                type="submit"
            >
                Save
            </Button>
        </form>
    );
};

export default UserProfileEditForm;
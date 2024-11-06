import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Grid } from '@material-ui/core';

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

const EmployerProfileEditForm = () => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Grid>
            </Grid>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
            >
                Save
            </Button>
        </form>
    );
};

export default EmployerProfileEditForm;
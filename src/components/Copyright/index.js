import { Link, Typography } from '@mui/material';
import React from 'react';

// import { Container } from './styles';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 3, mb: 2 }}>
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/venyustech">
                Bookdem by VenyusTECH
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Copyright;
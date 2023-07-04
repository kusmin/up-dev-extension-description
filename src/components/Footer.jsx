import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import SocialIcons from "./SocialIcons.jsx";

const Footer = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, mt: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
            <Typography variant="body1">&copy; 2023 UpDev Experience</Typography>
            <Link to="/privacy">Política de Privacidade & Termos de Uso</Link>

            <SocialIcons />
        </Box>
    )
}

export default Footer;

import React from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header.jsx';
import AboutExtension from '../components/AboutExtension.jsx';
import Footer from '../components/Footer.jsx';
import Faq from "../components/Faq.jsx";

const HomePage = () => {
    return (
        <Box sx={{ my: 4, bgcolor: '#f5f5f5', p: 3, borderRadius: 2 }}>
            <Header />
            <AboutExtension />
            <Faq />
            <Footer />
        </Box>
    );
}

export default HomePage;

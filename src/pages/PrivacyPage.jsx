import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import AccordionComponent from '../components/AccordionComponent.jsx';
import Footer from '../components/Footer.jsx';

const PrivacyPage = () => {
    return (
        <Box sx={{ my: 4, bgcolor: '#f5f5f5', p: 3, borderRadius: 2, ml:4, mr:4 }}>
            <Typography variant="h4" component="h2" gutterBottom align="center">
                Política de Privacidade e Termos de Uso
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    Voltar para a página inicial
                </Link>
            </Box>
            <AccordionComponent
                title="Termos de Uso">
                Ao usar a extensão UpDev Experience, você concorda em cumprir nossos termos de uso. A extensão é fornecida "como está" e é usada a seu próprio risco. Não nos responsabilizamos por danos ou perdas de qualquer tipo que possam surgir durante o uso da extensão. Reservamo-nos o direito de alterar esses termos a qualquer momento, então, por favor, verifique regularmente para manter-se atualizado.
            </AccordionComponent>
            <AccordionComponent
                title="Política de Privacidade">
                A extensão UpDev Experience respeita sua privacidade. A extensão não coleta, armazena, compartilha ou vende quaisquer dados pessoais. As únicas informações acessadas são as postagens públicas do blog que são exibidas na extensão. A privacidade e a segurança dos usuários são uma prioridade máxima.
            </AccordionComponent>
            <Footer />
        </Box>
    );
}

export default PrivacyPage;

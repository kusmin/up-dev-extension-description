import React from 'react';
import { Container, Typography, Box, Paper, Link } from '@mui/material';

const App = () => {
    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography variant="h2" component="h1" gutterBottom>
                    Minha Extensão para o Chrome
                </Typography>
                <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Sobre a extensão
                    </Typography>
                    <Typography variant="body1">
                        Esta extensão permite que você veja as últimas postagens do meu blog WordPress diretamente no seu navegador Chrome.
                    </Typography>
                </Paper>
                <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Termos de Uso
                    </Typography>
                    <Typography variant="body1">
                        Descreva aqui os termos de uso da sua extensão.
                    </Typography>
                </Paper>
                <Paper elevation={3} sx={{ p: 2 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Política de Privacidade
                    </Typography>
                    <Typography variant="body1">
                        Descreva aqui a política de privacidade da sua extensão.
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
}

export default App;

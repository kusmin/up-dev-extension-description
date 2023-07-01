import React from 'react';
import { Container, Typography, Box, Paper, Link, Grid, Button, Accordion, AccordionSummary, AccordionDetails, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn, GitHub } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const App = () => {
    return (
        <Container>
            <Box sx={{ my: 4, bgcolor: '#f5f5f5', p: 3, borderRadius: 2 }}>
                <Typography variant="h2" component="h1" gutterBottom align="center">
                    UpDev Experience
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom align="center">
                    Acompanhe as últimas postagens dos meus blogs <Link href="https://updev.dev.br">updev.dev.br</Link> e <Link href="https://updevblog.com">updevblog.com</Link> diretamente no seu navegador Chrome.
                </Typography>
                <Grid container justifyContent="center">
                    <Button variant="contained" color="primary">
                        Baixe a extensão
                    </Button>
                </Grid>
                <Paper elevation={3} sx={{ p: 2, mt: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Sobre a extensão
                    </Typography>
                    <Typography variant="body1">
                        UpDev Experience é uma extensão do Chrome desenvolvida para ajudar os usuários a se manterem atualizados com as últimas postagens do nosso blog WordPress. Ela oferece notificações instantâneas sobre novas postagens, juntamente com links diretos para o conteúdo, para que você nunca perca as últimas atualizações e notícias. A extensão foi desenvolvida utilizando React e Material-UI, proporcionando uma experiência de usuário rica e responsiva.
                    </Typography>
                </Paper>
                <Accordion sx={{ mt: 2 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h4">Termos de Uso</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Ao usar a extensão UpDev Experience, você concorda em cumprir nossos termos de uso. A extensão é fornecida "como está" e é usada a seu próprio risco. Não nos responsabilizamos por danos ou perdas de qualquer tipo que possam surgir durante o uso da extensão. Reservamo-nos o direito de alterar esses termos a qualquer momento, então, por favor, verifique regularmente para manter-se atualizado.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ mt: 2 }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h4">Política de Privacidade</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            A extensão UpDev Experience respeita sua privacidade. A extensão não coleta, armazena, compartilha ou vende quaisquer dados pessoais. As únicas informações acessadas são as postagens públicas do blog que são exibidas na extensão. A privacidade e a segurança dos usuários são uma prioridade máxima.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, mt: 2, bgcolor: '#f5f5f5', borderRadius: 2 }}>
                <Typography variant="body1">&copy; 2023 UpDev Experience</Typography>
                <Box>
                    <IconButton color="primary" href="https://www.facebook.com/renan.lage.54/">
                        <Facebook />
                    </IconButton>
                    <IconButton color="primary" href="https://www.instagram.com/renan.lagee/">
                        <Instagram />
                    </IconButton>
                    <IconButton color="primary" href="https://www.twitter.com/your-account">
                        <Twitter />
                    </IconButton>
                    <IconButton color="primary" href="https://www.linkedin.com/in/renan-ribeiro-b1368872/">
                        <LinkedIn />
                    </IconButton>
                    <IconButton color="primary" href="https://github.com/kusmin">
                        <GitHub />
                    </IconButton>
                </Box>
            </Box>
        </Container>
    );
}

export default App;

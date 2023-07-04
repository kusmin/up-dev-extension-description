import {Typography, Link, Grid, Button, Box} from '@mui/material';

const Header = () => {
    return (
        <Box sx={{ mt: 1, mb: 4, textAlign: 'center' }}>
            <Typography variant="h2" component="h1" gutterBottom>
                UpDev Experience
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                Acompanhe as últimas postagens dos meus blogs <Link href="https://updev.dev.br/">updev.dev.br</Link> e <Link href="https://updevblog.com">updevblog.com</Link> diretamente no seu navegador Chrome.
            </Typography>
            <Box sx={{ mt: 2 }}>
                <Grid container justifyContent="center">
                    <Button variant="contained" color="primary" href="https://chrome.google.com/webstore/detail/updev/neemallogilfcdfbcjicpknmkbdhjnmg" target="_blank" rel="noopener noreferrer">
                        Baixe a extensão
                    </Button>
                </Grid>
            </Box>
        </Box>
    )
}

export default Header;

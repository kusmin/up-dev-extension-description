import { Typography, Paper, Link } from '@mui/material';

const Support = () => {
    return (
        <Paper elevation={3} sx={{ p: 2, mt: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom>
                Suporte
            </Typography>
            <Typography variant="body1">
                Se você encontrar algum problema ao usar a extensão UpDev Experience, estamos aqui para ajudar! Para suporte, envie um e-mail para <Link href="mailto:support@updev.dev.br">support@updev.dev.br</Link>. Você também pode visitar nosso <Link href="https://updev.dev.br/support">fórum de suporte</Link> para obter ajuda e informações adicionais.
            </Typography>
        </Paper>
    )
}

export default Support;

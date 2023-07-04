import { Typography, Paper } from '@mui/material';

const Updates = () => {
    return (
        <Paper elevation={3} sx={{ p: 2, mt: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom>
                Atualizações Futuras
            </Typography>
            <Typography variant="body1">
                Estamos constantemente trabalhando para melhorar a extensão UpDev Experience. Nos próximos meses, planejamos adicionar novas funcionalidades e melhorias. Mantenha sua extensão atualizada para garantir que você esteja sempre aproveitando ao máximo o UpDev Experience!
            </Typography>
        </Paper>
    )
}

export default Updates;

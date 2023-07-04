import {Typography, Paper, Box} from '@mui/material';
import React from "react";

const AboutExtension = () => {
    return (
        <Box sx={{ mt: 4, mb: 2,
            ml: { xs: 0, sm: 4 },
            mr: { xs: 0, sm: 4 },
            p:{ xs: 0, sm: 2 }
        }}>
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Sobre a extensão
                </Typography>
                <Typography variant="body1">
                    UpDev Experience é uma extensão do Chrome desenvolvida para ajudar os usuários a se manterem atualizados com as últimas postagens do nosso blog WordPress. Ela oferece notificações instantâneas sobre novas postagens, juntamente com links diretos para o conteúdo, para que você nunca perca as últimas atualizações e notícias. A extensão foi desenvolvida utilizando React e Material-UI, proporcionando uma experiência de usuário rica e responsiva.
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                    Nosso site, updev.dev.br, é uma plataforma dedicada a compartilhar conhecimentos sobre desenvolvimento de software, incluindo tutoriais, dicas e notícias sobre as mais recentes tecnologias e tendências da indústria. Nosso objetivo é construir uma comunidade onde desenvolvedores de todos os níveis possam aprender, compartilhar e crescer juntos.
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                    A extensão UpDev Experience foi criada com o objetivo de trazer a você, de maneira mais acessível, todo o conteúdo atualizado do nosso blog. Sabemos que a informação rápida e relevante é a chave no mundo do desenvolvimento de software, e queremos que você esteja sempre um passo à frente.
                </Typography>
            </Paper>
        </Box>
    )
}

export default AboutExtension;

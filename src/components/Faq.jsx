import { Box, Paper, Typography } from "@mui/material";
import AccordionComponent from "./AccordionComponent.jsx";

const FAQ = () => {
    const faqs = [
        {
            question: 'Como instalo a extensão?',
            answer: 'Para instalar a extensão, você precisa primeiro visitar o link de download disponível na nossa página inicial. Isso o redirecionará para a Chrome Web Store, onde você pode clicar no botão "Adicionar ao Chrome" para iniciar a instalação.'
        },
        {
            question: 'Como atualizo a extensão?',
            answer: 'As atualizações para a extensão são normalmente instaladas automaticamente pelo Google Chrome. No entanto, se você deseja verificar manualmente as atualizações, pode fazê-lo na página de extensões do Google Chrome. Vá para chrome://extensions, ative o modo de desenvolvedor e clique em "Atualizar".'
        },
        {
            question: 'A extensão coleta algum dos meus dados pessoais?',
            answer: 'Não, a extensão UpDev Experience respeita a privacidade dos usuários. Não coletamos, armazenamos, compartilhamos ou vendemos quaisquer dados pessoais. A extensão só acessa as postagens públicas do blog exibidas nela.'
        },
        {
            question: 'Como posso entrar em contato para suporte ou feedback?',
            answer: 'Você pode nos contatar através do endereço de e-mail fornecido na nossa página inicial. Estamos sempre prontos para ajudar nossos usuários e apreciamos qualquer feedback que possa nos ajudar a melhorar a extensão.'
        }
    ];

    return (
        <Box sx={{ mt: 4, mb: 2, ml:4, mr:4, p:2 }}>
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                <div>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Perguntas Frequentes
                    </Typography>
                    {faqs.map((faq, index) => (
                        <AccordionComponent key={index} title={faq.question}>
                            {faq.answer}
                        </AccordionComponent>
                    ))}
                </div>
            </Paper>
        </Box>
    );
};

export default FAQ;

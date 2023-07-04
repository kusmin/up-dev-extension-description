import {Box, IconButton} from "@mui/material";
import {Facebook, GitHub, Instagram, LinkedIn, Twitter} from "@mui/icons-material";

const SocialIcons = () => (
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
)

export default SocialIcons;
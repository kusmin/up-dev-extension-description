import PropTypes from 'prop-types';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionComponent = ({title, children}) => {
    return (
        <Accordion sx={{ mt: 2, p:3 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h4">{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{children}</Typography>
            </AccordionDetails>
        </Accordion>
    )
}

AccordionComponent.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default AccordionComponent;

import { Box } from "@mui/material";
import SectionButton from "src/shared/ui/SectionButton";

function NavigationButtons() {
    return (
        <Box sx={{ display: "flex", gap: "30px" }}>
            <SectionButton label="O nas" target="/about" />
            <SectionButton label="Oferta" target="/offer" />
            <SectionButton label="Realizacje" target="/projects" />
            <SectionButton
                label="Kontakt"
                target="/contact"
                sx={{
                    backgroundColor: "secondary.main",
                    color: "primary.main",
                    "&:hover": {
                        backgroundColor: "secondary.dark",
                    },
                }}
            />
        </Box>
    );
}

export default NavigationButtons;

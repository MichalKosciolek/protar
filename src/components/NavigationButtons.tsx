import { Box, darken, Theme, useTheme } from "@mui/material";
import SectionButton from "src/shared/ui/SectionButton";

function NavigationButtons() {
    const theme = useTheme();

    return (
        <Box sx={{ marginRight: "100px" }}>
            <SectionButton label="STRONA GŁÓWNA" target="mainPageSection" />
            <SectionButton label="O NAS" target="aboutSection" />
            <SectionButton label="REALIZACJE" target="projectsSection" />
            <SectionButton
                label="KONTAKT"
                target="contactSection"
                sx={{
                    backgroundColor: "secondary.main",
                    color: "primary.main",
                    marginLeft: "20px",
                    "&:hover": {
                        backgroudColor: darken(
                            theme.palette.secondary.main,
                            0.2
                        )
                    }
                }}
            />
        </Box>
    );
}

export default NavigationButtons;

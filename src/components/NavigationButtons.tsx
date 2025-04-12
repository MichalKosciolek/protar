import { Box } from "@mui/material";
import SectionButton from "src/shared/ui/SectionButton";

function NavigationButtons() {
  return (
    <Box sx={{ marginRight: "100px" }}>
      <SectionButton label="STRONA GŁÓWNA" target="section1" />
      <SectionButton label="O NAS" target="section2" />
      <SectionButton label="REALIZACJE" target="section3" />
      <SectionButton
        label="KONTAKT"
        target="section4"
        sx={{
          backgroundColor: "secondary.main",
          color: "primary.main",
          marginLeft: "20px",
        }}
      />
    </Box>
  );
}

export default NavigationButtons;

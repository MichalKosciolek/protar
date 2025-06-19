import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

function Footer() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            sx={{
                bgcolor: "primary.main",
                color: "text.primary",
                padding: isMobile ? 1.5 : 2,
                textAlign: "center"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 2,
                    mb: 1
                }}
            >
                <IconButton
                    component="a"
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    size={isMobile ? "small" : "medium"}
                >
                    <Facebook fontSize={isMobile ? "small" : "medium"} />
                </IconButton>
                <IconButton
                    component="a"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    size={isMobile ? "small" : "medium"}
                >
                    <Instagram fontSize={isMobile ? "small" : "medium"} />
                </IconButton>
            </Box>
            <Typography variant={isMobile ? "caption" : "body2"}>
                © 2025 PROTAR Sp. z o.o.
                <br />
                Autor strony: Michał Kościółek
            </Typography>
        </Box>
    );
}

export default Footer;

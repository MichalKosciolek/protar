import { Box, Typography, IconButton } from "@mui/material";
import { Facebook, Instagram } from "@mui/icons-material";

function Footer() {
    return (
        <Box
            sx={{
                bgcolor: "primary.main",
                color: "text.primary",
                padding: 2,
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
                >
                    <Facebook />
                </IconButton>
                <IconButton
                    component="a"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                >
                    <Instagram />
                </IconButton>
            </Box>
            <Typography variant="body2">
                © 2025 PROTAR Sp. z o.o.
                <br />
                Autor strony: Michał Kościółek
            </Typography>
        </Box>
    );
}

export default Footer;

import { useTheme, Box, Stack, Typography, Button } from "@mui/material";
import { Link } from "react-scroll";
import MainPageImage from "../assets/tmp.png";

interface MainPageSectionProps {
    id: string;
    sx: object;
}

function MainPageSection({ id, sx }: MainPageSectionProps) {
    const theme = useTheme();

    return (
        <Box
            id={id}
            sx={{
                ...sx,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: theme.palette.background.default
            }}
        >
            <Stack
                direction={{ xs: "column", md: "row" }} // Vertical on small screens, horizontal on larger screens
                spacing={4}
                alignItems="center"
                justifyContent="center"
                sx={{ width: "100%", maxWidth: "1200px" }}
            >
                <Box
                    component="img"
                    src={MainPageImage}
                    alt="Main page image"
                    sx={{
                        width: "100%",
                        maxWidth: "500px",
                        borderRadius: "16px",
                        margin: "0 auto",
                        display: "block",
                        boxShadow: theme.shadows[3]
                    }}
                />

                {/* Text Section */}
                <Stack
                    spacing={2}
                    sx={{ textAlign: { xs: "center", md: "left" } }}
                >
                    <Typography variant="h3" color="textPrimary" gutterBottom>
                        Witamy w PROTAR
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        PROTAR jest Twoim zaufanym partnerem w zakresie
                        innowacyjnych rozwiązań. Specjalizujemy się w
                        dostarczaniu wysokiej jakości projektów dostosowanych do
                        Twoich potrzeb.
                    </Typography>
                    <Link
                        to="aboutSection"
                        smooth={true}
                        duration={500}
                        style={{ textDecoration: "none" }}
                        offset={-80}
                    >
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            sx={{
                                alignSelf: { xs: "center", md: "flex-start" }
                            }}
                        >
                            Dowiedz się więcej
                        </Button>
                    </Link>
                </Stack>
            </Stack>
        </Box>
    );
}

export default MainPageSection;

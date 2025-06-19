import {
    Box,
    Typography,
    Stack,
    Button,
    Card,
    useMediaQuery
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import MainPageImage from "../../assets/tmp.png";

function AboutPage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            sx={{
                marginTop: { xs: "80px", md: "120px" },
                marginLeft: { xs: "16px", sm: "30px", md: "50px" },
                marginRight: { xs: "16px", sm: "30px", md: "50px" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: theme.palette.background.default,
                position: "relative",
                height: { xs: "auto", md: "90vh" },
                minHeight: { xs: "80vh", md: "auto" },
                overflow: "hidden",
                borderRadius: { xs: "8px", md: "16px" },
                py: { xs: 4, md: 0 }
            }}
        >
            <Box
                component="img"
                src={MainPageImage}
                alt="Background image"
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 0,
                    filter: "brightness(0.7)",
                    borderRadius: { xs: "8px", md: "16px" },
                    transform: "translate(-50%, -50%)"
                }}
            />
            <Card
                sx={{
                    position: "relative",
                    zIndex: 1,
                    padding: { xs: 2, sm: 3, md: 4 },
                    borderRadius: { xs: "8px", md: "16px" },
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    color: "white",
                    maxWidth: { xs: "100%", md: "800px" },
                    textAlign: "center",
                    m: { xs: 2, md: 0 }
                }}
            >
                <Stack
                    spacing={isMobile ? 2 : 4}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography variant={isMobile ? "h4" : "h3"} gutterBottom>
                        Witamy w PROTAR
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
                    >
                        Firma PROTAR spółka z o.o. jako firma ogólnobudowlana
                        powstała w 2022 roku z inicjatywy rodzeństwa Pawła i
                        Piotra Kościółek oraz Agnieszki Staszel. Świadczy usługi
                        dla inwestorów indywidualnych oraz instytucji
                        publicznych poprzez kompleksowe przygotowanie i
                        realizację inwestycji. Pełnimy funkcję generalnego
                        wykonawcy jak i podwykonawcy. Gwarantujemy wysoką jakość
                        wykonania robót na każdym etapie procesu budowlanego.
                        Wykonujemy prace budowlane według wszelkich dostępnych
                        technologii. Zatrudniamy kadrę techniczną która posiada
                        dużą wiedzę oraz wieloletnie doświadczenie w realizacji
                        kontraktów. Służymy radą w trakcie realizacji inwestycji
                        w doborze urządzeń oraz materiałów. Wykonujemy zlecenia
                        w zakresie szeroko rozumianego budownictwa
                        ogólnobudowlanego.
                    </Typography>
                    <RouterLink
                        to="/offer"
                        style={{
                            textDecoration: "none",
                            width: isMobile ? "100%" : "auto"
                        }}
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            fullWidth={isMobile}
                            sx={{ py: { xs: 1.5, md: 1 } }}
                        >
                            Dowiedz się więcej
                        </Button>
                    </RouterLink>
                </Stack>
            </Card>
        </Box>
    );
}

export default AboutPage;

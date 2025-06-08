import { Box, Typography, Stack, Button, Card } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import MainPageImage from "../../assets/tmp.png";

function AboutPage() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                marginTop: "120px",
                marginLeft: "50px",
                marginRight: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: theme.palette.background.default,
                position: "relative",
                height: "90vh",
                overflow: "hidden",
                borderRadius: "16px"
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
                    width: "90%",
                    height: "90%",
                    objectFit: "cover",
                    zIndex: 0,
                    filter: "brightness(0.7)",
                    borderRadius: "16px",
                    transform: "translate(-50%, -50%)"
                }}
            />
            <Card
                sx={{
                    position: "relative",
                    zIndex: 1,
                    padding: 4,
                    borderRadius: "16px",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    color: "white",
                    maxWidth: "800px",
                    textAlign: "center"
                }}
            >
                <Stack spacing={4} alignItems="center" justifyContent="center">
                    <Typography variant="h3" gutterBottom>
                        Witamy w PROTAR
                    </Typography>
                    <Typography variant="body1">
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
                        style={{ textDecoration: "none" }}
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
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

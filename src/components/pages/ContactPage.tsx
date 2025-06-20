import {
    Box,
    Container,
    Stack,
    Typography,
    Paper,
    useMediaQuery
} from "@mui/material";
import {
    Business,
    People,
    Engineering,
    AccountBalance,
    LocationOn
} from "@mui/icons-material";
import ContactCard from "../ui/ContactCard";
import { useTheme } from "@mui/material/styles";

function ContactPage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const contactSections = [
        {
            title: "Kontakt ogólny",
            icon: (
                <Business
                    color="secondary"
                    fontSize={isMobile ? "medium" : "large"}
                />
            ),
            items: [
                { label: "Email", value: "biuro@protar.com.pl", isEmail: true }
            ],
            horizontal: false
        },
        {
            title: "Zarząd",
            icon: (
                <People
                    color="secondary"
                    fontSize={isMobile ? "medium" : "large"}
                />
            ),
            items: [
                {
                    label: "Paweł Kościółek",
                    value: "zarzad@protar.com.pl",
                    isEmail: true
                },
                {
                    label: "Piotr Kościółek",
                    value: "zarzad@protar.com.pl",
                    isEmail: true
                },
                {
                    label: "Agnieszka Staszel",
                    value: "zarzad@protar.com.pl",
                    isEmail: true
                }
            ],
            horizontal: !isMobile
        },
        {
            title: isMobile
                ? "Kierownik"
                : "Kierownik Działu Przygotowania Produkcji i Zaopatrzenia",
            icon: (
                <Engineering
                    color="secondary"
                    fontSize={isMobile ? "medium" : "large"}
                />
            ),
            items: [
                {
                    label: "Artur Cygan",
                    value: "artur.cygan@protar.com.pl",
                    isEmail: true
                }
            ],
            horizontal: false
        },
        {
            title: "Księgowość i faktury",
            icon: (
                <AccountBalance
                    color="secondary"
                    fontSize={isMobile ? "medium" : "large"}
                />
            ),
            items: [
                {
                    label: "Księgowość",
                    value: "ksiegowosc@protar.com.pl",
                    isEmail: true
                },
                {
                    label: "Wysyłanie faktur",
                    value: "faktury@protar.com.pl",
                    isEmail: true
                }
            ],
            horizontal: !isMobile
        }
    ];

    return (
        <Box
            sx={{
                padding: { xs: 1.5, sm: 2, md: 6 },
                marginTop: { xs: "70px", md: "80px" }
            }}
        >
            <Container maxWidth="lg">
                <Stack spacing={3} direction="column" alignItems="center">
                    {contactSections.map((section, idx) => (
                        <Box
                            key={idx}
                            sx={{
                                width: { xs: "100%", md: "70%" },
                                mb: { xs: 1, md: 2 }
                            }}
                        >
                            <ContactCard
                                title={section.title}
                                icon={section.icon}
                                items={section.items}
                                horizontal={section.horizontal}
                            />
                        </Box>
                    ))}

                    <Box
                        sx={{
                            width: { xs: "100%", md: "70%" },
                            mb: { xs: 1, md: 2 }
                        }}
                    >
                        <Paper
                            elevation={3}
                            sx={{
                                p: { xs: 2, md: 3 },
                                borderRadius: 2,
                                overflow: "hidden"
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    mb: 2
                                }}
                            >
                                <LocationOn
                                    color="secondary"
                                    fontSize={isMobile ? "medium" : "large"}
                                    sx={{ mr: 1 }}
                                />
                                <Typography
                                    variant={isMobile ? "h6" : "h5"}
                                    component="h2"
                                >
                                    Nasza lokalizacja
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    width: "100%",
                                    height: { xs: "300px", md: "400px" },
                                    borderRadius: 1,
                                    overflow: "hidden"
                                }}
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2724.919268130419!2d20.931150976704867!3d49.999547871509655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473d84ed77044255%3A0x8513f549b7079b63!2sBrzozowa%204A%2C%2033-100%20Tarn%C3%B3w!5e1!3m2!1spl!2spl!4v1749387499953!5m2!1spl!2spl"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Lokalizacja firmy"
                                ></iframe>
                            </Box>
                            <Typography
                                sx={{
                                    mt: 2,
                                    fontSize: { xs: "0.9rem", md: "1rem" }
                                }}
                            >
                                PROTAR Sp. z o.o., ul. Brzozowa 4a, 33-100
                                Tarnów
                            </Typography>
                        </Paper>
                    </Box>
                </Stack>
            </Container>
        </Box>
    );
}

export default ContactPage;

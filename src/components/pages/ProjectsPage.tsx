import {
    Box,
    Typography,
    Container,
    Button,
    Divider,
    alpha,
    useMediaQuery
} from "@mui/material";
import {
    CheckCircle,
    Engineering,
    Construction,
    Lightbulb
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

import ProjectCard, { Project } from "../ui/ProjectCard";

import PlaceholderImg from "../../assets/tmp.png";

const projects: Project[] = [
    {
        id: 1,
        title: "Poprawa Infrastruktury technicznej Oddziału zewnętrznego w Tarnowie-Mościcach Zakładu Karnego w Tarnowie",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl nec nisl.",
        image: PlaceholderImg,
        category: "infrastructure",
        year: "2025"
    },
    {
        id: 2,
        title: "Remont elewacji budynku hali magazynowej na oddziale DNS w Gliwicach w Stalprdukt S.A.",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl nec nisl.",
        image: PlaceholderImg,
        category: "renovation",
        year: "2025"
    },
    {
        id: 3,
        title: "Budowa oświetlenia drogowego na terenie Gminy Wojnicz",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl nec nisl.",
        image: PlaceholderImg,
        category: "electrical",
        year: "2025"
    },
    {
        id: 4,
        title: "Budowa sieci oświetlenia ulicznego wraz z latarniami na terenie Gminy Brzesko",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl nec nisl.",
        image: PlaceholderImg,
        category: "electrical",
        year: "2025"
    },
    {
        id: 5,
        title: "Remont i modernizacja budynków szkół na terenie Gminy Wierzchosławice",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl nec nisl.",
        image: PlaceholderImg,
        category: "construction",
        year: "2025"
    },
    {
        id: 6,
        title: "Remont i modernizacja budynku magazynowo-biurowego oraz budynku garażowego przy ul. Wspólnej 13 w Tarnowie",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl nec nisl.",
        image: PlaceholderImg,
        category: "renovation",
        year: "2025"
    },
    {
        id: 7,
        title: "Budowa oświetlenia drogowego przy drodze gminnej w msc. Łopoń - Etap II",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl nec nisl.",
        image: PlaceholderImg,
        category: "electrical",
        year: "2025"
    },
    {
        id: 8,
        title: "Przebudowa i rozbudowa budynku wielofunkcyjnego (remizy OSP) w Straszęcinie - etap 2",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl nec nisl.",
        image: PlaceholderImg,
        category: "construction",
        year: "2025"
    }
];

const getCategoryIcon = (category: string) => {
    switch (category) {
        case "construction":
            return <Construction />;
        case "infrastructure":
            return <Engineering />;
        case "renovation":
            return <CheckCircle />;
        case "electrical":
            return <Lightbulb />;
        default:
            return <Construction />;
    }
};

const getCategoryLabel = (category: string) => {
    switch (category) {
        case "construction":
            return "Budownictwo";
        case "infrastructure":
            return "Infrastruktura";
        case "renovation":
            return "Renowacja";
        case "electrical":
            return "Elektryka";
        default:
            return category;
    }
};

function ProjectsPage() {
    const theme = useTheme();
    const dividerColor = alpha(theme.palette.secondary.main, 0.7);
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            sx={{
                paddingY: { xs: 4, md: 6 },
                paddingX: { xs: 1.5, sm: 2, md: 6 },
                marginTop: { xs: "70px", md: "80px" }
            }}
        >
            <Container maxWidth="lg">
                <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
                    <Typography
                        variant={isMobile ? "h4" : "h3"}
                        color="text.primary"
                        gutterBottom
                        sx={{ fontWeight: 600 }}
                    >
                        Nasze Realizacje
                    </Typography>
                    <Divider
                        sx={{
                            mb: 3,
                            mt: 2,
                            borderBottomWidth: 3,
                            borderColor: dividerColor,
                            width: "80px",
                            mx: "auto"
                        }}
                    />
                </Box>

                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 1fr)"
                        },
                        gap: { xs: 2, sm: 3, md: 4 }
                    }}
                >
                    {projects.map((project) => (
                        <Box key={project.id} sx={{ height: "100%" }}>
                            <ProjectCard
                                project={project}
                                getCategoryIcon={getCategoryIcon}
                                getCategoryLabel={getCategoryLabel}
                            />
                        </Box>
                    ))}
                </Box>

                <Box textAlign="center" mt={{ xs: 4, sm: 5, md: 6 }}>
                    <Button
                        component={RouterLink}
                        to="/contact"
                        variant="contained"
                        color="secondary"
                        size="large"
                        fullWidth={isMobile}
                        onClick={() => {
                            window.scrollTo(0, 0);
                        }}
                        sx={{
                            mt: { xs: 2, sm: 3 },
                            fontWeight: 600,
                            px: { xs: 3, md: 4 },
                            py: { xs: 1.5, md: 1.5 },
                            minWidth: { xs: "100%", sm: "auto" }
                        }}
                    >
                        Skontaktuj się z nami
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}

export default ProjectsPage;

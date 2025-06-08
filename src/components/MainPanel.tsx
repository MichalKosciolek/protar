import { Box, createTheme, ThemeOptions, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainAppBar from "./MainAppBar";
import AboutPage from "./pages/AboutPage";
import OfferPage from "./pages/OfferPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./Footer";

export const themeOptions: ThemeOptions = {
    palette: {
        mode: "light",
        primary: {
            main: "#dee2e6"
        },
        secondary: {
            main: "#a70d15"
        },
        background: {
            default: "#EDF2F4"
        }
    },
    typography: {
        fontFamily: "'DM Sans', sans-serif",
        button: {
            fontStyle: "normal",
            fontSize: "18px",
            fontWeight: 600
        }
    }
};

const theme = createTheme(themeOptions);

function MainPanel() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Box
                    sx={{
                        flexGrow: 1,
                        width: "100%",
                        bgcolor: "background.default",
                        minHeight: "150vh",
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <MainAppBar />
                    <Box sx={{ flexGrow: 1 }}>
                        <Routes>
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/offer" element={<OfferPage />} />
                            <Route
                                path="/projects"
                                element={<ProjectsPage />}
                            />
                            <Route path="/contact" element={<ContactPage />} />
                        </Routes>
                    </Box>
                    <Footer />
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default MainPanel;

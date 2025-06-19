import {
    AppBar,
    Toolbar,
    IconButton,
    useMediaQuery,
    Box,
    Drawer
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/protar_logo.svg";
import NavigationButtons from "./NavigationButtons";
import MobileNavigation from "./MobileNavigation";
import { useTheme } from "@mui/material/styles";

function MainAppBar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <AppBar position="fixed" color="primary">
            <Toolbar
                sx={{
                    justifyContent: "space-between",
                    paddingX: { xs: "8px", sm: "16px" }
                }}
            >
                <Link
                    to="/about"
                    style={{ display: "flex", alignItems: "center" }}
                    onClick={() => window.scrollTo(0, 0)}
                >
                    <img
                        src={Logo}
                        alt="Logo"
                        style={{
                            height: isMobile ? "50px" : "65px",
                            width: "auto",
                            marginLeft: isMobile ? "0" : "40px",
                            marginRight: "16px",
                            marginTop: "10px",
                            marginBottom: "10px",
                            cursor: "pointer"
                        }}
                    />
                </Link>

                {isMobile ? (
                    <Box>
                        <IconButton
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer}
                            sx={{ mr: 1 }}
                        >
                            <MenuIcon fontSize="large" />
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={drawerOpen}
                            onClose={toggleDrawer}
                        >
                            <MobileNavigation closeDrawer={toggleDrawer} />
                        </Drawer>
                    </Box>
                ) : (
                    <NavigationButtons />
                )}
            </Toolbar>
        </AppBar>
    );
}

export default MainAppBar;

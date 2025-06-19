import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Divider
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

interface MobileNavigationProps {
    closeDrawer: () => void;
}

function MobileNavigation({ closeDrawer }: MobileNavigationProps) {
    const navigate = useNavigate();
    const theme = useTheme();

    const navigationItems = [
        { label: "O nas", path: "/about" },
        { label: "Oferta", path: "/offer" },
        { label: "Realizacje", path: "/projects" },
        { label: "Kontakt", path: "/contact" }
    ];

    const handleNavigation = (path: string) => {
        navigate(path);
        window.scrollTo(0, 0);
        closeDrawer();
    };

    return (
        <Box
            sx={{
                width: 250,
                paddingTop: 2,
                bgcolor: theme.palette.background.paper
            }}
            role="presentation"
        >
            <List>
                {navigationItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton
                            onClick={() => handleNavigation(item.path)}
                            sx={{
                                py: 2,
                                ...(item.label === "Kontakt" && {
                                    bgcolor: theme.palette.secondary.main,
                                    color: "white",
                                    "&:hover": {
                                        bgcolor: theme.palette.secondary.dark
                                    }
                                })
                            }}
                        >
                            <ListItemText
                                primary={item.label}
                                primaryTypographyProps={{
                                    fontSize: "1.2rem",
                                    fontWeight: 500
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );
}

export default MobileNavigation;

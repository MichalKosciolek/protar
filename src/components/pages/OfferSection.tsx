import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Box,
    useMediaQuery,
    useTheme
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface OfferCardProps {
    title: string;
    image: string;
    points: string[];
}

function OfferCard({ title, image, points }: OfferCardProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const cardHoverShadow = "rgba(0, 0, 0, 0.2)";

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center"
            }}
        >
            <Card
                elevation={4}
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    mb: { xs: 3, md: 5 },
                    borderRadius: { xs: 2, md: 4 },
                    overflow: "hidden",
                    boxShadow: { xs: 4, md: 6 },
                    bgcolor: "background.paper",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    maxWidth: { xs: "100%", sm: "95%", md: "700px", lg: "800px", xl: "900px" },
                    width: "100%",
                    mx: "auto",
                    "&:hover": {
                        transform: "translateY(-1px)",
                        boxShadow: `0 5px 12px ${cardHoverShadow}`
                    }
                }}
            >
                <CardMedia
                    component="img"
                    image={image}
                    alt={title}
                    sx={{
                        width: { xs: "100%", md: 260 },
                        height: { xs: 180, md: "auto" },
                        objectFit: "cover"
                    }}
                />
                <CardContent sx={{ flex: 1, p: { xs: 2, sm: 3, md: 3 } }}>
                    <Typography
                        variant={isSmallMobile ? "h6" : "h5"}
                        color="secondary"
                        gutterBottom
                        sx={{ fontWeight: 700, fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.4rem", lg: "1.5rem" } }}
                    >
                        {title}
                    </Typography>
                    <Divider
                        sx={{
                            mb: 2,
                            width: 60,
                            borderBottomWidth: 3,
                            borderColor: "secondary.main"
                        }}
                    />
                    <List dense={isSmallMobile} sx={{
                        "& .MuiListItemText-primary": {
                            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.05rem", lg: "1.1rem" }
                        }
                    }}>
                        {points.map((point, idx) => (
                            <ListItem key={idx} disableGutters>
                                <ListItemIcon sx={{ minWidth: isSmallMobile ? 36 : 48 }}>
                                    <CheckCircleIcon color="secondary" fontSize={isSmallMobile ? "small" : "medium"} />
                                </ListItemIcon>
                                <ListItemText 
                                    primary={point} 
                                />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
        </Box>
    );
}

export default OfferCard;

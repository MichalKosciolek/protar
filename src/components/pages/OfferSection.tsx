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
    Box
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface OfferCardProps {
    title: string;
    image: string;
    points: string[];
}

function OfferCard({ title, image, points }: OfferCardProps) {
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
                    mb: 5,
                    borderRadius: 4,
                    overflow: "hidden",
                    boxShadow: 6,
                    bgcolor: "background.paper",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    maxWidth: { lg: "900px", xl: "1000px" },
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
                        width: { xs: "100%", md: 320 },
                        height: { xs: 180, md: "auto" },
                        objectFit: "cover"
                    }}
                />
                <CardContent sx={{ flex: 1, p: 4 }}>
                    <Typography
                        variant="h5"
                        color="secondary"
                        gutterBottom
                        sx={{ fontWeight: 700 }}
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
                    <List>
                        {points.map((point, idx) => (
                            <ListItem key={idx} disableGutters>
                                <ListItemIcon>
                                    <CheckCircleIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText primary={point} />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
        </Box>
    );
}

export default OfferCard;

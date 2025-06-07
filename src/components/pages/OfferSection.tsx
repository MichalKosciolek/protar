import { Card, CardContent, CardMedia, Typography, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface OfferSectionProps {
    title: string;
    image: string;
    points: string[];
}

function OfferSection({ title, image, points }: OfferSectionProps) {
    return (
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
            }}
        >
            <CardMedia
                component="img"
                image={image}
                alt={title}
                sx={{
                    width: { xs: "100%", md: 320 },
                    height: { xs: 180, md: "auto" },
                    objectFit: "cover",
                }}
            />
            <CardContent sx={{ flex: 1, p: 4 }}>
                <Typography variant="h5" color="secondary" gutterBottom sx={{ fontWeight: 700 }}>
                    {title}
                </Typography>
                <Divider sx={{ mb: 2, width: 60, borderBottomWidth: 3, borderColor: "secondary.main" }} />
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
    );
}

export default OfferSection;

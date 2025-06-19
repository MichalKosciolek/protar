import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardMedia,
    CardActions,
    Typography,
    Box,
    Button,
    Chip,
    alpha,
    useMediaQuery
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ProjectGalleryDialog from "./ProjectGalleryDialog";

// Project data structure
export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    category: "construction" | "infrastructure" | "renovation" | "electrical";
    year: string;
    galleryImages?: string[]; // Optional array of additional images
}

interface ProjectCardProps {
    project: Project;
    getCategoryIcon: (category: string) => React.ReactElement;
    getCategoryLabel: (category: string) => string;
}

function ProjectCard({
    project,
    getCategoryIcon,
    getCategoryLabel
}: ProjectCardProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const cardHoverShadow = "rgba(0, 0, 0, 0.2)";
    const [galleryOpen, setGalleryOpen] = useState(false);

    // For demo purposes, we'll duplicate the main image as gallery images
    const galleryImages = project.galleryImages || Array(4).fill(project.image);

    const handleOpenGallery = () => {
        setGalleryOpen(true);
    };

    const handleCloseGallery = () => {
        setGalleryOpen(false);
    };

    return (
        <>
            <Card
                elevation={3}
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: { xs: 1, md: 2 },
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                        transform: "translateY(-1px)",
                        boxShadow: `0 8px 16px ${cardHoverShadow}`
                    }
                }}
            >
                <CardMedia
                    component="img"
                    height={isMobile ? "180" : "240"}
                    image={project.image}
                    alt={project.title}
                    sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1, p: { xs: 2, md: 3 } }}>
                    <Box display="flex" alignItems="center" mb={1}>
                        <Chip
                            icon={getCategoryIcon(project.category)}
                            label={getCategoryLabel(project.category)}
                            size={isMobile ? "small" : "small"}
                            color="secondary"
                            sx={{
                                mr: 1,
                                "& .MuiChip-icon": {
                                    fontSize: isMobile ? "0.9rem" : "1rem"
                                }
                            }}
                        />
                        <Typography variant="body2" color="text.secondary">
                            {project.year}
                        </Typography>
                    </Box>
                    <Typography
                        variant={isMobile ? "subtitle1" : "h6"}
                        component="h2"
                        gutterBottom
                        sx={{
                            fontWeight: 600,
                            lineHeight: 1.3,
                            mb: 2,
                            fontSize: { xs: "1rem", md: "1.25rem" }
                        }}
                    >
                        {project.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: { xs: "0.875rem", md: "0.875rem" } }}
                    >
                        {project.description}
                    </Typography>
                </CardContent>
                <CardActions sx={{ p: { xs: 1.5, md: 2 }, pt: 0 }}>
                    <Button
                        size={isMobile ? "medium" : "small"}
                        color="secondary"
                        onClick={handleOpenGallery}
                        sx={{
                            fontWeight: 500,
                            py: { xs: 1, md: 0.5 },
                            width: isMobile ? "100%" : "auto",
                            "&:hover": {
                                backgroundColor: alpha(
                                    theme.palette.secondary.main,
                                    0.1
                                )
                            }
                        }}
                    >
                        Zobacz galerię
                    </Button>
                </CardActions>
            </Card>

            <ProjectGalleryDialog
                open={galleryOpen}
                onClose={handleCloseGallery}
                images={galleryImages}
            />
        </>
    );
}

export default ProjectCard;

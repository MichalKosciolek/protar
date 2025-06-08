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
    alpha
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
                    borderRadius: 2,
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                        transform: "translateY(-1px)",
                        boxShadow: `0 8px 16px ${cardHoverShadow}`
                    }
                }}
            >
                <CardMedia
                    component="img"
                    height="240"
                    image={project.image}
                    alt={project.title}
                    sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box display="flex" alignItems="center" mb={1}>
                        <Chip
                            icon={getCategoryIcon(project.category)}
                            label={getCategoryLabel(project.category)}
                            size="small"
                            color="secondary"
                            sx={{ mr: 1 }}
                        />
                        <Typography variant="body2" color="text.secondary">
                            {project.year}
                        </Typography>
                    </Box>
                    <Typography
                        variant="h6"
                        component="h2"
                        gutterBottom
                        sx={{
                            fontWeight: 600,
                            lineHeight: 1.3,
                            mb: 2
                        }}
                    >
                        {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {project.description}
                    </Typography>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                    <Button
                        size="small"
                        color="secondary"
                        onClick={handleOpenGallery}
                        sx={{
                            fontWeight: 500,
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

            {/* Use the default title "Galeria projektu" */}
            <ProjectGalleryDialog
                open={galleryOpen}
                onClose={handleCloseGallery}
                images={galleryImages}
            />
        </>
    );
}

export default ProjectCard;

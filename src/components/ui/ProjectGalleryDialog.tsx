import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    ImageList,
    ImageListItem,
    useMediaQuery,
    useTheme
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ProjectGalleryDialogProps {
    open: boolean;
    onClose: () => void;
    images: string[];
    title?: string;
}

function ProjectGalleryDialog({
    open,
    onClose,
    images,
    title = "Galeria projektu"
}: ProjectGalleryDialogProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            fullScreen={isMobile}
        >
            <DialogTitle
                sx={{
                    m: 0,
                    p: { xs: 1.5, md: 2 },
                    textAlign: "center",
                    position: "relative",
                    fontSize: { xs: "1.25rem", md: "1.5rem" }
                }}
            >
                {title}
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500]
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                <ImageList cols={isMobile ? 1 : 2} gap={isMobile ? 8 : 16}>
                    {images.map((img, index) => (
                        <ImageListItem key={index}>
                            <img
                                src={img}
                                alt={`Zdjęcie ${index + 1}`}
                                loading="lazy"
                                style={{
                                    borderRadius: "4px",
                                    width: "100%",
                                    objectFit: "contain"
                                }}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </DialogContent>
        </Dialog>
    );
}

export default ProjectGalleryDialog;

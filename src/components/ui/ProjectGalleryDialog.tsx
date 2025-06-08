import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    ImageList,
    ImageListItem
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
    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle
                sx={{
                    m: 0,
                    p: 2,
                    textAlign: "center",
                    position: "relative"
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
                <ImageList cols={2} gap={16}>
                    {images.map((img, index) => (
                        <ImageListItem key={index}>
                            <img
                                src={img}
                                alt={`Zdjęcie ${index + 1}`}
                                loading="lazy"
                                style={{ borderRadius: "4px" }}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </DialogContent>
        </Dialog>
    );
}

export default ProjectGalleryDialog;

import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

interface SectionButtonProps {
    label: string;
    target: string;
    sx?: object;
}

function SectionButton({ label, target, sx }: SectionButtonProps) {
    const theme = useTheme();

    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <Button
            component={RouterLink}
            to={target}
            color="inherit"
            onClick={handleClick}
            sx={{
                "&:hover": {
                    color: theme.palette.secondary.main
                },
                "&.active": {
                    color: theme.palette.secondary.main
                },
                ...sx
            }}
        >
            {label}
        </Button>
    );
}

export default SectionButton;

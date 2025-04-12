import Button from "@mui/material/Button";
import { Link } from "react-scroll";
import { useTheme } from "@mui/material/styles";

interface SectionButtonProps {
    label: string;
    target: string;
    sx?: object;
}

function SectionButton({ label, target, sx }: SectionButtonProps) {
    const theme = useTheme();

    return (
        <Button
            color="inherit"
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
            <Link
                to={target}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active"
                offset={-80}
                style={{
                    textDecoration: "none",
                    color: "inherit",
                    marginRight: "20px",
                    marginLeft: "20px"
                }}
            >
                {label}
            </Link>
        </Button>
    );
}

export default SectionButton;

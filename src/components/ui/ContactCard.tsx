import {
    Box,
    Typography,
    Card,
    CardContent,
    Divider,
    Link,
    Stack,
    alpha,
    useMediaQuery
} from "@mui/material";
import { ReactNode } from "react";
import { useTheme } from "@mui/material/styles";

interface ContactCardProps {
    title: string;
    icon: ReactNode;
    items: {
        label: string;
        value: string;
        isEmail: boolean;
    }[];
    horizontal?: boolean;
}

function ContactCard({
    title,
    icon,
    items,
    horizontal = false
}: ContactCardProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const cardHoverShadow = "rgba(0, 0, 0, 0.2)";
    const dividerColor = alpha(theme.palette.secondary.main, 0.5);
    const linkColor = theme.palette.primary.dark || "#566573";

    return (
        <Card
            elevation={2}
            sx={{
                height: "100%",
                borderRadius: { xs: 1, md: 2 },
                bgcolor: theme.palette.background.paper,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                    transform: "translateY(-1px)",
                    boxShadow: `0 5px 12px ${cardHoverShadow}`
                }
            }}
        >
            <CardContent sx={{ p: { xs: 2, md: 3 }, textAlign: "center" }}>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mb={2}
                >
                    <Box sx={{ color: theme.palette.text.secondary }}>
                        {icon}
                    </Box>
                    <Typography
                        variant={isMobile ? "subtitle1" : "h5"}
                        component="h2"
                        color="text.primary"
                        sx={{
                            ml: 1,
                            fontWeight: 600,
                            fontSize: isMobile ? "1.1rem" : undefined
                        }}
                    >
                        {title}
                    </Typography>
                </Box>
                <Divider
                    sx={{
                        mb: 3,
                        borderColor: dividerColor,
                        opacity: 0.7,
                        mx: "auto",
                        width: "50%"
                    }}
                />

                {horizontal ? (
                    <Stack
                        direction={isMobile ? "column" : "row"}
                        spacing={isMobile ? 2 : 3}
                        justifyContent="center"
                        divider={
                            !isMobile && (
                                <Divider orientation="vertical" flexItem />
                            )
                        }
                        sx={{
                            flexWrap: { xs: "wrap", md: "nowrap" },
                            gap: isMobile ? 1 : 2
                        }}
                    >
                        {items.map((item, idx) => (
                            <Box
                                key={idx}
                                sx={{
                                    textAlign: "center",
                                    minWidth: isMobile ? "auto" : "180px",
                                    px: { xs: 1, md: 2 }
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontWeight: 600,
                                        mb: 1,
                                        color: theme.palette.text.primary,
                                        fontSize: isMobile
                                            ? "0.95rem"
                                            : undefined
                                    }}
                                >
                                    {item.label}
                                </Typography>
                                {item.isEmail && (
                                    <Link
                                        href={`mailto:${item.value}`}
                                        underline="hover"
                                        sx={{
                                            fontSize: isMobile
                                                ? "0.9rem"
                                                : "1rem",
                                            color: linkColor,
                                            fontWeight: 500,
                                            "&:hover": {
                                                color: theme.palette.secondary
                                                    .main
                                            }
                                        }}
                                    >
                                        {item.value}
                                    </Link>
                                )}
                            </Box>
                        ))}
                    </Stack>
                ) : (
                    <Box sx={{ textAlign: "center" }}>
                        {items.map((item, idx) => (
                            <Box key={idx} sx={{ py: isMobile ? 0.5 : 1 }}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontWeight: 500,
                                        mb: 1,
                                        fontSize: isMobile
                                            ? "0.95rem"
                                            : undefined
                                    }}
                                >
                                    {item.label}
                                </Typography>
                                {item.isEmail && (
                                    <Link
                                        href={`mailto:${item.value}`}
                                        underline="hover"
                                        sx={{
                                            fontSize: isMobile
                                                ? "0.9rem"
                                                : "1rem",
                                            color: linkColor,
                                            fontWeight: 500,
                                            "&:hover": {
                                                color: theme.palette.secondary
                                                    .main
                                            }
                                        }}
                                    >
                                        {item.value}
                                    </Link>
                                )}
                            </Box>
                        ))}
                    </Box>
                )}
            </CardContent>
        </Card>
    );
}

export default ContactCard;

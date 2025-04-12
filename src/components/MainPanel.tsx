import React from "react";
import {
  AppBar,
  Box,
  createTheme,
  Toolbar,
  Typography,
  Container,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material";
import Logo from "../assets/protar_logo.svg";
import NavigationButtons from "./NavigationButtons"

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#dee2e6",
    },
    secondary: {
      main: "#D90429",
    },
    background: {
      default: "#EDF2F4",
    },
  },
  typography: {
    fontFamily: "'DM Sans', sans-serif",
    button: {
        fontStyle: "normal",
        fontSize: "18px",
        fontWeight: 600
    },
  },
};

const theme = createTheme(themeOptions);

function MainPanel() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          bgcolor: "background.default",
          minHeight: "150vh",
        }}
      >
        <AppBar position="fixed" color="primary">
          <Toolbar sx={{ justifyContent: "space-between", paddingX: "16px" }}>
            <img
              src={Logo}
              alt="Logo"
              style={{
                height: "65px",
                width: "auto",
                marginLeft: "40px",
                marginRight: "16px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <NavigationButtons></NavigationButtons>
          </Toolbar>
        </AppBar>
        <Container sx={{ mt: 12 }}>
          <Box id="section1" sx={{ minHeight: "100vh", paddingY: 4 }}>
            <Typography variant="h4" color="textPrimary">
              Section 1
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Content for Section 1 goes here.
            </Typography>
          </Box>
          <Box id="section2" sx={{ minHeight: "100vh", paddingY: 4 }}>
            <Typography variant="h4" color="textPrimary">
              Section 2
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Content for Section 2 goes here.
            </Typography>
          </Box>
          <Box id="section3" sx={{ minHeight: "100vh", paddingY: 4 }}>
            <Typography variant="h4" color="textPrimary">
              Section 3
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Content for Section 3 goes here.
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default MainPanel;

import { AppBar, Toolbar } from "@mui/material";
import Logo from "../assets/protar_logo.svg";
import NavigationButtons from "./NavigationButtons";

function MainAppBar() {
    return (
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
                        marginBottom: "10px"
                    }}
                />
                <NavigationButtons />
            </Toolbar>
        </AppBar>
    );
}

export default MainAppBar;

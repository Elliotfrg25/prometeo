import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { useAuth } from "./AuthContext";

const StyledToolbar = styled(Toolbar)({
    justifyContent: "space-between",
});

const NavBar = () => {
    const navigate = useNavigate();
    const { currentUser, logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/");
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    return (
        <AppBar position="static">
            <StyledToolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    PROMETEO
                </Typography>
                {currentUser ? (
                    <>
                        <Button color="inherit" onClick={() => navigate("/dashboard")}>
                            Dashboard
                        </Button>
                        <Button color="inherit" onClick={handleLogout}>
                            Cerrar sesión
                        </Button>
                    </>
                ) : (
                    <>
                        <Button color="inherit" onClick={() => navigate("/signup")}>
                            Registrarse
                        </Button>
                        <Button color="inherit" onClick={() => navigate("/")}>
                            Iniciar sesión
                        </Button>
                    </>
                )}
            </StyledToolbar>
        </AppBar>
    );
};

export default NavBar;

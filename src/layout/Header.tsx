import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";


const pages = ["Films", "Planets", "People", "Vehicles"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");

  function ClickCerrar() {
    localStorage.removeItem("user");
    navigate("/");
  }

  function ActivarLogin() {
    const usuario: any = localStorage.getItem("user");
    const perfil = JSON.parse(usuario);

    if (!perfil) {
      navigate("/login");
    } else {
      setUsuario(perfil.usuario);
    }
  }

  useEffect(() => {
    ActivarLogin();
  }, []);

  return (
    <AppBar position="fixed" sx={{ bgcolor: "#000000" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              src="https://frontendfactored.s3.us-west-1.amazonaws.com/logo.png"
              style={{ height: "50px" }}
            />
          </Typography>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              src="https://frontendfactored.s3.us-west-1.amazonaws.com/logo.png"
              style={{ height: "50px" }}
            />
          </Typography>
          <Box sx={{ flexGrow: 12, display: { xs: "none", md: "flex" } }}></Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar src="https://frontendfactored.s3.us-west-1.amazonaws.com/ponchobt.png" />
            </IconButton>
            <Typography sx={{ minWidth: 100 }}>{usuario}</Typography>
            <Typography sx={{ minWidth: 100 }}>
              <Button onClick={ClickCerrar} variant="contained">
                log out
              </Button>
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;

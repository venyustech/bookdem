import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { createTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import styled from "styled-components";
import HideOnScroll from "./components/HideOnScroll";
import { useAuth } from "../../context/Auth";
import { getUser } from "../../services/api";
const pages = ["Meu Perfil", "Livros", "Grupos"];
const settings = ["Logout"]; //"Profile", "Account", "Dashboard",

const NavBar = () => {
  const navigate = useNavigate();
  const { token, setToken } = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    if (!token) {
      navigate("/sign-in");
    }
    const promise = getUser(token);
    promise.then((response) => {
      console.log(response.data.profileImg);
      setUser(response.data);
    });
    promise.catch((error) => {
      console.log(error.data.message);
    });
  }, [token, navigate]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    console.log("oi");
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("favorite-books");
    navigate("/sign-in");
  };
  function handlePage(page) {
    if (page === "Meu Perfil") navigate("/myProfile");
    if (page === "Livros") navigate("/books");
    if (page === "Grupos") navigate("/groups");
  }
  const theme = createTheme({
    palette: {
      primary: {
        light: "#f48fb1",
        dark: "#7c4dff",
        contrastText: "#f50057",
        main: "none",
      },
    },
  });
  return (
    <>
      <HideOnScroll>
        <AppBar theme={theme} elevation={0}>
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
                <LogoBookdem src={logo} alt="bookdem"></LogoBookdem>
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={() => handlePage(page)}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

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
                <LogoBookdem src={logo} alt="bookdem"></LogoBookdem>
              </Typography>
              <Box
                theme={theme}
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    sx={{
                      my: 2,
                      color: "#727272",
                      display: "block",
                      fontSize: "15px",
                      letterSpacing: "2px",
                      marginRight: "30px",
                    }}
                    onClick={() => handlePage(page)}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    {user != null ? (
                      <Avatar alt="Remy Sharp" src={user.profileImg} />
                    ) : (
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      />
                    )}
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "40px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" onClick={handleLogout}>
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar sx={{ marginTop: "15px" }} />
    </>
  );
};

const LogoBookdem = styled.img`
  width: 210px;
  @media (max-width: 700px) {
    width: 150px;
  }
`;
export default NavBar;

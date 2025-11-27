import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";

export const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            color="inherit"
            startIcon={<HomeIcon />}
            component={RouterLink}
            to="/"
            sx={{ textTransform: "none", fontSize: "1rem" }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            startIcon={<PeopleIcon />}
            component={RouterLink}
            to="/users"
            sx={{ textTransform: "none", fontSize: "1rem" }}
          >
            Users
          </Button>
          <Button
            color="inherit"
            startIcon={<PeopleIcon />}
            component={RouterLink}
            to="/favourites"
            sx={{ textTransform: "none", fontSize: "1rem" }}
          >
            Favourites
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { Navbar } from "./components/Navbar";
import { Box } from "@mui/material";
import "./App.css";

function App() {
  const element = useRoutes(routes);

  return (
    <>
      <Navbar />
      <Box sx={{ marginTop: "64px" }}>{element}</Box>
    </>
  );
}

export default App;

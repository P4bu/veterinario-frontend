import { Box, Typography } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { Outlet } from "react-router-dom";

const DashboardPage = () => (
  <Box sx={{ display: "flex", height: "100vh" }}>
    <Sidebar />

    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        bgcolor: "#f5f5f5",
      }}
    >
      <Topbar />

      <Typography variant="h4" gutterBottom>
        Bienvenido al Panel
      </Typography>

      <Box sx={{ p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  </Box>
);

export default DashboardPage;

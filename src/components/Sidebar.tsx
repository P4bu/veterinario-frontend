import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PetsIcon from "@mui/icons-material/Pets";
import MasksIcon from "@mui/icons-material/Masks";

const Sidebar = () => (
  <Drawer
    variant="permanent"
    sx={{
      width: 240,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: {
        width: 240,
        boxSizing: "border-box",
        backgroundColor: "#f5f5f5",
      },
    }}
  >
    <List>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <PetsIcon />
        </ListItemIcon>
        <ListItemText primary="Pacientes" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <MasksIcon />
        </ListItemIcon>
        <ListItemText primary="Veterinarios" />
      </ListItemButton>
    </List>
  </Drawer>
);

export default Sidebar;

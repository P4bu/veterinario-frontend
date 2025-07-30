import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Topbar = () => (
  <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Panel Administrativo
      </Typography>
      <IconButton color="inherit">
        <NotificationsIcon />
      </IconButton>
      <IconButton color="inherit">
        <AccountCircle />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Topbar;
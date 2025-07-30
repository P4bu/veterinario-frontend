import Sidebar from './components/Sidebar'
import LoginPage from './pages/LoginPage'
import { Box } from '@mui/material';
import DashboardPage from './pages/DashboardPage';
import Topbar from './components/Topbar';

const App = () => {
  return (
    <>
      {/* <LoginPage /> */}

      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1 }}>
          <Topbar />
          <DashboardPage />
        </Box>
      </Box>
    </>
    
  )
}

export default App
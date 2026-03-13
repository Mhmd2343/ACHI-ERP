import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function AppLayout() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: '#F5F6FA',
          minHeight: '100vh',
          overflow: 'auto',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

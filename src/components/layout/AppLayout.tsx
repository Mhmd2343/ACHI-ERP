import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function AppLayout() {
  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        bgcolor: 'background.default',
      }}
    >
      <Sidebar />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: '100vh',
          overflowX: 'hidden',
          bgcolor: 'transparent',
        }}
      >
        <Box
          sx={{
            minHeight: '100vh',
            px: { xs: 1.5, md: 2 },
            py: { xs: 1.25, md: 1.5 },
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: '1380px',
            }}
          >
            <Outlet />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
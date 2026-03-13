import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from '@mui/material';
import { Logout } from '@mui/icons-material';

const TinyDiamond = ({ active = false }: { active?: boolean }) => (
  <Box
    sx={{
      width: 7,
      height: 7,
      transform: 'rotate(45deg)',
      border: active ? 'none' : '1px solid #8F887C',
      bgcolor: active ? '#F2A100' : 'transparent',
    }}
  />
);

const TinyRing = () => (
  <Box
    sx={{
      width: 7,
      height: 7,
      borderRadius: '50%',
      border: '1px solid #8F887C',
    }}
  />
);

const TinyRingDot = () => (
  <Box
    sx={{
      width: 8,
      height: 8,
      borderRadius: '50%',
      border: '1px solid #8F887C',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Box
      sx={{
        width: 2.5,
        height: 2.5,
        borderRadius: '50%',
        bgcolor: '#8F887C',
      }}
    />
  </Box>
);

const TinySquare = () => (
  <Box
    sx={{
      width: 7,
      height: 7,
      border: '1px solid #8F887C',
    }}
  />
);

const TinyStack = () => (
  <Box
    sx={{
      width: 8,
      height: 8,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
  >
    <Box sx={{ height: 1, bgcolor: '#8F887C' }} />
    <Box sx={{ height: 1, bgcolor: '#8F887C' }} />
    <Box sx={{ height: 1, bgcolor: '#8F887C' }} />
  </Box>
);

const TinyFlag = () => (
  <Box
    sx={{
      width: 8,
      height: 8,
      position: 'relative',
    }}
  >
    <Box
      sx={{
        position: 'absolute',
        left: 1,
        top: 0,
        width: 1,
        height: 8,
        bgcolor: '#8F887C',
      }}
    />
    <Box
      sx={{
        position: 'absolute',
        left: 2,
        top: 1,
        width: 4,
        height: 3,
        bgcolor: '#8F887C',
        clipPath: 'polygon(0 0, 100% 20%, 75% 100%, 0 80%)',
      }}
    />
  </Box>
);

const DRAWER_WIDTH = 228;

const navSections = [
  {
    title: 'Overview',
    items: [{ label: 'Dashboard', icon: <TinyDiamond />, path: '/' }],
  },
  {
    title: 'Commercial',
    items: [
      { label: 'CRM / Sales', icon: <TinyRingDot />, path: '/crm' },
      { label: 'Quote Builder', icon: <TinySquare />, path: '/quotations' },
    ],
  },
  {
    title: 'Operations',
    items: [
      { label: 'Projects', icon: <TinyRing />, path: '/crm/projects' },
      { label: 'Inventory', icon: <TinyStack />, path: '/inventory' },
      { label: 'Crew & HR', icon: <TinyRingDot />, path: '/activities' },
    ],
  },
  {
    title: 'Finance',
    items: [{ label: 'Finance', icon: <TinyDiamond />, path: '/crm/invoices' }],
  },
  {
    title: 'Compliance',
    items: [{ label: 'Safety', icon: <TinyFlag />, path: '/reports' }],
  },
];

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            px: 2.2,
            py: 1.7,
            borderBottom: '1px solid rgba(255,184,0,0.08)',
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Oxanium', sans-serif",
              fontWeight: 700,
              fontSize: '0.95rem',
              lineHeight: 1.05,
              color: '#F2A100',
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
            }}
          >
            ACHI SCAFFOLDING
          </Typography>

          <Typography
            sx={{
              mt: 0.45,
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: '0.66rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#7A7468',
            }}
          >
            ERP SYSTEM · V2.0
          </Typography>
        </Box>

        <Box sx={{ flex: 1, overflowY: 'auto', py: 0.9 }}>
          {navSections.map((section) => (
            <Box key={section.title} sx={{ mb: 0.8 }}>
              <Typography
                sx={{
                  px: 2.2,
                  py: 0.8,
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: '0.62rem',
                  fontWeight: 500,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: '#6F695D',
                }}
              >
                {section.title}
              </Typography>

              <List sx={{ p: 0 }}>
                {section.items.map((item) => {
                  const active = isActive(item.path);

                  return (
                    <ListItemButton
                      key={item.path}
                      onClick={() => navigate(item.path)}
                      sx={{
                        minHeight: 38,
                        px: 2.2,
                        display: 'flex',
                        alignItems: 'center',
                        borderLeft: active ? '2px solid #F2A100' : '2px solid transparent',
                        bgcolor: active ? 'rgba(242,161,0,0.08)' : 'transparent',
                        '&:hover': {
                          bgcolor: active
                            ? 'rgba(242,161,0,0.10)'
                            : 'rgba(255,255,255,0.015)',
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 20,
                          color: active ? '#F2A100' : '#8F887C',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mt: '1px',
                        }}
                      >
                        <Box
                          sx={{
                            color: active ? '#F2A100' : '#8F887C',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {item.label === 'Dashboard' ? (
                            <TinyDiamond active={active} />
                          ) : item.label === 'Finance' ? (
                            <TinyDiamond active={false} />
                          ) : (
                            item.icon
                          )}
                        </Box>
                      </ListItemIcon>

                      <ListItemText
                        primary={item.label}
                        sx={{ ml: 0.6 }}
                        primaryTypographyProps={{
                          fontFamily: "'Oxanium', sans-serif",
                          fontWeight: active ? 700 : 600,
                          fontSize: '0.86rem',
                          letterSpacing: '0.01em',
                          color: active ? '#F5F1E8' : '#CFC7BA',
                        }}
                      />
                    </ListItemButton>
                  );
                })}
              </List>
            </Box>
          ))}
        </Box>

        <Box sx={{ mt: 'auto', borderTop: '1px solid rgba(255,184,0,0.08)' }}>
          <Box sx={{ px: 2.2, py: 1.4 }}>
            <Typography
              sx={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.62rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#6F695D',
                mb: 0.9,
              }}
            >
              System Live
            </Typography>

            <Typography
              sx={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: '0.68rem',
                color: '#7A7468',
                lineHeight: 1.7,
              }}
            >
              IT 4
              <Box component="span" sx={{ mx: 2.2 }}>
                LB 3
              </Box>
              DK 3
            </Typography>
          </Box>

          <Divider />

          <List sx={{ p: 0 }}>
            <ListItemButton
              onClick={() => navigate('/login')}
              sx={{
                minHeight: 38,
                px: 2.2,
                '&:hover': {
                  bgcolor: 'rgba(240,68,56,0.05)',
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 20,
                  color: '#F97066',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '& svg': { fontSize: 14 },
                }}
              >
                <Logout />
              </ListItemIcon>

              <ListItemText
                primary="Logout"
                sx={{ ml: 0.6 }}
                primaryTypographyProps={{
                  fontFamily: "'Oxanium', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.86rem',
                  color: '#F97066',
                }}
              />
            </ListItemButton>
          </List>
        </Box>
      </Box>
    </Drawer>
  );
}
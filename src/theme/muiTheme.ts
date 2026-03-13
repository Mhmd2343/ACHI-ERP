import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#F2A100',
      light: '#FFB52E',
      dark: '#C98500',
      contrastText: '#050505',
    },
    secondary: {
      main: '#090909',
      light: '#111111',
      dark: '#050505',
      contrastText: '#F5F1E8',
    },
    success: {
      main: '#20C05C',
    },
    warning: {
      main: '#F2A100',
    },
    error: {
      main: '#F04A3A',
    },
    info: {
      main: '#F6F3EC',
    },
    background: {
      default: '#050505',
      paper: '#0A0A0A',
    },
    text: {
      primary: '#F5F1E8',
      secondary: '#7A7468',
    },
    divider: 'rgba(255, 184, 0, 0.08)',
  },
  typography: {
    fontFamily: "'Oxanium', sans-serif",
    h4: {
      fontFamily: "'Oxanium', sans-serif",
      fontWeight: 700,
      fontSize: '1.55rem',
      lineHeight: 1,
      letterSpacing: '0.01em',
      textTransform: 'uppercase',
    },
    h5: {
      fontFamily: "'Oxanium', sans-serif",
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: 1,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
    },
    h6: {
      fontFamily: "'Oxanium', sans-serif",
      fontWeight: 700,
      fontSize: '0.88rem',
      lineHeight: 1,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
    },
    subtitle1: {
      fontFamily: "'Oxanium', sans-serif",
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
    },
    subtitle2: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontWeight: 500,
      fontSize: '0.72rem',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: '#7A7468',
    },
    body1: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: '0.82rem',
      color: '#D9D2C5',
    },
    body2: {
      fontFamily: "'IBM Plex Mono', monospace",
      fontSize: '0.74rem',
      color: '#7A7468',
    },
    button: {
      fontFamily: "'Oxanium', sans-serif",
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          backgroundColor: '#050505',
        },
        body: {
          backgroundColor: '#050505',
          color: '#F5F1E8',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRight: '1px solid rgba(255, 184, 0, 0.08)',
          background: '#080808',
          backgroundImage: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#0A0A0A',
          border: '1px solid rgba(255, 184, 0, 0.08)',
          borderRadius: 0,
          boxShadow: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          borderRadius: 0,
          boxShadow: 'none',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(255, 184, 0, 0.08)',
        },
      },
    },
  },
});

export default theme;
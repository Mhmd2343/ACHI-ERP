import { Box, Typography } from '@mui/material';

interface TopBarProps {
  title: string;
  subtitle?: string;
}

const now = new Date();
const formattedDate = now.toLocaleDateString('en-GB', {
  weekday: 'short',
  day: '2-digit',
  month: 'short',
  year: 'numeric',
});

export default function TopBar({ title }: TopBarProps) {
  return (
    <Box
      sx={{
        mb: 1.3,
        border: '1px solid rgba(255,184,0,0.08)',
        bgcolor: '#0A0A0A',
      }}
    >
      <Box
        sx={{
          px: 2,
          py: 0.7,
          borderBottom: '1px solid rgba(255,184,0,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Oxanium', sans-serif",
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#7A7468',
          }}
        >
          ACHI › {title}
        </Typography>

        <Typography
          sx={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: '0.68rem',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#7D8592',
          }}
        >
          {formattedDate}
        </Typography>
      </Box>

      <Box
        sx={{
          px: 2,
          py: 1.15,
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Oxanium', sans-serif",
            fontWeight: 700,
            fontSize: '1.2rem',
            lineHeight: 1,
            color: '#F5F1E8',
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
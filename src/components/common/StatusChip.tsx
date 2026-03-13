import { Box, Typography } from '@mui/material';

const statusMap: Record<
  string,
  { bg: string; color: string; border: string }
> = {
  NEW: {
    bg: 'rgba(46, 144, 250, 0.10)',
    color: '#53B1FD',
    border: 'rgba(46, 144, 250, 0.22)',
  },
  DEPLOYED: {
    bg: 'rgba(36, 199, 104, 0.10)',
    color: '#22C55E',
    border: 'rgba(36, 199, 104, 0.22)',
  },
  UNPAID: {
    bg: 'rgba(240, 68, 56, 0.10)',
    color: '#F04438',
    border: 'rgba(240, 68, 56, 0.22)',
  },
  AWAITING: {
    bg: 'rgba(245, 160, 0, 0.10)',
    color: '#F5A000',
    border: 'rgba(245, 160, 0, 0.22)',
  },
  COLLECTED: {
    bg: 'rgba(36, 199, 104, 0.10)',
    color: '#22C55E',
    border: 'rgba(36, 199, 104, 0.22)',
  },
  OVERDUE: {
    bg: 'rgba(240, 68, 56, 0.10)',
    color: '#F04438',
    border: 'rgba(240, 68, 56, 0.22)',
  },
};

export default function StatusChip({ status }: { status: string }) {
  const key = status.toUpperCase();
  const colors = statusMap[key] || {
    bg: 'rgba(152,162,179,0.10)',
    color: '#98A2B3',
    border: 'rgba(152,162,179,0.20)',
  };

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        px: 1,
        py: 0.35,
        bgcolor: colors.bg,
        border: `1px solid ${colors.border}`,
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Rajdhani', sans-serif",
          fontSize: '0.78rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: colors.color,
          lineHeight: 1,
        }}
      >
        {status}
      </Typography>
    </Box>
  );
}
import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface StatCardProps {
  label: string;
  value: string;
  subtext?: string;
  accent?: 'amber' | 'green' | 'red' | 'white';
  rightSlot?: ReactNode;
}

const accentMap = {
  amber: '#F2A100',
  green: '#20C05C',
  red: '#F04A3A',
  white: '#F6F3EC',
};

export default function StatCard({
  label,
  value,
  subtext,
  accent = 'white',
  rightSlot,
}: StatCardProps) {
  return (
<Box
  sx={{
minHeight: 92,
px: 1.8,
py: 1.35,
border: 'none',
bgcolor: 'transparent',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  }}

    >
      <Box>
<Typography
  sx={{
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '0.68rem',
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: '#6F695D',
    mb: 1,
  }}
>
  {label}
</Typography>
<Typography
  sx={{
    fontFamily: "'Oxanium', sans-serif",
   fontSize: { xs: '1.75rem', md: '2.05rem' },
    lineHeight: 0.95,
    fontWeight: 700,
    letterSpacing: '0',
    color: accentMap[accent],
    mb: 0.55,
  }}
>
  {value}
</Typography>

        {subtext && (
<Typography
  sx={{
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '0.76rem',
    color: '#6F695D',
  }}
>
  {subtext}
</Typography>
        )}
      </Box>

      {rightSlot ? <Box sx={{ mt: 0.4 }}>{rightSlot}</Box> : null}
    </Box>
  );
}
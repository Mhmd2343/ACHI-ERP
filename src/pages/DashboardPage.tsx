import { Box, Grid, Typography } from '@mui/material';
import TopBar from '../components/layout/TopBar';
import StatCard from '../components/common/StatCard';
import StatusChip from '../components/common/StatusChip';

const metrics = [
  {
    label: 'Pipeline Value',
    value: '€375,500',
    subtext: '9 active leads',
    accent: 'amber' as const,
  },
  {
    label: 'Invoiced (Paid)',
    value: '€93,750',
    subtext: 'YTD collected',
    accent: 'green' as const,
  },
  {
    label: 'Outstanding',
    value: '€61,800',
    subtext: '4 unpaid invoices',
    accent: 'red' as const,
  },
  {
    label: 'Active Sites',
    value: '3',
    subtext: '19 crew on site',
    accent: 'white' as const,
  },
  {
    label: 'Team Deployed',
    value: '10/12',
    subtext: '2 available now',
    accent: 'white' as const,
  },
];

const activeProjects = [
  {
    project: 'Khoury Tower Ph.1',
    client: 'Elias Khoury & Sons',
    system: 'Ringlock',
    area: '1840m²',
    progress: 62,
  },
  {
    project: 'Levant Block A',
    client: 'Levant Properties',
    system: 'Cuplock',
    area: '2600m²',
    progress: 45,
  },
  {
    project: 'Levant Block B',
    client: 'Levant Properties',
    system: 'Cuplock',
    area: '1380m²',
    progress: 20,
  },
];

const marketBreakdown = [
  { market: 'Italy', leads: 4, value: '€98,500', width: '40%' },
  { market: 'Lebanon', leads: 3, value: '€144,000', width: '58%' },
  { market: 'Denmark', leads: 3, value: '€133,000', width: '55%' },
];

const invoiceStatus = [
  { label: 'Collected', value: '€93,750', color: '#20C05C' },
  { label: 'Awaiting', value: '€47,800', color: '#F2A100' },
  { label: 'Overdue', value: '€14,000', color: '#F04A3A' },
];

const pipelineStage = [
  { status: 'NEW', leads: '3 leads', value: '€99,000' },
  { status: 'AWAITING', leads: '2 leads', value: '€126,500' },
  { status: 'NEW', leads: '4 leads', value: '€150,000' },
];

const crewAvailability = [
  { initials: 'KM', name: 'Khalil Mansour', role: 'Lead Scaffolder', status: 'DEPLOYED' },
  { initials: 'FA', name: 'Fadi Akel', role: 'Site Supervisor', status: 'DEPLOYED' },
  { initials: 'RH', name: 'Rami Haddad', role: 'Safety Officer', status: 'AWAITING' },
];

const recentInvoices = [
  {
    code: 'INV-2026-041',
    client: 'Levant Properties',
    value: '€22,250',
    status: 'UNPAID',
  },
  {
    code: 'INV-2026-039',
    client: 'Khoury Tower',
    value: '€31,500',
    status: 'COLLECTED',
  },
  {
    code: 'INV-2026-035',
    client: 'Nordic Build DK',
    value: '€18,050',
    status: 'AWAITING',
  },
];

function SectionPanel({
  title,
  children,
  minHeight,
}: {
  title: string;
  children: React.ReactNode;
  minHeight?: number;
}) {
  return (
    <Box
      sx={{
border: '1px solid rgba(255,184,0,0.08)',
bgcolor: '#0A0A0A',
        minHeight,
      }}
    >
      <Box
        sx={{
          px: 1.8,
          py: 1.25,
borderBottom: '1px solid rgba(255,184,0,0.08)',
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Rajdhani', sans-serif",
            fontWeight: 700,
            fontSize: '1.45rem',
            lineHeight: 1,
            letterSpacing: '0.01em',
            textTransform: 'uppercase',
color: '#F5F1E8',
          }}
        >
          {title}
        </Typography>
      </Box>

<Box sx={{ p: 1.35 }}>{children}</Box>
    </Box>
  );
}

function ProgressBar({ value }: { value: number }) {
  return (
    <Box
      sx={{
        width: '100%',
        height: 4,
bgcolor: '#3A3A3A',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          width: `${value}%`,
          height: '100%',
          bgcolor: '#F5A000',
        }}
      />
    </Box>
  );
}

export default function DashboardPage() {
  return (
    <Box>
      <TopBar title="Command Centre" subtitle="Daily operational overview for ACHI Scaffolding." />

<Box
  sx={{
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    mb: 1.2,
    border: '1px solid rgba(255,184,0,0.08)',
    bgcolor: '#0A0A0A',
  }}
>
  {metrics.map((item, index) => (
    <Box
      key={item.label}
      sx={{
        borderRight:
          index !== metrics.length - 1
            ? '1px solid rgba(255,184,0,0.08)'
            : 'none',
      }}
    >
      <StatCard
        label={item.label}
        value={item.value}
        subtext={item.subtext}
        accent={item.accent}
      />
    </Box>
  ))}
</Box>

<Grid container spacing={1.1} sx={{ mb: 1.1 }}>
          <Grid size={{ xs: 12, lg: 7 }}>
          <SectionPanel title="Active Projects" minHeight={414}>
            <Box>
              <Grid
                container
                sx={{
                  px: 0.2,
                  pb: 1,
                  borderBottom: '1px solid rgba(245,160,0,0.08)',
                  mb: 1.2,
                }}
              >
                <Grid size={5}>
                  <Typography sx={headerCellStyle}>Project</Typography>
                </Grid>
                <Grid size={2}>
                  <Typography sx={headerCellStyle}>System</Typography>
                </Grid>
                <Grid size={2}>
                  <Typography sx={headerCellStyle}>Area</Typography>
                </Grid>
                <Grid size={3}>
                  <Typography sx={headerCellStyle}>Progress</Typography>
                </Grid>
              </Grid>

              {activeProjects.map((row) => (
                <Grid
                  container
                  key={row.project}
                  sx={{
                    py: 1.3,
                    borderBottom: '1px solid rgba(245,160,0,0.05)',
                  }}
                >
                  <Grid size={5}>
                    <Typography sx={mainCellStyle}>{row.project}</Typography>
                    <Typography sx={subCellStyle}>{row.client}</Typography>
                  </Grid>
                  <Grid size={2}>
                    <Typography sx={valueCellStyle}>{row.system}</Typography>
                  </Grid>
                  <Grid size={2}>
                    <Typography sx={valueCellStyle}>{row.area}</Typography>
                  </Grid>
                  <Grid size={3}>
                    <Typography sx={{ ...valueCellStyle, mb: 0.8 }}>
                      {row.progress}%
                    </Typography>
                    <ProgressBar value={row.progress} />
                  </Grid>
                </Grid>
              ))}
            </Box>
          </SectionPanel>
        </Grid>

        <Grid size={{ xs: 12, lg: 5 }}>
          <SectionPanel title="Market Breakdown" minHeight={235}>
            <Box>
              {marketBreakdown.map((item, index) => (
                <Box
                  key={item.market}
                  sx={{
                    pb: 1.6,
                    mb: 1.6,
                    borderBottom:
                      index !== marketBreakdown.length - 1
                        ? '1px solid rgba(245,160,0,0.05)'
                        : 'none',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'space-between',
                      gap: 1,
                      mb: 0.55,
                    }}
                  >
                    <Box>
                      <Typography sx={mainCellStyle}>{item.market}</Typography>
                      <Typography sx={subCellStyle}>{item.leads} leads</Typography>
                    </Box>

                    <Typography
                      sx={{
                        fontFamily: "'Rajdhani', sans-serif",
                        fontWeight: 700,
                        fontSize: '1.05rem',
color: '#F2A100',
                      }}
                    >
                      {item.value}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      height: 4,
                      bgcolor: 'rgba(255,255,255,0.12)',
                    }}
                  >
                    <Box
                      sx={{
                        width: item.width,
                        height: '100%',
                        bgcolor: '#F5A000',
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </SectionPanel>

          <Box sx={{ height: 1.6 }} />

          <SectionPanel title="Invoice Status" minHeight={163}>
            <Box>
              {invoiceStatus.map((item, index) => (
                <Box
                  key={item.label}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    py: 1.15,
                    borderBottom:
                      index !== invoiceStatus.length - 1
                        ? '1px solid rgba(245,160,0,0.05)'
                        : 'none',
                  }}
                >
                  <Typography sx={valueCellStyle}>{item.label}</Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Rajdhani', sans-serif",
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: item.color,
                    }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </SectionPanel>
        </Grid>
      </Grid>

      <Grid container spacing={1.6}>
        <Grid size={{ xs: 12, md: 4 }}>
          <SectionPanel title="Pipeline Stage" minHeight={205}>
            <Box>
              {pipelineStage.map((item, index) => (
                <Box
                  key={`${item.status}-${index}`}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    py: 1.15,
                    borderBottom:
                      index !== pipelineStage.length - 1
                        ? '1px solid rgba(245,160,0,0.05)'
                        : 'none',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.1 }}>
                    <StatusChip status={item.status} />
                    <Typography sx={subCellStyle}>{item.leads}</Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: "'Rajdhani', sans-serif",
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: '#98A2B3',
                    }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </SectionPanel>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <SectionPanel title="Crew Availability" minHeight={205}>
            <Box>
              {crewAvailability.map((person, index) => (
                <Box
                  key={person.name}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 1,
                    py: 1.15,
                    borderBottom:
                      index !== crewAvailability.length - 1
                        ? '1px solid rgba(245,160,0,0.05)'
                        : 'none',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.1 }}>
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        border: '1px solid rgba(245,160,0,0.08)',
                        bgcolor: '#0B1118',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: "'Rajdhani', sans-serif",
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        color: '#667085',
                      }}
                    >
                      {person.initials}
                    </Box>

                    <Box>
                      <Typography sx={mainCellStyle}>{person.name}</Typography>
                      <Typography sx={subCellStyle}>{person.role}</Typography>
                    </Box>
                  </Box>

                  <StatusChip status={person.status} />
                </Box>
              ))}
            </Box>
          </SectionPanel>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <SectionPanel title="Recent Invoices" minHeight={205}>
            <Box>
              {recentInvoices.map((invoice, index) => (
                <Box
                  key={invoice.code}
                  sx={{
                    py: 1.15,
                    borderBottom:
                      index !== recentInvoices.length - 1
                        ? '1px solid rgba(245,160,0,0.05)'
                        : 'none',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: 1,
                    }}
                  >
                    <Box>
                      <Typography sx={valueCellStyle}>{invoice.code}</Typography>
                      <Typography sx={subCellStyle}>{invoice.client}</Typography>
                    </Box>

                    <Typography
                      sx={{
                        fontFamily: "'Rajdhani', sans-serif",
                        fontWeight: 700,
                        fontSize: '1rem',
                        color: '#F8FAFC',
                      }}
                    >
                      {invoice.value}
                    </Typography>
                  </Box>

                  <Box sx={{ mt: 0.8 }}>
                    <StatusChip status={invoice.status} />
                  </Box>
                </Box>
              ))}
            </Box>
          </SectionPanel>
        </Grid>
      </Grid>
    </Box>
  );
}

const headerCellStyle = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: '0.66rem',
  fontWeight: 500,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: '#6F695D',
};

const mainCellStyle = {
  fontFamily: "'Oxanium', sans-serif",
  fontWeight: 700,
  fontSize: '0.98rem',
  color: '#F5F1E8',
  lineHeight: 1.05,
};

const subCellStyle = {
  mt: 0.35,
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: '0.72rem',
  color: '#6F695D',
};
const valueCellStyle = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontWeight: 500,
  fontSize: '0.78rem',
  color: '#B8B0A3',
};
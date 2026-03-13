import { Box, Grid, Card, CardContent, Typography, Button, Stack, Chip } from '@mui/material';
import {
  Add,
  People,
  BusinessCenter,
  Description,
  AssignmentTurnedIn,
  ReceiptLong,
  FolderOpen,
  ArrowForward,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/layout/TopBar';

export default function CRMPage() {
  const navigate = useNavigate();

  const crmSteps = [
    {
      title: 'New Entry',
      description: 'Create a new prospect, lead, or client and capture the first contact details.',
      icon: <Add />,
      color: '#28509E',
      bg: 'rgba(40,80,158,0.10)',
      action: () => navigate('/crm/new'),
      buttonLabel: 'Add New',
    },
    {
      title: 'Prospective Projects',
      description: 'Track project opportunities, locations, attached files, and early project details.',
      icon: <FolderOpen />,
      color: '#7C3AED',
      bg: 'rgba(124,58,237,0.10)',
      action: () => navigate('/crm/projects'),
      buttonLabel: 'View Projects',
    },
    {
      title: 'Site Survey / Quotation',
      description: 'Follow quotation preparation and track whether it is confirmed or not confirmed.',
      icon: <Description />,
      color: '#EA580C',
      bg: 'rgba(234,88,12,0.10)',
      action: () => navigate('/quotations'),
      buttonLabel: 'View Quotations',
    },
    {
      title: 'Job Orders',
      description: 'When a quotation is confirmed, create a job order and manage execution actions.',
      icon: <AssignmentTurnedIn />,
      color: '#16A34A',
      bg: 'rgba(22,163,74,0.10)',
      action: () => navigate('/crm/job-orders'),
      buttonLabel: 'View Job Orders',
    },
    {
      title: 'Invoices',
      description: 'After the job is completed, create and manage invoices for completed work.',
      icon: <ReceiptLong />,
      color: '#D97706',
      bg: 'rgba(217,119,6,0.10)',
      action: () => navigate('/crm/invoices'),
      buttonLabel: 'View Invoices',
    },
  ];

  const quickStats = [
    { label: 'Prospects', value: 12, icon: <People />, color: '#28509E', bg: 'rgba(40,80,158,0.10)' },
    { label: 'Leads', value: 28, icon: <BusinessCenter />, color: '#7C3AED', bg: 'rgba(124,58,237,0.10)' },
    { label: 'Active Projects', value: 9, icon: <FolderOpen />, color: '#EA580C', bg: 'rgba(234,88,12,0.10)' },
    { label: 'Pending Invoices', value: 4, icon: <ReceiptLong />, color: '#16A34A', bg: 'rgba(22,163,74,0.10)' },
  ];

  return (
    <Box>
      <TopBar
        title="CRM"
        subtitle="Manage prospects, leads, projects, quotations, job orders, and invoices from one place."
      />

      <Box sx={{ p: 3 }}>
        <Card
          sx={{
            mb: 3,
            borderRadius: 3,
            boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              justifyContent="space-between"
              alignItems={{ xs: 'flex-start', md: 'center' }}
              spacing={2}
            >
              <Box>
                <Typography variant="h5" fontWeight={700} sx={{ color: '#0F172A', mb: 1 }}>
                  ACHI CRM Workflow
                </Typography>

                <Typography variant="body2" sx={{ color: '#64748B', mb: 2, maxWidth: 820 }}>
                  This CRM section follows your scaffolding business process from first inquiry to final
                  invoice: new prospect or lead, prospective project, files, site survey and quotation,
                  confirmed quotation, job order, then invoicing after completion.
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  <Chip label="Prospect / Lead / Client" variant="outlined" />
                  <Chip label="Project Files" variant="outlined" />
                  <Chip label="Quotation Status" variant="outlined" />
                  <Chip label="Job Order" variant="outlined" />
                  <Chip label="Invoice" variant="outlined" />
                </Stack>
              </Box>

              <Button
                variant="contained"
                startIcon={<Add />}
                onClick={() => navigate('/crm/new')}
                sx={{
                  backgroundColor: '#28509E',
                  textTransform: 'none',
                  borderRadius: 2,
                  px: 3,
                  '&:hover': {
                    backgroundColor: '#1E3A73',
                  },
                }}
              >
                New CRM Entry
              </Button>
            </Stack>
          </CardContent>
        </Card>

        <Grid container spacing={2.5} sx={{ mb: 3 }}>
          {quickStats.map((item) => (
            <Grid key={item.label} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
                  height: '100%',
                }}
              >
                <CardContent>
                  <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Box>
                      <Typography variant="body2" sx={{ color: '#64748B', mb: 0.5 }}>
                        {item.label}
                      </Typography>
                      <Typography variant="h4" fontWeight={700} sx={{ color: '#0F172A' }}>
                        {item.value}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        backgroundColor: item.bg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: item.color,
                      }}
                    >
                      {item.icon}
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={2.5}>
          {crmSteps.map((step) => (
            <Grid key={step.title} size={{ xs: 12, md: 6, xl: 4 }}>
              <Card
                sx={{
                  borderRadius: 3,
                  height: '100%',
                  boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
                  transition: '0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 12px 30px rgba(15, 23, 42, 0.08)',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        backgroundColor: step.bg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: step.color,
                      }}
                    >
                      {step.icon}
                    </Box>

                    <Typography variant="h6" fontWeight={700} sx={{ color: '#0F172A' }}>
                      {step.title}
                    </Typography>
                  </Stack>

                  <Typography variant="body2" sx={{ color: '#64748B', mb: 3, minHeight: 66 }}>
                    {step.description}
                  </Typography>

                  <Button
                    variant="outlined"
                    endIcon={<ArrowForward />}
                    onClick={step.action}
                    sx={{
                      borderColor: step.color,
                      color: step.color,
                      textTransform: 'none',
                      borderRadius: 2,
                      '&:hover': {
                        borderColor: step.color,
                        backgroundColor: step.bg,
                      },
                    }}
                  >
                    {step.buttonLabel}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
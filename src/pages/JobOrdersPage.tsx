import { Box, Grid, Card, CardContent, Typography, Button, Stack, Chip } from '@mui/material';
import {
  AssignmentTurnedIn,
  Add,
  LocationOn,
  Business,
  Construction,
  Visibility,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/layout/TopBar';

interface JobOrder {
  id: number;
  project: string;
  company: string;
  location: string;
  supervisor: string;
  startDate: string;
  status: 'Pending' | 'In Progress' | 'Completed';
}

const jobOrders: JobOrder[] = [
  {
    id: 1,
    project: 'Bridge Access Platform',
    company: 'InfraWorks',
    location: 'Tripoli',
    supervisor: 'Ahmed Khaled',
    startDate: '2026-03-14',
    status: 'In Progress',
  },
  {
    id: 2,
    project: 'Warehouse Façade Scaffolding',
    company: 'Cedars Industrial Group',
    location: 'Jounieh',
    supervisor: 'Rami T.',
    startDate: '2026-03-18',
    status: 'Pending',
  },
  {
    id: 3,
    project: 'Residential Tower Shoring',
    company: 'Urban Build Co.',
    location: 'Dbayeh',
    supervisor: 'Maya H.',
    startDate: '2026-03-05',
    status: 'Completed',
  },
];

const statusStyles = {
  Pending: { color: '#EA580C', bg: 'rgba(234,88,12,0.1)' },
  'In Progress': { color: '#28509E', bg: 'rgba(40,80,158,0.1)' },
  Completed: { color: '#16A34A', bg: 'rgba(22,163,74,0.1)' },
};

export default function JobOrdersPage() {
  const navigate = useNavigate();

  return (
    <Box>
      <TopBar
        title="Job Orders"
        subtitle="Manage confirmed projects that are currently being executed."
      />

      <Box sx={{ p: 3 }}>
        <Card
          sx={{
            mb: 3,
            borderRadius: 3,
            boxShadow: '0 8px 24px rgba(15,23,42,0.05)',
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
                <Typography variant="h5" fontWeight={700}>
                  Execution Phase
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748B', mt: 1 }}>
                  Job orders are created when a quotation is confirmed. This section tracks
                  scaffolding installation, project supervision, and execution status.
                </Typography>
              </Box>

              <Button
                variant="contained"
                startIcon={<Add />}
                sx={{
                  backgroundColor: '#28509E',
                  textTransform: 'none',
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: '#1E3A73',
                  },
                }}
              >
                Create Job Order
              </Button>
            </Stack>
          </CardContent>
        </Card>

        <Grid container spacing={2.5}>
          {jobOrders.map((job) => {
            const status = statusStyles[job.status];

            return (
              <Grid key={job.id} size={{ xs: 12, md: 6, xl: 4 }}>
                <Card
                  sx={{
                    borderRadius: 3,
                    height: '100%',
                    boxShadow: '0 8px 24px rgba(15,23,42,0.05)',
                    transition: '0.2s',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0 12px 30px rgba(15,23,42,0.08)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ mb: 2 }}
                    >
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <Construction sx={{ color: '#28509E' }} />
                        <Typography variant="h6" fontWeight={700}>
                          {job.project}
                        </Typography>
                      </Stack>

                      <Chip
                        label={job.status}
                        sx={{
                          color: status.color,
                          backgroundColor: status.bg,
                          fontWeight: 600,
                        }}
                      />
                    </Stack>

                    <Stack spacing={1.2} sx={{ mb: 2 }}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Business sx={{ fontSize: 18, color: '#64748B' }} />
                        <Typography variant="body2">{job.company}</Typography>
                      </Stack>

                      <Stack direction="row" spacing={1} alignItems="center">
                        <LocationOn sx={{ fontSize: 18, color: '#64748B' }} />
                        <Typography variant="body2">{job.location}</Typography>
                      </Stack>

                      <Typography variant="body2" sx={{ color: '#475569' }}>
                        Supervisor: <strong>{job.supervisor}</strong>
                      </Typography>

                      <Typography variant="body2" sx={{ color: '#475569' }}>
                        Start Date: {job.startDate}
                      </Typography>
                    </Stack>

                    <Button
                      variant="outlined"
                      startIcon={<Visibility />}
                      onClick={() => navigate(`/crm/projects/${job.id}`)}
                      sx={{
                        borderColor: '#28509E',
                        color: '#28509E',
                        textTransform: 'none',
                        borderRadius: 2,
                        '&:hover': {
                          borderColor: '#28509E',
                          backgroundColor: 'rgba(40,80,158,0.06)',
                        },
                      }}
                    >
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
import { useMemo, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Stack,
  TextField,
  MenuItem,
  Chip,
  Avatar,
  Divider,
} from '@mui/material';
import {
  FolderOpen,
  Add,
  Search,
  LocationOn,
  Description,
  Image,
  Visibility,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/layout/TopBar';

type ProjectStatus = 'Prospective' | 'Survey Scheduled' | 'Quotation Pending' | 'Confirmed' | 'Not Confirmed';

interface ProjectItem {
  id: number;
  projectName: string;
  company: string;
  contactPerson: string;
  location: string;
  filesCount: number;
  quotationStatus: ProjectStatus;
  notes: string;
}

const projectsData: ProjectItem[] = [
  {
    id: 1,
    projectName: 'Aishti Mall External Access',
    company: 'Aishti Construction',
    contactPerson: 'Karim N.',
    location: 'Beirut',
    filesCount: 8,
    quotationStatus: 'Prospective',
    notes: 'Client requested initial access system discussion and project photos.',
  },
  {
    id: 2,
    projectName: 'Warehouse Façade Scaffolding',
    company: 'Cedars Industrial Group',
    contactPerson: 'Rami T.',
    location: 'Jounieh',
    filesCount: 5,
    quotationStatus: 'Survey Scheduled',
    notes: 'Site survey expected this week before quotation submission.',
  },
  {
    id: 3,
    projectName: 'Residential Tower Shoring',
    company: 'Urban Build Co.',
    contactPerson: 'Maya H.',
    location: 'Dbayeh',
    filesCount: 11,
    quotationStatus: 'Quotation Pending',
    notes: 'Technical team is preparing quotation and support details.',
  },
  {
    id: 4,
    projectName: 'Bridge Access Platform',
    company: 'InfraWorks',
    contactPerson: 'Joseph S.',
    location: 'Tripoli',
    filesCount: 6,
    quotationStatus: 'Confirmed',
    notes: 'Quotation approved. Ready to convert into job order.',
  },
  {
    id: 5,
    projectName: 'Commercial Complex Maintenance',
    company: 'Prime Estate',
    contactPerson: 'Elie K.',
    location: 'Zahle',
    filesCount: 3,
    quotationStatus: 'Not Confirmed',
    notes: 'Quotation sent but client has not moved forward.',
  },
];

const statusColors: Record<ProjectStatus, { color: string; bg: string }> = {
  Prospective: { color: '#28509E', bg: 'rgba(40,80,158,0.10)' },
  'Survey Scheduled': { color: '#7C3AED', bg: 'rgba(124,58,237,0.10)' },
  'Quotation Pending': { color: '#EA580C', bg: 'rgba(234,88,12,0.10)' },
  Confirmed: { color: '#16A34A', bg: 'rgba(22,163,74,0.10)' },
  'Not Confirmed': { color: '#DC2626', bg: 'rgba(220,38,38,0.10)' },
};

export default function ProjectsPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | ProjectStatus>('All');

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesSearch =
        project.projectName.toLowerCase().includes(search.toLowerCase()) ||
        project.company.toLowerCase().includes(search.toLowerCase()) ||
        project.location.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === 'All' ? true : project.quotationStatus === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  return (
    <Box>
      <TopBar
        title="Prospective Projects"
        subtitle="Manage project opportunities, files, survey status, and quotation progress."
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
                  Project Pipeline
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748B', maxWidth: 850 }}>
                  Each project starts here as a prospective project. From this stage, you can track
                  project files, survey activity, quotation status, and whether the project moves
                  forward to a confirmed job order or stops at quotation stage.
                </Typography>
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

        <Card
          sx={{
            mb: 3,
            borderRadius: 3,
            boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 8 }}>
                <TextField
                  fullWidth
                  placeholder="Search by project name, company, or location"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  InputProps={{
                    startAdornment: <Search sx={{ color: '#94A3B8', mr: 1 }} />,
                  }}
                />
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  select
                  fullWidth
                  label="Quotation Status"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as 'All' | ProjectStatus)}
                >
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="Prospective">Prospective</MenuItem>
                  <MenuItem value="Survey Scheduled">Survey Scheduled</MenuItem>
                  <MenuItem value="Quotation Pending">Quotation Pending</MenuItem>
                  <MenuItem value="Confirmed">Confirmed</MenuItem>
                  <MenuItem value="Not Confirmed">Not Confirmed</MenuItem>
                </TextField>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Grid container spacing={2.5}>
          {filteredProjects.map((project) => {
            const statusStyle = statusColors[project.quotationStatus];

            return (
              <Grid key={project.id} size={{ xs: 12, md: 6, xl: 4 }}>
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
                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 2 }}>
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <Avatar
                          sx={{
                            bgcolor: 'rgba(40,80,158,0.10)',
                            color: '#28509E',
                            width: 46,
                            height: 46,
                          }}
                        >
                          <FolderOpen />
                        </Avatar>

                        <Box>
                          <Typography variant="h6" fontWeight={700} sx={{ color: '#0F172A' }}>
                            {project.projectName}
                          </Typography>
                          <Typography variant="body2" sx={{ color: '#64748B' }}>
                            {project.company}
                          </Typography>
                        </Box>
                      </Stack>

                      <Chip
                        label={project.quotationStatus}
                        sx={{
                          color: statusStyle.color,
                          backgroundColor: statusStyle.bg,
                          fontWeight: 600,
                        }}
                      />
                    </Stack>

                    <Stack spacing={1.25} sx={{ mb: 2 }}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <LocationOn sx={{ fontSize: 18, color: '#64748B' }} />
                        <Typography variant="body2" sx={{ color: '#475569' }}>
                          {project.location}
                        </Typography>
                      </Stack>

                      <Stack direction="row" spacing={1} alignItems="center">
                        <Image sx={{ fontSize: 18, color: '#64748B' }} />
                        <Typography variant="body2" sx={{ color: '#475569' }}>
                          {project.filesCount} file(s) attached
                        </Typography>
                      </Stack>

                      <Stack direction="row" spacing={1} alignItems="center">
                        <Description sx={{ fontSize: 18, color: '#64748B' }} />
                        <Typography variant="body2" sx={{ color: '#475569' }}>
                          Contact: {project.contactPerson}
                        </Typography>
                      </Stack>
                    </Stack>

                    <Divider sx={{ my: 2 }} />

                    <Typography variant="body2" sx={{ color: '#64748B', mb: 3, minHeight: 60 }}>
                      {project.notes}
                    </Typography>

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                      <Button
                        variant="contained"
                        startIcon={<Visibility />}
                        onClick={() => navigate(`/crm/projects/${project.id}`)}
                        sx={{
                          backgroundColor: '#28509E',
                          textTransform: 'none',
                          borderRadius: 2,
                          '&:hover': {
                            backgroundColor: '#1E3A73',
                          },
                        }}
                      >
                        View Details
                      </Button>

                      {project.quotationStatus === 'Confirmed' && (
                        <Button
                          variant="outlined"
                          onClick={() => navigate('/crm/job-orders')}
                          sx={{
                            borderColor: '#16A34A',
                            color: '#16A34A',
                            textTransform: 'none',
                            borderRadius: 2,
                            '&:hover': {
                              borderColor: '#16A34A',
                              backgroundColor: 'rgba(22,163,74,0.06)',
                            },
                          }}
                        >
                          Create Job Order
                        </Button>
                      )}
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>

        {filteredProjects.length === 0 && (
          <Card sx={{ mt: 3, borderRadius: 3 }}>
            <CardContent sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
                No projects found
              </Typography>
              <Typography variant="body2" sx={{ color: '#64748B' }}>
                Try changing the search term or quotation status filter.
              </Typography>
            </CardContent>
          </Card>
        )}
      </Box>
    </Box>
  );
}
import { Box, Card, CardContent, Typography, Grid, Button, Stack, Chip, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import {
  ArrowBack,
  LocationOn,
  Business,
  Person,
  FolderOpen,
  Image,
  InsertDriveFile,
  Description,
  CheckCircle,
  Cancel,
  AssignmentTurnedIn,
  ReceiptLong,
} from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import TopBar from '../components/layout/TopBar';

type QuotationStatus = 'Prospective' | 'Survey Scheduled' | 'Quotation Pending' | 'Confirmed' | 'Not Confirmed';

const statusStyles: Record<QuotationStatus, { color: string; bg: string }> = {
  Prospective: { color: '#28509E', bg: 'rgba(40,80,158,0.10)' },
  'Survey Scheduled': { color: '#7C3AED', bg: 'rgba(124,58,237,0.10)' },
  'Quotation Pending': { color: '#EA580C', bg: 'rgba(234,88,12,0.10)' },
  Confirmed: { color: '#16A34A', bg: 'rgba(22,163,74,0.10)' },
  'Not Confirmed': { color: '#DC2626', bg: 'rgba(220,38,38,0.10)' },
};

const mockProjectDetails = {
  id: 4,
  projectName: 'Bridge Access Platform',
  company: 'InfraWorks',
  contactPerson: 'Joseph S.',
  mobile: '+961 70 123 456',
  email: 'joseph@infraworks.com',
  location: 'Tripoli',
  files: [
    { name: 'site-photo-01.jpg', type: 'image' },
    { name: 'site-photo-02.jpg', type: 'image' },
    { name: 'bridge-dimensions.pdf', type: 'document' },
    { name: 'client-requirements.docx', type: 'document' },
  ],
  survey: {
    date: '2026-03-10',
    engineer: 'Ahmed Khaled',
    notes:
      'Site survey completed successfully. Access challenges identified near the bridge side span. Additional support points recommended before execution.',
  },
  quotation: {
    number: 'QT-2026-014',
    date: '2026-03-11',
    amount: 'AED 48,500',
    status: 'Confirmed' as QuotationStatus,
    notes:
      'Quotation approved by client. Execution can move to job order preparation.',
  },
  nextAction: 'Create job order and assign execution team.',
};

export default function ProjectDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const quotationStatus = mockProjectDetails.quotation.status;
  const statusStyle = statusStyles[quotationStatus];

  return (
    <Box>
      <TopBar
        title="Project Details"
        subtitle={`Review files, site survey, quotation, and next actions for project #${id ?? mockProjectDetails.id}.`}
      />

      <Box sx={{ p: 3 }}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 3 }}>
          <Button
            variant="outlined"
            startIcon={<ArrowBack />}
            onClick={() => navigate('/crm/projects')}
            sx={{
              borderColor: '#CBD5E1',
              color: '#334155',
              textTransform: 'none',
              borderRadius: 2,
            }}
          >
            Back to Projects
          </Button>

          {quotationStatus === 'Confirmed' && (
            <Button
              variant="contained"
              startIcon={<AssignmentTurnedIn />}
              onClick={() => navigate('/crm/job-orders')}
              sx={{
                backgroundColor: '#16A34A',
                textTransform: 'none',
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: '#15803D',
                },
              }}
            >
              Create Job Order
            </Button>
          )}

          <Button
            variant="outlined"
            startIcon={<ReceiptLong />}
            onClick={() => navigate('/crm/invoices')}
            sx={{
              borderColor: '#28509E',
              color: '#28509E',
              textTransform: 'none',
              borderRadius: 2,
            }}
          >
            Go to Invoices
          </Button>
        </Stack>

        <Grid container spacing={2.5}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <Card
              sx={{
                mb: 2.5,
                borderRadius: 3,
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Stack
                  direction={{ xs: 'column', md: 'row' }}
                  justifyContent="space-between"
                  alignItems={{ xs: 'flex-start', md: 'center' }}
                  spacing={2}
                  sx={{ mb: 2 }}
                >
                  <Box>
                    <Typography variant="h5" fontWeight={700} sx={{ color: '#0F172A', mb: 0.5 }}>
                      {mockProjectDetails.projectName}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#64748B' }}>
                      Core project information and client details
                    </Typography>
                  </Box>

                  <Chip
                    label={quotationStatus}
                    sx={{
                      color: statusStyle.color,
                      backgroundColor: statusStyle.bg,
                      fontWeight: 700,
                    }}
                  />
                </Stack>

                <Divider sx={{ mb: 3 }} />

                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Stack direction="row" spacing={1.25} alignItems="center">
                      <Business sx={{ color: '#64748B' }} />
                      <Box>
                        <Typography variant="caption" sx={{ color: '#94A3B8' }}>
                          Company
                        </Typography>
                        <Typography variant="body1" fontWeight={600}>
                          {mockProjectDetails.company}
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Stack direction="row" spacing={1.25} alignItems="center">
                      <Person sx={{ color: '#64748B' }} />
                      <Box>
                        <Typography variant="caption" sx={{ color: '#94A3B8' }}>
                          Contact Person
                        </Typography>
                        <Typography variant="body1" fontWeight={600}>
                          {mockProjectDetails.contactPerson}
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Stack direction="row" spacing={1.25} alignItems="center">
                      <Description sx={{ color: '#64748B' }} />
                      <Box>
                        <Typography variant="caption" sx={{ color: '#94A3B8' }}>
                          Mobile
                        </Typography>
                        <Typography variant="body1" fontWeight={600}>
                          {mockProjectDetails.mobile}
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Stack direction="row" spacing={1.25} alignItems="center">
                      <Description sx={{ color: '#64748B' }} />
                      <Box>
                        <Typography variant="caption" sx={{ color: '#94A3B8' }}>
                          Email
                        </Typography>
                        <Typography variant="body1" fontWeight={600}>
                          {mockProjectDetails.email}
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <Stack direction="row" spacing={1.25} alignItems="center">
                      <LocationOn sx={{ color: '#64748B' }} />
                      <Box>
                        <Typography variant="caption" sx={{ color: '#94A3B8' }}>
                          Project Location
                        </Typography>
                        <Typography variant="body1" fontWeight={600}>
                          {mockProjectDetails.location}
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card
              sx={{
                mb: 2.5,
                borderRadius: 3,
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                  <FolderOpen sx={{ color: '#28509E' }} />
                  <Typography variant="h6" fontWeight={700}>
                    Files
                  </Typography>
                </Stack>

                <Typography variant="body2" sx={{ color: '#64748B', mb: 2 }}>
                  Store project photos, documents, survey attachments, and client requirements here.
                </Typography>

                <List disablePadding>
                  {mockProjectDetails.files.map((file, index) => (
                    <ListItem
                      key={`${file.name}-${index}`}
                      sx={{
                        px: 0,
                        py: 1.2,
                        borderBottom:
                          index !== mockProjectDetails.files.length - 1
                            ? '1px solid #E2E8F0'
                            : 'none',
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 40 }}>
                        {file.type === 'image' ? (
                          <Image sx={{ color: '#28509E' }} />
                        ) : (
                          <InsertDriveFile sx={{ color: '#7C3AED' }} />
                        )}
                      </ListItemIcon>
                      <ListItemText
                        primary={file.name}
                        secondary={file.type === 'image' ? 'Project image' : 'Project document'}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>

            <Card
              sx={{
                mb: 2.5,
                borderRadius: 3,
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
                  Site Survey
                </Typography>

                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="caption" sx={{ color: '#94A3B8' }}>
                      Survey Date
                    </Typography>
                    <Typography variant="body1" fontWeight={600}>
                      {mockProjectDetails.survey.date}
                    </Typography>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="caption" sx={{ color: '#94A3B8' }}>
                      Assigned Engineer
                    </Typography>
                    <Typography variant="body1" fontWeight={600}>
                      {mockProjectDetails.survey.engineer}
                    </Typography>
                  </Grid>
                </Grid>

                <Typography variant="caption" sx={{ color: '#94A3B8' }}>
                  Survey Notes
                </Typography>
                <Typography variant="body2" sx={{ color: '#475569', mt: 0.5 }}>
                  {mockProjectDetails.survey.notes}
                </Typography>
              </CardContent>
            </Card>

            <Card
              sx={{
                borderRadius: 3,
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
                  Quotation
                </Typography>

                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Typography variant="caption" sx={{ color: '#94A3B8' }}>
                      Quotation Number
                    </Typography>
                    <Typography variant="body1" fontWeight={600}>
                      {mockProjectDetails.quotation.number}
                    </Typography>
                  </Grid>

                  <Grid size={{ xs: 12, md: 4 }}>
                    <Typography variant="caption" sx={{ color: '#94A3B8' }}>
                      Date
                    </Typography>
                    <Typography variant="body1" fontWeight={600}>
                      {mockProjectDetails.quotation.date}
                    </Typography>
                  </Grid>

                  <Grid size={{ xs: 12, md: 4 }}>
                    <Typography variant="caption" sx={{ color: '#94A3B8' }}>
                      Amount
                    </Typography>
                    <Typography variant="body1" fontWeight={600}>
                      {mockProjectDetails.quotation.amount}
                    </Typography>
                  </Grid>
                </Grid>

                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                  {quotationStatus === 'Confirmed' ? (
                    <CheckCircle sx={{ color: '#16A34A' }} />
                  ) : quotationStatus === 'Not Confirmed' ? (
                    <Cancel sx={{ color: '#DC2626' }} />
                  ) : (
                    <Description sx={{ color: '#EA580C' }} />
                  )}

                  <Typography variant="body1" fontWeight={700} sx={{ color: statusStyle.color }}>
                    {quotationStatus}
                  </Typography>
                </Stack>

                <Typography variant="caption" sx={{ color: '#94A3B8' }}>
                  Quotation Notes
                </Typography>
                <Typography variant="body2" sx={{ color: '#475569', mt: 0.5 }}>
                  {mockProjectDetails.quotation.notes}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }}>
            <Card
              sx={{
                mb: 2.5,
                borderRadius: 3,
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
                  Next Action
                </Typography>

                <Typography variant="body2" sx={{ color: '#475569', mb: 3 }}>
                  {mockProjectDetails.nextAction}
                </Typography>

                <Stack spacing={1.5}>
                  {quotationStatus === 'Confirmed' && (
                    <Button
                      variant="contained"
                      startIcon={<AssignmentTurnedIn />}
                      onClick={() => navigate('/crm/job-orders')}
                      sx={{
                        backgroundColor: '#16A34A',
                        textTransform: 'none',
                        borderRadius: 2,
                        '&:hover': {
                          backgroundColor: '#15803D',
                        },
                      }}
                    >
                      Create Job Order
                    </Button>
                  )}

                  <Button
                    variant="outlined"
                    startIcon={<Description />}
                    onClick={() => navigate('/quotations')}
                    sx={{
                      borderColor: '#28509E',
                      color: '#28509E',
                      textTransform: 'none',
                      borderRadius: 2,
                    }}
                  >
                    Open Quotations
                  </Button>

                  <Button
                    variant="outlined"
                    startIcon={<FolderOpen />}
                    onClick={() => navigate('/crm/projects')}
                    sx={{
                      borderColor: '#CBD5E1',
                      color: '#334155',
                      textTransform: 'none',
                      borderRadius: 2,
                    }}
                  >
                    Back to Projects
                  </Button>
                </Stack>
              </CardContent>
            </Card>

            <Card
              sx={{
                borderRadius: 3,
                boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
                  Workflow Summary
                </Typography>

                <Stack spacing={1.5}>
                  <Chip label="1. Prospect / Lead / Client" variant="outlined" />
                  <Chip label="2. Prospective Project" variant="outlined" />
                  <Chip label="3. Files + Site Survey" variant="outlined" />
                  <Chip label="4. Quotation Status" variant="outlined" />
                  <Chip label="5. Job Order if Confirmed" variant="outlined" />
                  <Chip label="6. Invoice after Completion" variant="outlined" />
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
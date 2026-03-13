import { Box, Grid, Card, CardContent, Typography, Button, Stack, Chip } from '@mui/material';
import {
  ReceiptLong,
  Add,
  Business,
  Description,
  Payments,
  Visibility,
  CheckCircle,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/layout/TopBar';

interface InvoiceItem {
  id: number;
  invoiceNumber: string;
  project: string;
  company: string;
  amount: string;
  issueDate: string;
  dueDate: string;
  status: 'Draft' | 'Sent' | 'Paid' | 'Overdue';
}

const invoices: InvoiceItem[] = [
  {
    id: 1,
    invoiceNumber: 'INV-2026-001',
    project: 'Bridge Access Platform',
    company: 'InfraWorks',
    amount: 'AED 48,500',
    issueDate: '2026-03-20',
    dueDate: '2026-03-30',
    status: 'Sent',
  },
  {
    id: 2,
    invoiceNumber: 'INV-2026-002',
    project: 'Residential Tower Shoring',
    company: 'Urban Build Co.',
    amount: 'AED 72,000',
    issueDate: '2026-03-08',
    dueDate: '2026-03-18',
    status: 'Paid',
  },
  {
    id: 3,
    invoiceNumber: 'INV-2026-003',
    project: 'Warehouse Façade Scaffolding',
    company: 'Cedars Industrial Group',
    amount: 'AED 31,250',
    issueDate: '2026-03-22',
    dueDate: '2026-04-01',
    status: 'Draft',
  },
  {
    id: 4,
    invoiceNumber: 'INV-2026-004',
    project: 'Commercial Complex Maintenance',
    company: 'Prime Estate',
    amount: 'AED 21,900',
    issueDate: '2026-03-01',
    dueDate: '2026-03-10',
    status: 'Overdue',
  },
];

const statusStyles = {
  Draft: { color: '#64748B', bg: 'rgba(100,116,139,0.10)' },
  Sent: { color: '#28509E', bg: 'rgba(40,80,158,0.10)' },
  Paid: { color: '#16A34A', bg: 'rgba(22,163,74,0.10)' },
  Overdue: { color: '#DC2626', bg: 'rgba(220,38,38,0.10)' },
};

export default function InvoicesPage() {
  const navigate = useNavigate();

  const totalInvoices = invoices.length;
  const paidInvoices = invoices.filter((invoice) => invoice.status === 'Paid').length;
  const pendingInvoices = invoices.filter(
    (invoice) => invoice.status === 'Draft' || invoice.status === 'Sent'
  ).length;
  const overdueInvoices = invoices.filter((invoice) => invoice.status === 'Overdue').length;

  return (
    <Box>
      <TopBar
        title="Invoices"
        subtitle="Manage project invoices after job completion and track payment status."
      />

      <Box sx={{ p: 3 }}>
        <Grid container spacing={2.5} sx={{ mb: 3 }}>
          {[
            {
              label: 'Total Invoices',
              value: totalInvoices,
              color: '#28509E',
              bg: 'rgba(40,80,158,0.10)',
              icon: <ReceiptLong />,
            },
            {
              label: 'Paid',
              value: paidInvoices,
              color: '#16A34A',
              bg: 'rgba(22,163,74,0.10)',
              icon: <CheckCircle />,
            },
            {
              label: 'Pending',
              value: pendingInvoices,
              color: '#EA580C',
              bg: 'rgba(234,88,12,0.10)',
              icon: <Payments />,
            },
            {
              label: 'Overdue',
              value: overdueInvoices,
              color: '#DC2626',
              bg: 'rgba(220,38,38,0.10)',
              icon: <Description />,
            },
          ].map((item) => (
            <Grid key={item.label} size={{ xs: 12, sm: 6, md: 3 }}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: '0 8px 24px rgba(15,23,42,0.05)',
                }}
              >
                <CardContent>
                  <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Box>
                      <Typography variant="body2" sx={{ color: '#64748B', mb: 0.5 }}>
                        {item.label}
                      </Typography>
                      <Typography variant="h4" fontWeight={700}>
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
                  Billing Stage
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748B', mt: 1, maxWidth: 820 }}>
                  Once a job is completed, an invoice is created for the client. This section helps
                  you track issued invoices, payment status, and overdue collections.
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
                Create Invoice
              </Button>
            </Stack>
          </CardContent>
        </Card>

        <Grid container spacing={2.5}>
          {invoices.map((invoice) => {
            const status = statusStyles[invoice.status];

            return (
              <Grid key={invoice.id} size={{ xs: 12, md: 6, xl: 4 }}>
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
                        <ReceiptLong sx={{ color: '#28509E' }} />
                        <Typography variant="h6" fontWeight={700}>
                          {invoice.invoiceNumber}
                        </Typography>
                      </Stack>

                      <Chip
                        label={invoice.status}
                        sx={{
                          color: status.color,
                          backgroundColor: status.bg,
                          fontWeight: 600,
                        }}
                      />
                    </Stack>

                    <Stack spacing={1.2} sx={{ mb: 2 }}>
                      <Typography variant="body1" fontWeight={600}>
                        {invoice.project}
                      </Typography>

                      <Stack direction="row" spacing={1} alignItems="center">
                        <Business sx={{ fontSize: 18, color: '#64748B' }} />
                        <Typography variant="body2">{invoice.company}</Typography>
                      </Stack>

                      <Stack direction="row" spacing={1} alignItems="center">
                        <Payments sx={{ fontSize: 18, color: '#64748B' }} />
                        <Typography variant="body2">{invoice.amount}</Typography>
                      </Stack>

                      <Typography variant="body2" sx={{ color: '#475569' }}>
                        Issue Date: {invoice.issueDate}
                      </Typography>

                      <Typography variant="body2" sx={{ color: '#475569' }}>
                        Due Date: {invoice.dueDate}
                      </Typography>
                    </Stack>

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                      <Button
                        variant="outlined"
                        startIcon={<Visibility />}
                        onClick={() => navigate('/crm/projects')}
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
                        View Related Project
                      </Button>

                      {invoice.status !== 'Paid' && (
                        <Button
                          variant="text"
                          sx={{
                            color: '#16A34A',
                            textTransform: 'none',
                            fontWeight: 600,
                          }}
                        >
                          Mark as Paid
                        </Button>
                      )}
                    </Stack>
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
import { Box, Grid, Card, CardContent, Typography, Button, Stack } from '@mui/material';
import { People, TrendingUp, Description, CheckCircle, EventNote, Business, PersonAdd, Visibility } from '@mui/icons-material';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import TopBar from '../components/layout/TopBar';
import StatCard from '../components/common/StatCard';
import { dashboardStats, leadsByStatus, opportunitiesByMonth, pipelineData } from '../data/dummyData';

export default function DashboardPage() {
  return (
    <Box>
      <TopBar title="Dashboard" subtitle="Welcome back, Ahmed. Here's your CRM overview." />

      <Box sx={{ p: 3 }}>
        <Grid container spacing={2.5} sx={{ mb: 3 }}>
          {[
            { title: 'Total Leads', value: dashboardStats.totalLeads, icon: <People />, color: '#28509E', trend: '+12% this month' },
            { title: 'Active Opportunities', value: dashboardStats.activeOpportunities, icon: <TrendingUp />, color: '#7C3AED' },
            { title: 'Quotations Sent', value: dashboardStats.quotationsSent, icon: <Description />, color: '#EA580C' },
            { title: 'Closed Deals', value: dashboardStats.closedDeals, icon: <CheckCircle />, color: '#16A34A' },
            { title: 'Follow Ups Today', value: dashboardStats.followUpsDueToday, icon: <EventNote />, color: '#D97706' },
          ].map((s, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 2.4 }}>
              <StatCard {...s} />
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={2.5} sx={{ mb: 3 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Leads by Status
                </Typography>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={leadsByStatus}
                      cx="50%"
                      cy="50%"
                      innerRadius={55}
                      outerRadius={85}
                      paddingAngle={4}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}`}
                    >
                      {leadsByStatus.map((entry, i) => (
                        <Cell key={i} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Opportunities by Month
                </Typography>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={opportunitiesByMonth}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#64748B' }} />
                    <YAxis tick={{ fontSize: 12, fill: '#64748B' }} />
                    <Tooltip />
                    <Bar dataKey="value" fill="#28509E" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Sales Pipeline
                </Typography>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={pipelineData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis type="number" tick={{ fontSize: 12, fill: '#64748B' }} />
                    <YAxis dataKey="stage" type="category" width={90} tick={{ fontSize: 11, fill: '#64748B' }} />
                    <Tooltip formatter={(val: number) => `AED ${val.toLocaleString()}`} />
                    <Bar dataKey="value" fill="#28509E" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Card>
          <CardContent sx={{ p: 3 }}>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 1, color: '#0F172A' }}>
              CRM Section
            </Typography>

            <Typography variant="body2" sx={{ color: '#64748B', mb: 3 }}>
              Manage your core customer relationship activities from one place. Monitor leads, clients,
              quotations, follow ups, and business opportunities easily.
            </Typography>

            <Grid container spacing={2.5} sx={{ mb: 3 }}>
              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Card
                  variant="outlined"
                  sx={{
                    borderRadius: 3,
                    boxShadow: 'none',
                    borderColor: '#E2E8F0',
                    height: '100%',
                  }}
                >
                  <CardContent>
                    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                      <Box
                        sx={{
                          width: 42,
                          height: 42,
                          borderRadius: 2,
                          backgroundColor: 'rgba(40,80,158,0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#28509E',
                        }}
                      >
                        <People />
                      </Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        Leads
                      </Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: '#64748B' }}>
                      View and manage all incoming leads from contractors, engineers, and companies.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Card
                  variant="outlined"
                  sx={{
                    borderRadius: 3,
                    boxShadow: 'none',
                    borderColor: '#E2E8F0',
                    height: '100%',
                  }}
                >
                  <CardContent>
                    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                      <Box
                        sx={{
                          width: 42,
                          height: 42,
                          borderRadius: 2,
                          backgroundColor: 'rgba(22,163,74,0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#16A34A',
                        }}
                      >
                        <Business />
                      </Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        Clients
                      </Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: '#64748B' }}>
                      Track active clients, contact details, project history, and important notes.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Card
                  variant="outlined"
                  sx={{
                    borderRadius: 3,
                    boxShadow: 'none',
                    borderColor: '#E2E8F0',
                    height: '100%',
                  }}
                >
                  <CardContent>
                    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                      <Box
                        sx={{
                          width: 42,
                          height: 42,
                          borderRadius: 2,
                          backgroundColor: 'rgba(124,58,237,0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#7C3AED',
                        }}
                      >
                        <TrendingUp />
                      </Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        Opportunities
                      </Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: '#64748B' }}>
                      Follow project opportunities, quotations, and deal stages in the pipeline.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                <Card
                  variant="outlined"
                  sx={{
                    borderRadius: 3,
                    boxShadow: 'none',
                    borderColor: '#E2E8F0',
                    height: '100%',
                  }}
                >
                  <CardContent>
                    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                      <Box
                        sx={{
                          width: 42,
                          height: 42,
                          borderRadius: 2,
                          backgroundColor: 'rgba(217,119,6,0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#D97706',
                        }}
                      >
                        <EventNote />
                      </Box>
                      <Typography variant="subtitle1" fontWeight={600}>
                        Follow Ups
                      </Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: '#64748B' }}>
                      Stay on top of pending calls, meetings, reminders, and next actions.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                startIcon={<PersonAdd />}
                sx={{
                  backgroundColor: '#28509E',
                  borderRadius: 2,
                  textTransform: 'none',
                  px: 3,
                  '&:hover': {
                    backgroundColor: '#1E3A73',
                  },
                }}
              >
                Add New Lead
              </Button>

              <Button
                variant="outlined"
                startIcon={<Description />}
                sx={{
                  borderColor: '#28509E',
                  color: '#28509E',
                  borderRadius: 2,
                  textTransform: 'none',
                  px: 3,
                }}
              >
                Create Quotation
              </Button>

              <Button
                variant="text"
                startIcon={<Visibility />}
                sx={{
                  color: '#28509E',
                  textTransform: 'none',
                  px: 1,
                }}
              >
                View Full CRM
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  ); 
}
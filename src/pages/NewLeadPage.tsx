import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  MenuItem,
  Button,
  Stack,
  Divider,
  Chip,
} from '@mui/material';
import { Save, ArrowBack, AddBusiness } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/layout/TopBar';

type CustomerType = 'Prospect' | 'Lead' | 'Client';
type LeadSource =
  | 'Inbound Call'
  | 'Instagram'
  | 'Social Media'
  | 'Google'
  | 'WhatsApp'
  | 'Referral'
  | 'Walk-in'
  | 'Other';

interface NewLeadFormData {
  customerType: CustomerType;
  leadSource: LeadSource;
  company: string;
  contactPerson: string;
  mobile: string;
  email: string;
  projectLocation: string;
  notes: string;
}

const initialForm: NewLeadFormData = {
  customerType: 'Lead',
  leadSource: 'Inbound Call',
  company: '',
  contactPerson: '',
  mobile: '',
  email: '',
  projectLocation: '',
  notes: '',
};

export default function NewLeadPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<NewLeadFormData>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange =
    (field: keyof NewLeadFormData) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));

      if (errors[field]) {
        setErrors((prev) => ({
          ...prev,
          [field]: '',
        }));
      }
    };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.customerType) newErrors.customerType = 'Please select a type';
    if (!formData.leadSource) newErrors.leadSource = 'Please select a source';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile is required';
    if (!formData.projectLocation.trim()) {
      newErrors.projectLocation = 'Project location is required';
    }

    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) return;

    // For now this is a dummy save.
    // Later we will replace this with API / Supabase / backend save logic.
    console.log('New CRM record:', formData);

    alert('Lead/Prospect saved successfully!');
    navigate('/crm');
  };

  const handleReset = () => {
    setFormData(initialForm);
    setErrors({});
  };

  return (
    <Box>
      <TopBar
        title="New CRM Entry"
        subtitle="Create a new prospect, lead, or client for the CRM pipeline."
      />

      <Box sx={{ p: 3 }}>
        <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap' }}>
          <Chip label="CRM" sx={{ backgroundColor: 'rgba(40,80,158,0.1)', color: '#28509E' }} />
          <Chip label="New Entry" variant="outlined" />
          <Chip label="Prospect / Lead / Client" variant="outlined" />
        </Stack>

        <Card
          sx={{
            borderRadius: 3,
            boxShadow: '0 8px 24px rgba(15, 23, 42, 0.06)',
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent="space-between"
              alignItems={{ xs: 'flex-start', sm: 'center' }}
              spacing={2}
              sx={{ mb: 3 }}
            >
              <Box>
                <Typography variant="h5" fontWeight={700} sx={{ color: '#0F172A' }}>
                  Lead / Prospect Form
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748B', mt: 0.5 }}>
                  Fill in the core information to start the CRM process for a new opportunity.
                </Typography>
              </Box>

              <Button
                variant="outlined"
                startIcon={<ArrowBack />}
                onClick={() => navigate('/crm')}
                sx={{
                  borderColor: '#CBD5E1',
                  color: '#334155',
                  textTransform: 'none',
                  borderRadius: 2,
                }}
              >
                Back to CRM
              </Button>
            </Stack>

            <Divider sx={{ mb: 3 }} />

            <Grid container spacing={2.5}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  select
                  fullWidth
                  label="Type"
                  value={formData.customerType}
                  onChange={handleChange('customerType')}
                  error={!!errors.customerType}
                  helperText={errors.customerType}
                >
                  <MenuItem value="Prospect">Prospect</MenuItem>
                  <MenuItem value="Lead">Lead</MenuItem>
                  <MenuItem value="Client">Client</MenuItem>
                </TextField>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  select
                  fullWidth
                  label="Lead Source"
                  value={formData.leadSource}
                  onChange={handleChange('leadSource')}
                  error={!!errors.leadSource}
                  helperText={errors.leadSource}
                >
                  <MenuItem value="Inbound Call">Inbound Call</MenuItem>
                  <MenuItem value="Instagram">Instagram</MenuItem>
                  <MenuItem value="Social Media">Social Media</MenuItem>
                  <MenuItem value="Google">Google</MenuItem>
                  <MenuItem value="WhatsApp">WhatsApp</MenuItem>
                  <MenuItem value="Referral">Referral</MenuItem>
                  <MenuItem value="Walk-in">Walk-in</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </TextField>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Company"
                  value={formData.company}
                  onChange={handleChange('company')}
                  error={!!errors.company}
                  helperText={errors.company}
                  placeholder="Enter company name"
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Contact Person"
                  value={formData.contactPerson}
                  onChange={handleChange('contactPerson')}
                  placeholder="Enter contact person name"
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Mobile"
                  value={formData.mobile}
                  onChange={handleChange('mobile')}
                  error={!!errors.mobile}
                  helperText={errors.mobile}
                  placeholder="Enter mobile number"
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <TextField
                  fullWidth
                  label="Email"
                  value={formData.email}
                  onChange={handleChange('email')}
                  error={!!errors.email}
                  helperText={errors.email}
                  placeholder="Enter email address"
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  label="Project Location"
                  value={formData.projectLocation}
                  onChange={handleChange('projectLocation')}
                  error={!!errors.projectLocation}
                  helperText={errors.projectLocation}
                  placeholder="Enter project location"
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <TextField
                  fullWidth
                  multiline
                  minRows={4}
                  label="Notes"
                  value={formData.notes}
                  onChange={handleChange('notes')}
                  placeholder="Add notes about the inquiry, project details, or next action"
                />
              </Grid>
            </Grid>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ mt: 4 }}
            >
              <Button
                variant="contained"
                startIcon={<Save />}
                onClick={handleSave}
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
                Save Entry
              </Button>

              <Button
                variant="outlined"
                onClick={handleReset}
                sx={{
                  borderColor: '#CBD5E1',
                  color: '#334155',
                  textTransform: 'none',
                  borderRadius: 2,
                  px: 3,
                }}
              >
                Reset
              </Button>

              <Button
                variant="text"
                startIcon={<AddBusiness />}
                onClick={() => navigate('/crm/projects')}
                sx={{
                  color: '#28509E',
                  textTransform: 'none',
                  px: 1,
                }}
              >
                Go to Projects
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
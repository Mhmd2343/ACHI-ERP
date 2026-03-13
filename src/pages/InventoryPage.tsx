import { useMemo, useState } from 'react';
import {
  Box,
  Button,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { Search, Add, Edit, Delete } from '@mui/icons-material';
import TopBar from '../components/layout/TopBar';
import StatusChip from '../components/common/StatusChip';
import { inventoryItems as initialInventoryItems, InventoryItem } from '../data/dummyData';

const categories = [
  'Frame',
  'Brace',
  'Plank',
  'Coupler',
  'Base Plate',
  'Guardrail',
  'Ladder',
  'Jack Base',
  'Toe Board',
] as const;

const stockStatuses = ['Available', 'Low Stock', 'In Use', 'Damaged'] as const;

const projectOptions = [
  'Dubai Marina Tower',
  'Palm Jumeirah Maintenance',
  'Sharjah Hospital Site',
  'Abu Dhabi Mall Renovation',
  'Jeddah Industrial Zone',
  'Warehouse Expansion Project',
  'Not Assigned',
];

export default function InventoryPage() {
  const [items, setItems] = useState<InventoryItem[]>(initialInventoryItems);
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<InventoryItem | null>(null);
  const [form, setForm] = useState<Partial<InventoryItem>>({});

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchSearch =
        !search ||
        item.itemName.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()) ||
        item.allocatedProject.toLowerCase().includes(search.toLowerCase());

      const matchCategory = !filterCategory || item.category === filterCategory;
      const matchStatus = !filterStatus || item.stockStatus === filterStatus;

      return matchSearch && matchCategory && matchStatus;
    });
  }, [items, search, filterCategory, filterStatus]);

  const totals = useMemo(() => {
    const totalOwned = items.reduce((sum, item) => sum + item.totalQuantity, 0);
    const totalAvailable = items.reduce((sum, item) => sum + item.availableQuantity, 0);
    const totalInUse = items.reduce((sum, item) => sum + item.inUseQuantity, 0);
    const totalDamaged = items.reduce((sum, item) => sum + item.damagedQuantity, 0);

    return {
      totalItems: items.length,
      totalOwned,
      totalAvailable,
      totalInUse,
      totalDamaged,
    };
  }, [items]);

  const openAdd = () => {
    setEditingItem(null);
    setForm({
      itemName: '',
      category: 'Frame',
      totalQuantity: 0,
      availableQuantity: 0,
      inUseQuantity: 0,
      damagedQuantity: 0,
      allocatedProject: 'Not Assigned',
      stockStatus: 'Available',
      notes: '',
    });
    setDialogOpen(true);
  };

  const openEdit = (item: InventoryItem) => {
    setEditingItem(item);
    setForm(item);
    setDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const computeStockStatus = (data: Partial<InventoryItem>): InventoryItem['stockStatus'] => {
    const available = Number(data.availableQuantity || 0);
    const inUse = Number(data.inUseQuantity || 0);
    const damaged = Number(data.damagedQuantity || 0);

    if (damaged > 0 && available === 0 && inUse === 0) return 'Damaged';
    if (available <= 10 && available > 0) return 'Low Stock';
    if (available === 0 && inUse > 0) return 'In Use';
    if (damaged > 0 && available === 0) return 'Damaged';
    return 'Available';
  };

  const handleSave = () => {
    const payload: InventoryItem = {
      id: editingItem ? editingItem.id : Date.now(),
      itemName: form.itemName || '',
      category: (form.category as InventoryItem['category']) || 'Frame',
      totalQuantity: Number(form.totalQuantity || 0),
      availableQuantity: Number(form.availableQuantity || 0),
      inUseQuantity: Number(form.inUseQuantity || 0),
      damagedQuantity: Number(form.damagedQuantity || 0),
      allocatedProject: form.allocatedProject || 'Not Assigned',
      stockStatus: computeStockStatus(form),
      notes: form.notes || '',
    };

    if (editingItem) {
      setItems(items.map((item) => (item.id === editingItem.id ? payload : item)));
    } else {
      setItems([...items, payload]);
    }

    setDialogOpen(false);
  };

  return (
    <Box>
      <TopBar
        title="Inventory"
        subtitle="Manage scaffolding equipment, stock levels, and project allocation"
      />

      <Box sx={{ p: 3 }}>
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card sx={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderRadius: 2 }}>
              <CardContent>
                <Typography variant="body2" sx={{ color: '#64748B', mb: 1 }}>
                  Inventory Items
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#1A2332' }}>
                  {totals.totalItems}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card sx={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderRadius: 2 }}>
              <CardContent>
                <Typography variant="body2" sx={{ color: '#64748B', mb: 1 }}>
                  Total Quantity
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#1A2332' }}>
                  {totals.totalOwned}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card sx={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderRadius: 2 }}>
              <CardContent>
                <Typography variant="body2" sx={{ color: '#64748B', mb: 1 }}>
                  Available Stock
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#16A34A' }}>
                  {totals.totalAvailable}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card sx={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderRadius: 2 }}>
              <CardContent>
                <Typography variant="body2" sx={{ color: '#64748B', mb: 1 }}>
                  In Use / Damaged
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#1A2332' }}>
                  {totals.totalInUse} / {totals.totalDamaged}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>
          <TextField
            size="small"
            placeholder="Search inventory…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: '#94A3B8' }} />
                </InputAdornment>
              ),
            }}
            sx={{ minWidth: 250 }}
          />

          <TextField
            select
            size="small"
            label="Category"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            sx={{ minWidth: 170 }}
          >
            <MenuItem value="">All</MenuItem>
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            size="small"
            label="Stock Status"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            sx={{ minWidth: 170 }}
          >
            <MenuItem value="">All</MenuItem>
            {stockStatuses.map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </TextField>

          <Box sx={{ flex: 1 }} />

          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={openAdd}
            sx={{ bgcolor: '#28509E' }}
          >
            Add Item
          </Button>
        </Box>

        <TableContainer
          component={Paper}
          sx={{ boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderRadius: 2 }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Item Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Total Qty</TableCell>
                <TableCell>Available</TableCell>
                <TableCell>In Use</TableCell>
                <TableCell>Damaged</TableCell>
                <TableCell>Allocated Project</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Notes</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filtered.map((item) => (
                <TableRow key={item.id} hover>
                  <TableCell>
                    <Typography fontWeight={600} fontSize="0.875rem">
                      {item.itemName}
                    </Typography>
                  </TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.totalQuantity}</TableCell>
                  <TableCell>{item.availableQuantity}</TableCell>
                  <TableCell>{item.inUseQuantity}</TableCell>
                  <TableCell>{item.damagedQuantity}</TableCell>
                  <TableCell>{item.allocatedProject}</TableCell>
                  <TableCell>
                    <StatusChip status={item.stockStatus} />
                  </TableCell>
                  <TableCell
                    sx={{
                      maxWidth: 220,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item.notes}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton size="small" onClick={() => openEdit(item)}>
                      <Edit fontSize="small" />
                    </IconButton>
                    <IconButton size="small" onClick={() => handleDelete(item.id)}>
                      <Delete fontSize="small" sx={{ color: '#EF4444' }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}

              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={10} align="center" sx={{ py: 4, color: '#64748B' }}>
                    No inventory items found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="sm" fullWidth>
          <DialogTitle>{editingItem ? 'Edit Inventory Item' : 'Add Inventory Item'}</DialogTitle>

          <DialogContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              pt: '16px !important',
            }}
          >
            <TextField
              label="Item Name"
              value={form.itemName || ''}
              onChange={(e) => setForm({ ...form, itemName: e.target.value })}
              fullWidth
            />

            <TextField
              select
              label="Category"
              value={form.category || ''}
              onChange={(e) =>
                setForm({ ...form, category: e.target.value as InventoryItem['category'] })
              }
              fullWidth
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Total Quantity"
              type="number"
              value={form.totalQuantity ?? ''}
              onChange={(e) => setForm({ ...form, totalQuantity: Number(e.target.value) })}
              fullWidth
            />

            <TextField
              label="Available Quantity"
              type="number"
              value={form.availableQuantity ?? ''}
              onChange={(e) => setForm({ ...form, availableQuantity: Number(e.target.value) })}
              fullWidth
            />

            <TextField
              label="In Use Quantity"
              type="number"
              value={form.inUseQuantity ?? ''}
              onChange={(e) => setForm({ ...form, inUseQuantity: Number(e.target.value) })}
              fullWidth
            />

            <TextField
              label="Damaged Quantity"
              type="number"
              value={form.damagedQuantity ?? ''}
              onChange={(e) => setForm({ ...form, damagedQuantity: Number(e.target.value) })}
              fullWidth
            />

            <TextField
              select
              label="Allocated Project"
              value={form.allocatedProject || ''}
              onChange={(e) => setForm({ ...form, allocatedProject: e.target.value })}
              fullWidth
            >
              {projectOptions.map((project) => (
                <MenuItem key={project} value={project}>
                  {project}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Notes"
              value={form.notes || ''}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              multiline
              rows={2}
              fullWidth
            />
          </DialogContent>

          <DialogActions sx={{ px: 3, pb: 2 }}>
            <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button variant="contained" onClick={handleSave} sx={{ bgcolor: '#28509E' }}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
}
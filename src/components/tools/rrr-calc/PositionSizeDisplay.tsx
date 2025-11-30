import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { formatQuantity, formatCurrency } from '../../../utils/formatters';

interface PositionSizeDisplayProps {
  quantity: number;
  positionValue: number;
}

export const PositionSizeDisplay: React.FC<PositionSizeDisplayProps> = ({
  quantity,
  positionValue,
}) => {
  return (
    <Paper elevation={2} sx={{ bgcolor: 'primary.dark', p: 2 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Quantity (Shares)
          </Typography>
          <Typography variant="h6" color="text.primary">
            {formatQuantity(quantity)}
          </Typography>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Position Value
          </Typography>
          <Typography variant="h6" color="text.primary">
            {formatCurrency(positionValue)}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};
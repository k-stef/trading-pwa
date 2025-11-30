import React from 'react';
import { Grid, TextField, Slider, Typography, Box } from '@mui/material';

interface AccountSettingsProps {
  accountSize: number;
  riskPercentage: number;
  onAccountSizeChange: (value: number) => void;
  onRiskPercentageChange: (value: number) => void;
}

const marks = [
  { value: 0.5, label: '0.5%' },
  { value: 1, label: '1%' },
  { value: 2, label: '2%' },
  { value: 5, label: '5%' },
];

export const AccountSettings: React.FC<AccountSettingsProps> = ({
  accountSize,
  riskPercentage,
  onAccountSizeChange,
  onRiskPercentageChange,
}) => {
  return (
    <Grid container spacing={2} direction="column">
      <Grid>
        <TextField
          label="Account Size (€)"
          value={accountSize}
          onChange={(e) => onAccountSizeChange(Number(e.target.value))}
          type="number"
          slotProps={{
            htmlInput: {
              step: "100",
              min: "0"
            }
          }}
          fullWidth
        />
      </Grid>
      <Grid>
        <Box sx={{ px: 2 }}>
          <Typography gutterBottom>
            Risk per Trade: {riskPercentage.toFixed(2)}%
          </Typography>
          <Slider
            value={riskPercentage}
            onChange={(_, value) => onRiskPercentageChange(value as number)}
            min={0.5}
            max={5}
            step={0.1}
            marks={marks}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `${value}%`}
          />
        </Box>
      </Grid>
    </Grid>
  );
};
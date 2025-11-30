import React from 'react';
import {Box, Grid, Slider, Typography} from '@mui/material';

interface AccountSettingsProps {
    accountSize: number;
    riskPercentage: number;
    onAccountSizeChange: (value: number) => void;
    onRiskPercentageChange: (value: number) => void;
}

const riskMarks = [
    {value: 0.5, label: '0.5%'},
    {value: 1, label: '1%'},
    {value: 2, label: '2%'},
    {value: 5, label: '5%'},
];

const accountSizeMarks = [
    {value: 1000, label: '1k'},
    {value: 5000, label: '5k'},
    {value: 10000, label: '10k'},
    {value: 15000, label: '15k'},
    {value: 20000, label: '20k'},
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
                <Box sx={{px: 2}}>
                    <Typography gutterBottom>
                        Account Size: €{accountSize.toLocaleString('de-DE')}
                    </Typography>
                    <Slider
                        value={accountSize}
                        onChange={(_, value) => onAccountSizeChange(value as number)}
                        min={1000}
                        max={20000}
                        step={100}
                        marks={accountSizeMarks}
                        valueLabelDisplay="auto"
                        valueLabelFormat={(value) => `€${value.toLocaleString('de-DE')}`}
                    />
                </Box>
            </Grid>
            <Grid>
                <Box sx={{px: 2}}>
                    <Typography gutterBottom>
                        Risk per Trade: {riskPercentage.toFixed(2)}%
                    </Typography>
                    <Slider
                        value={riskPercentage}
                        onChange={(_, value) => onRiskPercentageChange(value as number)}
                        min={0.5}
                        max={5}
                        step={0.1}
                        marks={riskMarks}
                        valueLabelDisplay="auto"
                        valueLabelFormat={(value) => `${value}%`}
                    />
                </Box>
            </Grid>
        </Grid>
    );
};
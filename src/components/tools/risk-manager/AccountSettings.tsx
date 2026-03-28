import React, {useState, useRef} from 'react';
import {Box, Grid, Slider, Typography} from '@mui/material';

interface AccountSettingsProps {
    accountSize: number;
    riskPercentage: number;
    onAccountSizeChange: (value: number) => void;
    onRiskPercentageChange: (value: number) => void;
}

const riskMarks = [
    {value: 0.1, label: '0.1%'},
    {value: 0.5, label: '0.5%'},
    {value: 1, label: '1%'},
    {value: 2, label: '2%'},
    {value: 3, label: '3%'},
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
    const [localAccountSize, setLocalAccountSize] = useState(accountSize);
    const [localRiskPercentage, setLocalRiskPercentage] = useState(riskPercentage);
    const [isDragging, setIsDragging] = useState(false);
    const lastAccountSizeRef = useRef(accountSize);
    const lastRiskPercentageRef = useRef(riskPercentage);

    React.useEffect(() => {
        if (!isDragging) {
            setLocalAccountSize(accountSize);
        }
    }, [accountSize, isDragging]);

    React.useEffect(() => {
        if (!isDragging) {
            setLocalRiskPercentage(riskPercentage);
        }
    }, [riskPercentage, isDragging]);

    return (
        <Grid container spacing={2} direction="column">
            <Grid>
                <Typography gutterBottom>
                    Account Size: €{localAccountSize.toLocaleString('de-DE')}
                </Typography>
                <Box sx={{px: 1.5}}>
                    <Slider
                        value={localAccountSize}
                        onChange={(_, value) => {
                            setIsDragging(true);
                            const numValue = value as number;
                            setLocalAccountSize(numValue);
                            lastAccountSizeRef.current = numValue;
                        }}
                        onChangeCommitted={() => {
                            setIsDragging(false);
                            onAccountSizeChange(lastAccountSizeRef.current);
                        }}
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
                <Typography gutterBottom>
                    Max Risk per Trade: {localRiskPercentage.toFixed(2)}% (€{Math.round(accountSize * (localRiskPercentage / 100)).toLocaleString('de-DE')})
                </Typography>
                <Box sx={{px: 1.5}}>
                    <Slider
                        value={localRiskPercentage}
                        onChange={(_, value) => {
                            setIsDragging(true);
                            const numValue = value as number;
                            setLocalRiskPercentage(numValue);
                            lastRiskPercentageRef.current = numValue;
                        }}
                        onChangeCommitted={() => {
                            setIsDragging(false);
                            onRiskPercentageChange(lastRiskPercentageRef.current);
                        }}
                        min={0.1}
                        max={3}
                        step={0.05}
                        marks={riskMarks}
                        valueLabelDisplay="auto"
                        valueLabelFormat={(value) => `${value}%`}
                    />
                </Box>
            </Grid>
        </Grid>
    );
};

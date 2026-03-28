import React, {useState} from 'react';
import {Box, Grid, Slider, TextField, Typography} from '@mui/material';

interface NewPurchaseProps {
    newShares: number;
    newPrice: string;
    onSharesChange: (value: number) => void;
    onPriceChange: (value: string) => void;
}

export const NewPurchase: React.FC<NewPurchaseProps> = ({
    newShares,
    newPrice,
    onSharesChange,
    onPriceChange,
}) => {
    const [localShares, setLocalShares] = useState(newShares);
    const [isDragging, setIsDragging] = useState(false);
    const [priceFocused, setPriceFocused] = useState(false);

    React.useEffect(() => {
        if (!isDragging) {
            setLocalShares(newShares);
        }
    }, [newShares]);

    const totalCost = newShares * Number.parseFloat(newPrice || '0') + 1;

    return (
        <Grid container spacing={2} direction="column">
            <Grid>
                <Typography variant="h5" color="text.secondary" gutterBottom>
                    New Purchase
                </Typography>
            </Grid>
            <Grid>
                <Typography gutterBottom>
                    Number of Shares: {localShares}
                </Typography>
                <Box sx={{px: 1.5}}>
                    <Slider
                        value={localShares}
                        onChange={(_, value) => {
                            setIsDragging(true);
                            setLocalShares(value as number);
                        }}
                        onChangeCommitted={(_, value) => {
                            setIsDragging(false);
                            onSharesChange(value as number);
                        }}
                        min={1}
                        max={200}
                        step={1}
                        valueLabelDisplay="auto"
                        valueLabelFormat={(value) => `${value}`}
                    />
                </Box>
            </Grid>
            <Grid>
                <TextField
                    label="Price per Share (€)"
                    value={newPrice}
                    onChange={(e) => onPriceChange(e.target.value.replace(',', '.'))}
                    onFocus={() => setPriceFocused(true)}
                    onBlur={() => setPriceFocused(false)}
                    type="number"
                    slotProps={{
                        htmlInput: {min: "0", step: "0.01"},
                        inputLabel: {
                            shrink: priceFocused || !!newPrice,
                            sx: {backgroundColor: '#181818', paddingX: '4px', marginX: '-4px'}
                        }
                    }}
                    fullWidth
                />
            </Grid>
            <Grid>
                <Typography variant="body2" color="text.secondary">
                    Total Cost: {totalCost.toFixed(2)} € (incl. 1€ transaction fee)
                </Typography>
            </Grid>
        </Grid>
    );
};

import React, {useState, useRef} from 'react';
import {Box, Grid, Slider, TextField, Typography} from '@mui/material';

interface CurrentPositionProps {
    currentShares: string;
    currentBuyin: string;
    onSharesChange: (value: string) => void;
    onBuyinChange: (value: string) => void;
}

export const CurrentPosition: React.FC<CurrentPositionProps> = ({
    currentShares,
    currentBuyin,
    onSharesChange,
    onBuyinChange,
}) => {
    const [localShares, setLocalShares] = useState(10);
    const [isDragging, setIsDragging] = useState(false);
    const [buyinFocused, setBuyinFocused] = useState(false);
    const lastValueRef = useRef(10);

    React.useEffect(() => {
        if (!isDragging) {
            setLocalShares(Number.parseInt(currentShares || '0', 10));
        }
    }, [currentShares, isDragging]);

    return (
        <Grid container spacing={2} direction="column">
            <Grid>
                <Typography variant="h5" color="text.secondary" gutterBottom>
                    Current Position
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
                            const numValue = value as number;
                            setLocalShares(numValue);
                            lastValueRef.current = numValue;
                        }}
                        onChangeCommitted={() => {
                            setIsDragging(false);
                            onSharesChange(lastValueRef.current.toString());
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
                    label="Current Buy-in (€)"
                    value={currentBuyin}
                    onChange={(e) => onBuyinChange(e.target.value.replace(',', '.'))}
                    onFocus={() => setBuyinFocused(true)}
                    onBlur={() => setBuyinFocused(false)}
                    type="number"
                    slotProps={{
                        htmlInput: {min: "0", step: "0.01"},
                        inputLabel: {
                            shrink: buyinFocused || !!currentBuyin,
                            sx: {backgroundColor: '#181818', paddingX: '4px', marginX: '-4px'}
                        }
                    }}
                    fullWidth
                />
            </Grid>
        </Grid>
    );
};

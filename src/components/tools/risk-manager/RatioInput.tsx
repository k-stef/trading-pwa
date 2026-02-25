import React from 'react';
import TextField from '@mui/material/TextField';
import {Grid, IconButton, InputAdornment} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';


interface RRRPriceInputProps {
    entryPrice: string;
    stopLossPrice: string;
    takeProfitPrice: string;
    quantity?: string;
    setEntryPrice: (v: string) => void;
    setStopLossPrice: (v: string) => void;
    setTakeProfitPrice: (v: string) => void;
    setQuantity?: (v: string) => void;
}

export const RatioInput: React.FC<RRRPriceInputProps> =
    ({
         entryPrice,
         stopLossPrice,
         takeProfitPrice,
         quantity,
         setEntryPrice,
         setStopLossPrice,
         setTakeProfitPrice,
         setQuantity
     }) => (
        <Grid container spacing={2} direction="column">
            <Grid>
                <PriceInput
                    label="Entry Price"
                    value={entryPrice}
                    onChange={(e) => setEntryPrice(e.target.value)}
                    onClear={() => setEntryPrice("")}
                />
            </Grid>
            <Grid container spacing={2}>
                <Grid size={{xs: 6}}>
                    <PriceInput
                        label="Stop-Loss Price"
                        value={stopLossPrice}
                        onChange={(e) => setStopLossPrice(e.target.value)}
                        onClear={() => setStopLossPrice("")}
                    />
                </Grid>
                <Grid size={{xs: 6}}>
                    <PriceInput
                        label="Take-Profit Price"
                        value={takeProfitPrice}
                        onChange={(e) => setTakeProfitPrice(e.target.value)}
                        onClear={() => setTakeProfitPrice("")}
                    />
                </Grid>
            </Grid>
            {quantity !== undefined && setQuantity && (
                <Grid size={{xs: 12}}>
                    <TextField
                        label="Quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value.replace(/\D/g, ""))}
                        type="number"
                        slotProps={{
                            htmlInput: {
                                step: "1", min: "1"
                            }
                        }}
                        fullWidth
                    />
                </Grid>
            )}
        </Grid>
    );


interface PriceInputProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClear: () => void;
}

export const PriceInput: React.FC<PriceInputProps> = ({label, value, onChange, onClear}) => (
    <TextField
        label={label}
        value={value}
        onChange={onChange}
        type="number"
        slotProps={{
            htmlInput: {
                step: "0.01", min: "0"
            },
            input: {
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            size="small"
                            onClick={onClear}
                            edge="end"
                            aria-label="clear"
                            sx={{ visibility: value ? 'visible' : 'hidden' }}
                        >
                            <ClearIcon fontSize="small" />
                        </IconButton>
                    </InputAdornment>
                )
            }
        }}
        fullWidth
    />
);

import React from 'react';
import TextField from '@mui/material/TextField';
import {Grid} from "@mui/material";


interface RRRPriceInputProps {
    entryPrice: string;
    stopLossPrice: string;
    takeProfitPrice: string;
    setEntryPrice: (v: string) => void;
    setStopLossPrice: (v: string) => void;
    setTakeProfitPrice: (v: string) => void;
}

export const RatioPriceInput: React.FC<RRRPriceInputProps> =
    ({
         entryPrice,
         stopLossPrice,
         takeProfitPrice,
         setEntryPrice,
         setStopLossPrice,
         setTakeProfitPrice,
     }) => (
        <Grid container spacing={2} direction="column">
            <Grid>
                <PriceInput
                    label="Entry Price"
                    value={entryPrice}
                    onChange={(e) => setEntryPrice(e.target.value)}
                />
            </Grid>
            <Grid container spacing={2}>
                <Grid size={{xs: 6}}>
                    <PriceInput
                        label="Stop-Loss Price"
                        value={stopLossPrice}
                        onChange={(e) => setStopLossPrice(e.target.value)}
                    />
                </Grid>
                <Grid size={{xs: 6}}>
                    <PriceInput
                        label="Take-Profit Price"
                        value={takeProfitPrice}
                        onChange={(e) => setTakeProfitPrice(e.target.value)}
                    />
                </Grid>
            </Grid>
        </Grid>
    );


interface PriceInputProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PriceInput: React.FC<PriceInputProps> = ({label, value, onChange}) => (
    <TextField
        label={label}
        value={value}
        onChange={onChange}
        type="number"
        slotProps={{
            htmlInput: {
                step: "0.01", min: "0"
            }
        }}
        fullWidth
    />
);

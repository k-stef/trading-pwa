import React from 'react';
import TextField from '@mui/material/TextField';
import {Grid} from "@mui/material";


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

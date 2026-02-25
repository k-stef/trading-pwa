import {Grid, IconButton, InputAdornment, TextField} from "@mui/material";
import React from "react";
import ClearIcon from '@mui/icons-material/Clear';

type BuyInputFieldsProps = {
    buy: string;
    buyQty: string;
    onBuyChange: (v: string) => void;
    onBuyQtyChange: (v: string) => void;
};

export const BuyInputFields: React.FC<BuyInputFieldsProps> =
    ({
         buy,
         buyQty,
         onBuyChange,
         onBuyQtyChange
     }) => {
        const [isBuyFocused, setIsBuyFocused] = React.useState(false);
        const [isBuyQtyFocused, setIsBuyQtyFocused] = React.useState(false);

        return (
            <Grid container marginBottom={2} spacing={2}>
                <Grid size={{xs: 8}}>
                    <TextField
                        label="Buy Price (€)"
                        value={buy}
                        onChange={(e) => onBuyChange(e.target.value)}
                        onFocus={() => setIsBuyFocused(true)}
                        onBlur={() => setIsBuyFocused(false)}
                        type="number"
                        slotProps={{
                            htmlInput: {
                                step: "0.01",
                                min: "0"
                            },
                            inputLabel: {
                                shrink: isBuyFocused || !!buy
                            },
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            size="small"
                                            onClick={() => onBuyChange("")}
                                            edge="end"
                                            aria-label="clear"
                                            sx={{ visibility: buy ? 'visible' : 'hidden' }}
                                        >
                                            <ClearIcon fontSize="small" />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }
                        }}
                        fullWidth
                    />
                </Grid>
                <Grid size={{xs: 4}}>
                    <TextField
                        label="Buy Quantity"
                        value={buyQty}
                        onChange={(e) => {
                            onBuyQtyChange(e.target.value.replace(/\D/g, ""));
                        }}
                        onFocus={() => setIsBuyQtyFocused(true)}
                        onBlur={() => setIsBuyQtyFocused(false)}
                        type="number"
                        slotProps={{
                            htmlInput: {
                                step: "1",
                                min: "1"
                            },
                            inputLabel: {
                                shrink: isBuyQtyFocused || !!buyQty
                            }
                        }}
                        fullWidth
                    />
                </Grid>
            </Grid>
        );
    };
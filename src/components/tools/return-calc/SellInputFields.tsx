import React from "react";
import {Grid, IconButton, InputAdornment, TextField} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

type SellInputFieldsProps = {
    sell: string;
    sellQty: string;
    onSellChange: (v: string) => void;
    onSellQtyChange: (v: string) => void;
};

export const SellInputFields: React.FC<SellInputFieldsProps> =
    ({
         sell,
         sellQty,
         onSellChange,
         onSellQtyChange
     }) => (
        <Grid container spacing={2}>
            <Grid size={{xs: 8}}>
                <TextField
                    label="Sell Price (€)"
                    value={sell}
                    onChange={(e) => onSellChange(e.target.value)}
                    type="number"
                    slotProps={{
                        htmlInput: {
                            step: "0.01",
                            min: "0"
                        },
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        size="small"
                                        onClick={() => onSellChange("")}
                                        edge="end"
                                        aria-label="clear"
                                        sx={{ visibility: sell ? 'visible' : 'hidden' }}
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
                    label="Sell Quantity"
                    value={sellQty}
                    onChange={(e) => {
                        onSellQtyChange(e.target.value.replace(/\D/g, ""));
                    }}
                    type="number"
                    slotProps={{
                        htmlInput: {
                            step: "1",
                            min: "1"
                        }
                    }}
                    fullWidth
                />
            </Grid>
        </Grid>
    );
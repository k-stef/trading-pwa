import React from "react";
import {Grid, TextField} from "@mui/material";

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
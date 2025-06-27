import {Grid, TextField} from "@mui/material";
import React from "react";

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
     }) => (
        <Grid container marginBottom={2} spacing={2}>
            <Grid size={{xs: 8}}>
                <TextField
                    label="Buy Price (€)"
                    value={buy}
                    onChange={(e) => onBuyChange(e.target.value)}
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
                    label="Buy Quantity"
                    value={buyQty}
                    onChange={(e) => {
                        onBuyQtyChange(e.target.value.replace(/\D/g, ""));
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
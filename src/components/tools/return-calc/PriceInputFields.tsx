import React from "react";
import {Grid, TextField} from "@mui/material";

type PriceInputFieldsProps = {
    buy: string;
    buyQty: string;
    sell: string;
    sellQty: string;
    onBuyChange: (v: string) => void;
    onBuyQtyChange: (v: string) => void;
    onSellChange: (v: string) => void;
    onSellQtyChange: (v: string) => void;
};

export const PriceInputFields: React.FC<PriceInputFieldsProps> = ({
                                                                      buy,
                                                                      buyQty,
                                                                      sell,
                                                                      sellQty,
                                                                      onBuyChange,
                                                                      onBuyQtyChange,
                                                                      onSellChange,
                                                                      onSellQtyChange
                                                                  }: PriceInputFieldsProps) => (
    <>
        <Grid container marginBottom={2} spacing={2}>
            <Grid size={{xs: 8}}>
                <TextField
                    label="Buy Price (€)"
                    value={buy}
                    onChange={(e) => onBuyChange(e.target.value)}
                    type="number"
                    slotProps={{
                        htmlInput: {
                            step: "0.01", min: "0"
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
                        onBuyQtyChange(e.target.value.replace(/\D/g, ""))
                        onSellQtyChange(e.target.value.replace(/\D/g, ""))
                    }}
                    type="number"
                    slotProps={{
                        htmlInput: {
                            step: "1", min: "1"
                        }
                    }}
                    fullWidth
                />
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid size={{xs: 8}}>
                <TextField
                    label="Sell Price (€)"
                    value={sell}
                    onChange={(e) => onSellChange(e.target.value)}
                    type="number"
                    slotProps={{
                        htmlInput: {
                            step: "0.01", min: "0"
                        }
                    }} fullWidth
                />
            </Grid>
            <Grid size={{xs: 4}}>
                <TextField
                    label="Sell Quantity"
                    value={sellQty}
                    onChange={(e) => onSellQtyChange(e.target.value.replace(/\D/g, ""))}
                    type="number"
                    slotProps={{
                        htmlInput: {
                            step: "1", min: "1"
                        }
                    }} fullWidth
                />
            </Grid>
        </Grid>
    </>
);

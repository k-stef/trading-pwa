import React, { useState } from "react";
import { Box, TextField, Typography, Grid } from "@mui/material";
import { transactionFee } from "../../constants";

export const ReturnCalc: React.FC = () => {
  const [buy, setBuy] = useState<string>("");
  const [buyQty, setBuyQty] = useState<string>("1");
  const [sell, setSell] = useState<string>("");
  const [sellQty, setSellQty] = useState<string>("1");

  const buyNum = parseFloat(buy.replace(",", "."));
  const buyQtyNum = parseInt(buyQty, 10);
  const sellNum = parseFloat(sell.replace(",", "."));
  const sellQtyNum = parseInt(sellQty, 10);

  const valid =
    !isNaN(buyNum) &&
    !isNaN(sellNum) &&
    !isNaN(buyQtyNum) &&
    !isNaN(sellQtyNum) &&
    buyNum !== 0 &&
    buyQtyNum > 0 &&
    sellQtyNum > 0;

  const totalBuy = buyNum * buyQtyNum;
  const totalSell = sellNum * sellQtyNum;

  const returnEuro = valid
    ? totalSell - totalBuy - 2 * transactionFee
    : undefined;
  const returnPercent = valid
    ? ((totalSell - totalBuy - 2 * transactionFee) / totalBuy) * 100
    : undefined;

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400 }}
    >
      <Grid container spacing={2} size={{ xs: 12 }}>
        <Grid size={{ xs: 8 }}>
          <TextField
            label="Buy Price (€)"
            value={buy}
            onChange={(e) => setBuy(e.target.value)}
            type="number"
            inputProps={{ step: "0.01", min: "0" }}
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <TextField
            label="Buy Quantity"
            value={buyQty}
            onChange={(e) => setBuyQty(e.target.value.replace(/[^0-9]/g, ""))}
            type="number"
            inputProps={{ step: "1", min: "1" }}
            fullWidth
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid size={{ xs: 8 }}>
          <TextField
            label="Sell Price (€)"
            value={sell}
            onChange={(e) => setSell(e.target.value)}
            type="number"
            inputProps={{ step: "0.01", min: "0" }}
            fullWidth
          />
        </Grid>
        <Grid size={{ xs: 4 }}>
          <TextField
            label="Sell Quantity"
            value={sellQty}
            onChange={(e) => setSellQty(e.target.value.replace(/[^0-9]/g, ""))}
            type="number"
            inputProps={{ step: "1", min: "1" }}
            fullWidth
          />
        </Grid>
      </Grid>
      <Typography variant="subtitle1">
        Return (€): {valid ? returnEuro?.toFixed(2) : "-"}
      </Typography>
      <Typography variant="subtitle1">
        Return (%): {valid ? returnPercent?.toFixed(2) + " %" : "-"}
      </Typography>
    </Box>
  );
};

export default ReturnCalc;

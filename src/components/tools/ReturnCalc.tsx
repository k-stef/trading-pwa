import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";

export const ReturnCalc: React.FC = () => {
  const [buy, setBuy] = useState<string>("");
  const [sell, setSell] = useState<string>("");

  const buyNum = parseFloat(buy.replace(",", "."));
  const sellNum = parseFloat(sell.replace(",", "."));

  const valid = !isNaN(buyNum) && !isNaN(sellNum) && buyNum !== 0;

  const returnEuro = valid ? sellNum - buyNum : undefined;
  const returnPercent = valid ? ((sellNum - buyNum) / buyNum) * 100 : undefined;

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 300 }}
    >
      <TextField
        label="Buy Price (€)"
        value={buy}
        onChange={(e) => setBuy(e.target.value)}
        type="number"
        inputProps={{ step: "0.01", min: "0" }}
      />
      <TextField
        label="Sell Price (€)"
        value={sell}
        onChange={(e) => setSell(e.target.value)}
        type="number"
        inputProps={{ step: "0.01", min: "0" }}
      />
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

import {Typography} from "@mui/material";
import React from "react";

export const Returns: React.FC<{ returnEuro?: number; returnPercent?: number; valid: boolean }> = ({returnEuro, returnPercent, valid}) => {
    return (
        <>
            <Typography variant="subtitle1" marginBottom={1.5}>
                Return (€): {valid ? returnEuro?.toFixed(2) : "-"}
            </Typography>
            <Typography variant="subtitle1">
                Return (%): {valid ? returnPercent?.toFixed(2) + " %" : "-"}
            </Typography>
        </>
    );
};
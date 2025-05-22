import {Box, Grid, Typography} from "@mui/material";
import React from "react";

export const Returns: React.FC<{
    returnEuroBeforeTaxes?: number;
    returnPercentBeforeTaxes?: number;
    returnEuroAfterTaxes?: number;
    returnPercentAfterTaxes?: number;
    valid: boolean
}> = ({returnEuroBeforeTaxes, returnPercentBeforeTaxes, returnEuroAfterTaxes, returnPercentAfterTaxes, valid}) => {
    return (
        <Grid container spacing={2}>
            <Grid size={{xs: 6}}>
                <Typography variant="subtitle1" marginBottom={1.5}>
                    Return before taxes:
                </Typography>
            </Grid>
            <Grid size={{xs: 6}} display={"flex"} flexDirection={"row"} justifyContent={"flex-end"}>
                <Typography variant="subtitle1">
                    {valid ? `${returnEuroBeforeTaxes?.toFixed(2)} €` : "-"}
                </Typography>
                <Box mx={1}></Box>
                <Typography variant="subtitle1">
                    {valid ? `${returnPercentBeforeTaxes?.toFixed(2)} %` : "-"}
                </Typography>
            </Grid>
            <Grid size={{xs: 6}}>
                <Typography variant="subtitle1" marginBottom={1.5}>
                    Return after taxes:
                </Typography>
            </Grid>
            <Grid size={{xs: 6}} display={"flex"} flexDirection={"row"} justifyContent={"flex-end"}>
                <Typography variant="subtitle1">
                    {valid ? `${returnEuroAfterTaxes?.toFixed(2)} €` : "-"}
                </Typography>
                <Box mx={1}></Box>
                <Typography variant="subtitle1">
                    {valid ? `${returnPercentAfterTaxes?.toFixed(2)} %` : "-"}
                </Typography>
            </Grid>
        </Grid>
    );
};
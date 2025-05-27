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
        <Grid container>
            <ReturnBeforeTaxes
                returnEuroBeforeTaxes={returnEuroBeforeTaxes}
                returnPercentBeforeTaxes={returnPercentBeforeTaxes}
                valid={valid}
            />
            <ReturnAfterTaxes
                returnEuroAfterTaxes={returnEuroAfterTaxes}
                returnPercentAfterTaxes={returnPercentAfterTaxes}
                valid={valid}
            />
        </Grid>

    );
};

const ReturnBeforeTaxes: React.FC<{
    returnEuroBeforeTaxes: number | undefined;
    returnPercentBeforeTaxes: number | undefined;
    valid: boolean;
}> = ({returnEuroBeforeTaxes, returnPercentBeforeTaxes, valid}) => {
    return (
        <>
            <Grid size={{xs: 6}}>
                <Typography variant="subtitle1" marginBottom={1.5}>
                    Return before taxes:
                </Typography>
            </Grid>
            <Grid size={{xs: 6}} display={"flex"} flexDirection={"row"} justifyContent={"flex-end"}>
                {valid ? (
                    <>
                        <Typography variant="subtitle1" style={{width: "50px"}}>
                            {returnEuroBeforeTaxes?.toFixed(2)} €
                        </Typography>
                        <Box mx={1}></Box>
                        <Typography variant="subtitle1">
                            {returnPercentBeforeTaxes?.toFixed(2)} %
                        </Typography>
                    </>
                ) : (
                    <Typography variant="subtitle1"> - </Typography>
                )}
            </Grid>
        </>
    )
}

const ReturnAfterTaxes: React.FC<{
    returnEuroAfterTaxes: number | undefined;
    returnPercentAfterTaxes: number | undefined;
    valid: boolean;
}> = ({returnEuroAfterTaxes, returnPercentAfterTaxes, valid}) => {
    return (
        <>
            <Grid size={{xs: 6}}>
                <Typography variant="subtitle1">
                    Return after taxes:
                </Typography>
            </Grid>
            <Grid size={{xs: 6}} display={"flex"} flexDirection={"row"} justifyContent={"flex-end"}>
                {valid && returnEuroAfterTaxes !== undefined && (returnEuroAfterTaxes > 0) ? (
                    <>
                        <Typography variant="subtitle1" style={{width: "50px"}}>
                            {returnEuroAfterTaxes?.toFixed(2)} €
                        </Typography>
                        <Box mx={1}></Box>
                        <Typography variant="subtitle1">
                            {returnPercentAfterTaxes?.toFixed(2)} %
                        </Typography>
                    </>
                ) : (
                    <Typography variant="subtitle1">-</Typography>
                )}
            </Grid>
        </>
    )
}
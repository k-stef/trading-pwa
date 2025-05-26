import {Grid, Typography} from "@mui/material";
import React from "react";

interface RiskRewardOutputProps {
    calcRisk: number;
    calcReward: number;
    calcRiskRatio: string;
    calcRewardRatioBeforeTaxes: string;
    calcRewardRatioAfterTaxes: string;
}

export const RiskRewardOutput: React.FC<RiskRewardOutputProps> =
    ({
         calcRisk,
         calcReward,
         calcRiskRatio,
         calcRewardRatioBeforeTaxes,
         calcRewardRatioAfterTaxes
     }) => (
        <>
            <Grid container justifyContent="space-between">
                <Grid>
                    <Typography variant="body1">Risk:</Typography>
                </Grid>
                {calcRisk && calcRiskRatio ? (
                    <Grid>
                        <Grid container spacing={2}>
                            <Grid>
                                <Typography variant="body1">{calcRisk.toFixed(2)} €</Typography>
                            </Grid>
                            <Grid>
                                <Typography variant="body1">{calcRiskRatio} %</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                ) : "-"}
            </Grid>
            <Grid container justifyContent="space-between">
                <Grid>
                    <Typography variant="body1">Reward Before Taxes:</Typography>
                </Grid>
                {calcReward && calcRewardRatioBeforeTaxes ? (
                    <Grid>
                        <Grid container spacing={2}>
                            <Grid>
                                <Typography variant="body1">{calcReward.toFixed(2)} €</Typography>
                            </Grid>
                            <Grid>
                                <Typography variant="body1">{calcRewardRatioBeforeTaxes} %</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                ) : "-"}
            </Grid>
            <Grid container justifyContent="space-between">
                <Grid>
                    <Typography variant="body1">Reward After Taxes:</Typography>
                </Grid>
                {calcReward && calcRewardRatioAfterTaxes ? (
                    <Grid>
                        <Grid container spacing={2}>
                            <Grid>
                                <Typography variant="body1">{(calcReward * 0.75).toFixed(2)} €</Typography>
                            </Grid>
                            <Grid>
                                <Typography variant="body1">{calcRewardRatioAfterTaxes} %</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                ) : "-"}
            </Grid>
        </>
    )
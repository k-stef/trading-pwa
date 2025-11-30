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
            {/* Risk - nur anzeigen wenn Wert vorhanden */}
            {calcRisk > 0 && calcRiskRatio !== "0.00" && (
                <Grid container justifyContent="space-between" sx={{ mb: 1 }}>
                    <Grid>
                        <Typography variant="body1">Risk:</Typography>
                    </Grid>
                    <Grid>
                        <Grid container spacing={2}>
                            <Grid>
                                <Typography variant="body1" style={{width: "50px"}}>{calcRisk.toFixed(2)} €</Typography>
                            </Grid>
                            <Grid>
                                <Typography variant="body1">{calcRiskRatio} %</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )}

            {/* Reward Before Taxes - nur anzeigen wenn Wert vorhanden */}
            {calcReward > 0 && calcRewardRatioBeforeTaxes !== "0.00" && (
                <Grid container justifyContent="space-between" sx={{ mb: 1 }}>
                    <Grid>
                        <Typography variant="body1">Reward Before Taxes:</Typography>
                    </Grid>
                    <Grid>
                        <Grid container spacing={2}>
                            <Grid>
                                <Typography variant="body1" style={{width: "50px"}}>{calcReward.toFixed(2)} €</Typography>
                            </Grid>
                            <Grid>
                                <Typography variant="body1">{calcRewardRatioBeforeTaxes} %</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )}

            {/* Reward After Taxes - nur anzeigen wenn Wert vorhanden */}
            {calcReward > 0 && calcRewardRatioAfterTaxes !== "0.00" && (
                <Grid container justifyContent="space-between">
                    <Grid>
                        <Typography variant="body1">Reward After Taxes:</Typography>
                    </Grid>
                    <Grid>
                        <Grid container spacing={2}>
                            <Grid>
                                <Typography variant="body1" style={{width: "50px"}}>{(calcReward * 0.75).toFixed(2)} €</Typography>
                            </Grid>
                            <Grid>
                                <Typography variant="body1">{calcRewardRatioAfterTaxes} %</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </>
    )
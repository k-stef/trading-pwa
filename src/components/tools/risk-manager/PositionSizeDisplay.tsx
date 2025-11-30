import React from 'react';
import {Divider, Grid, Paper, Typography} from '@mui/material';
import {formatCurrency, formatQuantity} from '../../../utils/formatters';

interface PositionSizeDisplayProps {
    quantity: number;
    positionValue: number;
    riskRewardRatio?: number | null;
    riskAmount?: number;
    rewardAmount?: number;
    riskRatio?: string;
    rewardRatioBeforeTaxes?: string;
    rewardRatioAfterTaxes?: string;
}

export const PositionSizeDisplay: React.FC<PositionSizeDisplayProps> = ({
                                                                            quantity,
                                                                            positionValue,
                                                                            riskRewardRatio,
                                                                            riskAmount = 0,
                                                                            rewardAmount = 0,
                                                                            riskRatio = "0.00",
                                                                            rewardRatioBeforeTaxes = "0.00",
                                                                            rewardRatioAfterTaxes = "0.00",
                                                                        }) => {
    // Prüfen ob zusätzliche Inhalte angezeigt werden sollen
    const hasAdditionalContent =
        riskRewardRatio !== null ||
        riskAmount > 0 ||
        rewardAmount > 0;

    return (
        <Paper elevation={2} sx={{bgcolor: 'primary.dark', p: 2}}>
            <Grid container spacing={2}>
                <Grid size={{xs: 6}}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        Quantity (Shares)
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                        {formatQuantity(quantity)}
                    </Typography>
                </Grid>
                <Grid size={{xs: 6}}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        Position Value
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                        {formatCurrency(positionValue)}
                    </Typography>
                </Grid>
            </Grid>

            {/* Divider nur anzeigen wenn zusätzliche Inhalte vorhanden */}
            {hasAdditionalContent && (
                <Divider sx={{my: 2, borderColor: 'rgba(255, 255, 255, 0.12)'}}/>
            )}

            {/* Risk/Reward Ratio - nur anzeigen wenn ein gültiger Wert vorhanden ist */}
            {riskRewardRatio !== null && riskRewardRatio !== undefined && !Number.isNaN(riskRewardRatio) && riskRewardRatio > 0 && (
                <Grid container justifyContent="space-between" alignItems="center" sx={{mb: 1}}>
                    <Grid>
                        <Typography variant="body1">
                            Risk Reward Ratio (Fees Included) :
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="body1" color={riskRewardRatio > 3 ? "success" : "error"}>
                            {riskRewardRatio.toFixed(2)}
                        </Typography>
                    </Grid>
                </Grid>
            )}

            {/* Risk */}
            {riskAmount > 0 && riskRatio !== "0.00" && (
                <Grid container justifyContent="space-between" sx={{mb: 1}}>
                    <Grid>
                        <Typography variant="body1">Risk:</Typography>
                    </Grid>
                    <Grid>
                        <Grid container spacing={2}>
                            <Grid>
                                <Typography variant="body1" style={{width: "50px"}}>{riskAmount.toFixed(2)} €</Typography>
                            </Grid>
                            <Grid>
                                <Typography variant="body1">{riskRatio} %</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )}

            {/* Reward Before Taxes */}
            {rewardAmount > 0 && rewardRatioBeforeTaxes !== "0.00" && (
                <Grid container justifyContent="space-between" sx={{mb: 1}}>
                    <Grid>
                        <Typography variant="body1">Reward Before Taxes:</Typography>
                    </Grid>
                    <Grid>
                        <Grid container spacing={2}>
                            <Grid>
                                <Typography variant="body1" style={{width: "50px"}}>{rewardAmount.toFixed(2)} €</Typography>
                            </Grid>
                            <Grid>
                                <Typography variant="body1">{rewardRatioBeforeTaxes} %</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )}

            {/* Reward After Taxes */}
            {rewardAmount > 0 && rewardRatioAfterTaxes !== "0.00" && (
                <Grid container justifyContent="space-between">
                    <Grid>
                        <Typography variant="body1">Reward After Taxes:</Typography>
                    </Grid>
                    <Grid>
                        <Grid container spacing={2}>
                            <Grid>
                                <Typography variant="body1" style={{width: "50px"}}>{(rewardAmount * 0.75).toFixed(2)} €</Typography>
                            </Grid>
                            <Grid>
                                <Typography variant="body1">{rewardRatioAfterTaxes} %</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            )}
        </Paper>
    );
};
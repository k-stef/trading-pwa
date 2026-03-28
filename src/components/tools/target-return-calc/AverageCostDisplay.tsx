import React from 'react';
import {Divider, Grid, Paper, Typography} from '@mui/material';
import {formatCurrency, formatQuantity} from '../../../utils/formatters';

interface AverageCostDisplayProps {
    currentShares: number;
    currentBuyin: number;
    newShares: number;
    newPrice: number;
    newAvgBuyin: number;
    totalInvested: number;
}

export const AverageCostDisplay: React.FC<AverageCostDisplayProps> = ({
    currentShares,
    currentBuyin,
    newShares,
    newPrice,
    newAvgBuyin,
    totalInvested,
}) => {
    const oldTotalValue = currentShares * currentBuyin;
    const newTotalValue = (currentShares + newShares) * newAvgBuyin;
    const priceDifference = newAvgBuyin - currentBuyin;
    const priceChangePercent = currentBuyin > 0 ? ((priceDifference / currentBuyin) * 100) : 0;

    return (
        <Paper elevation={2} sx={{bgcolor: 'primary.dark', p: 2}}>
            <Grid container spacing={2}>
                <Grid size={{xs: 6}}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        Old Average Buy-in
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                        {formatCurrency(currentBuyin)}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        {formatQuantity(currentShares)} shares = {formatCurrency(oldTotalValue)}
                    </Typography>
                </Grid>
                <Grid size={{xs: 6}}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        New Average Buy-in
                    </Typography>
                    <Typography variant="h6" color={newAvgBuyin < currentBuyin ? "success.main" : "error.main"}>
                        {formatCurrency(newAvgBuyin)}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        {formatQuantity(currentShares + newShares)} shares = {formatCurrency(newTotalValue)}
                    </Typography>
                </Grid>
            </Grid>

            <Divider sx={{my: 2, borderColor: 'rgba(255, 255, 255, 0.12)'}}/>

            <Grid container spacing={2}>
                <Grid size={{xs: 6}}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        Price Change
                    </Typography>
                    <Typography variant="h6" color={priceDifference < 0 ? "success.main" : "error.main"}>
                        {priceDifference >= 0 ? '+' : ''}{formatCurrency(priceDifference)}
                    </Typography>
                    <Typography variant="caption" color={priceChangePercent < 0 ? "success.main" : "error.main"}>
                        ({priceChangePercent >= 0 ? '+' : ''}{priceChangePercent.toFixed(2)}%)
                    </Typography>
                </Grid>
                <Grid size={{xs: 6}}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        New Investment
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                        {formatCurrency((newShares * newPrice) + 1)}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                        Total invested: {formatCurrency(totalInvested)}
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

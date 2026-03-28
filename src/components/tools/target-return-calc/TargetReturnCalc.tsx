import React, {useEffect, useState} from 'react';
import {Alert, Grid} from '@mui/material';
import {CurrentPosition} from './CurrentPosition';
import {NewPurchase} from './NewPurchase';
import {AverageCostDisplay} from './AverageCostDisplay';

interface CalculationResult {
    newAvgBuyin: number;
    totalInvested: number;
}

const calculateAverageCost = (
    currentShares: number,
    currentBuyin: number,
    newShares: number,
    newPrice: number
): CalculationResult | null => {
    if (currentShares <= 0 || currentBuyin <= 0 || newShares <= 0 || newPrice <= 0) {
        return null;
    }

    const oldTotalValue = currentShares * currentBuyin;
    const newPurchaseCost = (newShares * newPrice) + 1;
    const totalInvested = oldTotalValue + newPurchaseCost;
    const totalShares = currentShares + newShares;
    const newAvgBuyin = totalInvested / totalShares;

    return {
        newAvgBuyin,
        totalInvested,
    };
};

const TargetReturnCalc: React.FC = () => {
    const [currentShares, setCurrentShares] = useState<string>("10");
    const [currentBuyin, setCurrentBuyin] = useState<string>("");
    const [newShares, setNewShares] = useState<number>(10);
    const [newPrice, setNewPrice] = useState<string>("");
    const [calculationResult, setCalculationResult] = useState<CalculationResult | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const shares = Number.parseInt(currentShares || '0', 10);
        const buyin = Number.parseFloat(currentBuyin || '0');
        const price = Number.parseFloat(newPrice || '0');

        if (!currentShares || !currentBuyin || !newPrice) {
            setCalculationResult(null);
            setError(null);
            return;
        }

        if (Number.isNaN(shares) || shares <= 0) {
            setError("Please enter a valid number of current shares.");
            setCalculationResult(null);
            return;
        }

        if (Number.isNaN(buyin) || buyin <= 0) {
            setError("Please enter a valid current buy-in price.");
            setCalculationResult(null);
            return;
        }

        if (Number.isNaN(price) || price <= 0) {
            setError("Please enter a valid price for new shares.");
            setCalculationResult(null);
            return;
        }

        const result = calculateAverageCost(shares, buyin, newShares, price);
        if (result) {
            setCalculationResult(result);
            setError(null);
        }
    }, [currentShares, currentBuyin, newShares, newPrice]);

    return (
        <Grid container spacing={4} direction="column">
            <Grid>
                <CurrentPosition
                    currentShares={currentShares}
                    currentBuyin={currentBuyin}
                    onSharesChange={setCurrentShares}
                    onBuyinChange={setCurrentBuyin}
                />
            </Grid>

            <Grid>
                <NewPurchase
                    newShares={newShares}
                    newPrice={newPrice}
                    onSharesChange={setNewShares}
                    onPriceChange={setNewPrice}
                />
            </Grid>

            {error && (
                <Grid>
                    <Alert severity="error">{error}</Alert>
                </Grid>
            )}

            {calculationResult && !error && (
                <Grid>
                    <AverageCostDisplay
                        currentShares={Number.parseInt(currentShares, 10)}
                        currentBuyin={Number.parseFloat(currentBuyin)}
                        newShares={newShares}
                        newPrice={Number.parseFloat(newPrice)}
                        newAvgBuyin={calculationResult.newAvgBuyin}
                        totalInvested={calculationResult.totalInvested}
                    />
                </Grid>
            )}
        </Grid>
    );
};

export default TargetReturnCalc;

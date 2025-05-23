import React, {useEffect, useState} from "react";
import {Grid, Typography} from "@mui/material";
import {RRRPriceInput} from "./RRRPriceInput";

export const RRRCalc: React.FC = () => {
    const [entryPrice, setEntryPrice] = useState<string>("");
    const [stopLossPrice, setStopLossPrice] = useState<string>("");
    const [takeProfitPrice, setTakeProfitPrice] = useState<string>("");
    const [riskRewardRatio, setRiskRewardRatio] = useState<number | null>(null);
    const [error, setError] = useState<string>("");

    const calculateRRR = () => {
        const entry = parseFloat(entryPrice);
        const stopLoss = parseFloat(stopLossPrice);
        const takeProfit = parseFloat(takeProfitPrice);

        if (isNaN(entry) || isNaN(stopLoss) || isNaN(takeProfit)) {
            setRiskRewardRatio(null);
            return;
        }

        if (stopLoss >= entry) {
            setRiskRewardRatio(null);
            setError("Stop-Loss price must be lower than Entry price.");
            return;
        }

        if (takeProfit <= entry) {
            setRiskRewardRatio(null);
            setError("Take-Profit price must be higher than Entry price.");
            return;
        }

        const risk = Math.abs(entry - stopLoss);
        const reward = Math.abs(takeProfit - entry);

        setRiskRewardRatio(reward / risk);
        setError("");
    };

    useEffect(() => {
        calculateRRR();
    }, [entryPrice, stopLossPrice, takeProfitPrice]);

    return (
        <Grid container spacing={4} direction="column">
            <Grid>
                <RRRPriceInput
                    entryPrice={entryPrice}
                    stopLossPrice={stopLossPrice}
                    takeProfitPrice={takeProfitPrice}
                    setEntryPrice={setEntryPrice}
                    setStopLossPrice={setStopLossPrice}
                    setTakeProfitPrice={setTakeProfitPrice}
                />
            </Grid>
            {error && (
                <Grid>
                    <Typography variant="body1" color="error">
                        {error}
                    </Typography>
                </Grid>
            )}
            {riskRewardRatio !== null && (
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid>
                        <Typography variant="body1">
                            Risk Reward Ratio:
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="body1">
                            {riskRewardRatio.toFixed(2)}
                        </Typography>
                    </Grid>
                </Grid>
            )}
        </Grid>
    );
};

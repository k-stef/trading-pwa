import React, {useEffect, useState} from "react";
import {Grid} from "@mui/material";
import {RatioPriceInput} from "./RatioPriceInput";
import {transactionFee} from "../../../constants";
import {RatioOutput} from "./RatioOutput";

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
        const reward = Math.abs(takeProfit - entry - (2 * transactionFee));

        setRiskRewardRatio((reward / risk));
        setError("");
    };

    useEffect(() => {
        calculateRRR();
    }, [entryPrice, stopLossPrice, takeProfitPrice]);

    return (
        <Grid container spacing={4} direction="column">
            <RatioPriceInput
                entryPrice={entryPrice}
                stopLossPrice={stopLossPrice}
                takeProfitPrice={takeProfitPrice}
                setEntryPrice={setEntryPrice}
                setStopLossPrice={setStopLossPrice}
                setTakeProfitPrice={setTakeProfitPrice}
            />
            <RatioOutput error={error} riskRewardRatio={riskRewardRatio}/>
        </Grid>
    );
};

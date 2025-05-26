import React, {useEffect, useState} from "react";
import {Grid} from "@mui/material";
import {RatioInput} from "./RatioInput";
import {transactionFee} from "../../../constants";
import {RatioOutput} from "./RatioOutput";
import {RiskRewardOutput} from "./RiskRewardOutput";

export const RRRCalc: React.FC = () => {
    const [entryPrice, setEntryPrice] = useState<string>("");
    const [stopLossPrice, setStopLossPrice] = useState<string>("");
    const [takeProfitPrice, setTakeProfitPrice] = useState<string>("");
    const [riskRewardRatio, setRiskRewardRatio] = useState<number | null>(null);
    const [quantity, setQuantity] = useState<string>("1");

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

        const risk = calcRisk();
        const reward = calcReward()

        setRiskRewardRatio((reward / risk));
        setError("");
    };

    useEffect(() => {
        calculateRRR();
    }, [entryPrice, stopLossPrice, takeProfitPrice, quantity]);

    const calcRisk = (): number => {
        return (Number(quantity) * Math.abs(parseFloat(entryPrice) - parseFloat(stopLossPrice))) + (2 * transactionFee);
    }

    const calcReward = (): number => {
        return (Number(quantity) * Math.abs(parseFloat(takeProfitPrice) - parseFloat(entryPrice))) - (2 * transactionFee);
    }

    const calcRiskRatio = () => {
        return (
            calcRisk() / (parseFloat(entryPrice) * Number(quantity)) * 100).toFixed(2)
    }

    const calcRewardRatioBeforeTaxes = () => {
        return (calcReward() / (parseFloat(entryPrice) * Number(quantity)) * 100).toFixed(2)
    }

    const calcRewardRatioAfterTaxes = () => {
        return (calcReward() / (parseFloat(entryPrice) * Number(quantity)) * 100 * 0.75).toFixed(2)
    }

    useEffect(() => {
        calculateRRR();
    }, [entryPrice, stopLossPrice, takeProfitPrice]);

    return (
        <Grid container spacing={2} direction="column">
            <RatioInput
                entryPrice={entryPrice}
                stopLossPrice={stopLossPrice}
                takeProfitPrice={takeProfitPrice}
                quantity={quantity}
                setEntryPrice={setEntryPrice}
                setStopLossPrice={setStopLossPrice}
                setTakeProfitPrice={setTakeProfitPrice}
                setQuantity={setQuantity}
            />
            <RatioOutput error={error} riskRewardRatio={riskRewardRatio}/>
            <RiskRewardOutput
                calcRisk={calcRisk()}
                calcReward={calcReward()}
                calcRiskRatio={calcRiskRatio()}
                calcRewardRatioBeforeTaxes={calcRewardRatioBeforeTaxes()}
                calcRewardRatioAfterTaxes={calcRewardRatioAfterTaxes()}/>
        </Grid>
    );
};

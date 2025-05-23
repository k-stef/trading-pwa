import React, {useState} from "react";
import {Grid} from "@mui/material";
import {RRRPriceInput} from "./RRRPriceInput";

export const RRRCalc: React.FC = () => {
    const [entryPrice, setEntryPrice] = useState<string>("");
    const [stopLossPrice, setStopLossPrice] = useState<string>("");
    const [takeProfitPrice, setTakeProfitPrice] = useState<string>("");

    return (
        <Grid container spacing={2} direction="column">
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

        </Grid>
    );
};

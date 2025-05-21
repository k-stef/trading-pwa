import React, {useState} from "react";
import {Box} from "@mui/material";
import {transactionFee} from "../../../constants";
import {Returns} from "./Returns";
import {PriceInputFields} from "./PriceInputFields";

export const ReturnCalc: React.FC = () => {
    const [buy, setBuy] = useState<string>("");
    const [buyQty, setBuyQty] = useState<string>("1");
    const [sell, setSell] = useState<string>("");
    const [sellQty, setSellQty] = useState<string>("1");

    const buyNum = parseFloat(buy.replace(",", "."));
    const buyQtyNum = parseInt(buyQty, 10);
    const sellNum = parseFloat(sell.replace(",", "."));
    const sellQtyNum = parseInt(sellQty, 10);

    const valid =
        !isNaN(buyNum) &&
        !isNaN(sellNum) &&
        !isNaN(buyQtyNum) &&
        !isNaN(sellQtyNum) &&
        buyNum !== 0 &&
        buyQtyNum > 0 &&
        sellQtyNum > 0;

    const totalBuy = buyNum * buyQtyNum;
    const totalSell = sellNum * sellQtyNum;

    const returnEuro = valid
        ? totalSell - totalBuy - 2 * transactionFee
        : undefined;
    const returnPercent = valid
        ? ((totalSell - totalBuy - 2 * transactionFee) / totalBuy) * 100
        : undefined;

    return (
        <Box
            sx={{display: "flex", flexDirection: "column", gap: 2, maxWidth: 400}}
        >
            <PriceInputFields
                buy={buy}
                buyQty={buyQty}
                sell={sell}
                sellQty={sellQty}
                onBuyChange={setBuy}
                onBuyQtyChange={setBuyQty}
                onSellChange={setSell}
                onSellQtyChange={setSellQty}
            />
            <Returns returnEuro={returnEuro} returnPercent={returnPercent} valid={valid}/>
        </Box>
    );
};

export default ReturnCalc;
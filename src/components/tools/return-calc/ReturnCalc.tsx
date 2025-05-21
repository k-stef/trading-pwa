import React, {useState} from "react";
import {Grid} from "@mui/material";
import {Returns} from "./Returns";
import {PriceInputFields} from "./PriceInputFields";
import {FeeInputs} from "./FeeInputs";

export const ReturnCalc: React.FC = () => {
    const [buy, setBuy] = useState<string>("");
    const [buyQty, setBuyQty] = useState<string>("1");
    const [sell, setSell] = useState<string>("");
    const [sellQty, setSellQty] = useState<string>("1");
    const [selectedFeeButton, setSelectedFeeButton] = useState<number>(1);

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
        ? totalSell - totalBuy - selectedFeeButton
        : undefined;
    const returnPercent = valid
        ? ((totalSell - totalBuy - selectedFeeButton) / totalBuy) * 100
        : undefined;

    return (
        <Grid container spacing={4} direction="column">
            <Grid>
                <FeeInputs selectedFeeButton={selectedFeeButton} setSelectedFeeButton={setSelectedFeeButton}/>
            </Grid>
            <Grid>
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
            </Grid>
            <Grid>
                <Returns returnEuro={returnEuro} returnPercent={returnPercent} valid={valid}/>
            </Grid>
        </Grid>
    );
};

export default ReturnCalc;
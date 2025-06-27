import React from "react";
import {BuyInputFields} from "./BuyInputFields";
import {SellInputFields} from "./SellInputFields";

type PriceInputFieldsProps = {
    buy: string;
    buyQty: string;
    sell: string;
    sellQty: string;
    onBuyChange: (v: string) => void;
    onBuyQtyChange: (v: string) => void;
    onSellChange: (v: string) => void;
    onSellQtyChange: (v: string) => void;
};

export const PriceInputFields: React.FC<PriceInputFieldsProps> =
    ({
         buy,
         buyQty,
         sell,
         sellQty,
         onBuyChange,
         onBuyQtyChange,
         onSellChange,
         onSellQtyChange
     }: PriceInputFieldsProps) => {
        const handleBuyQtyChange = (v: string) => {
            onBuyQtyChange(v);
            onSellQtyChange(v);
        };

        return (
            <>
                <BuyInputFields
                    buy={buy}
                    buyQty={buyQty}
                    onBuyChange={onBuyChange}
                    onBuyQtyChange={handleBuyQtyChange}
                />
                <SellInputFields
                    sell={sell}
                    sellQty={sellQty}
                    onSellChange={onSellChange}
                    onSellQtyChange={onSellQtyChange}
                />
            </>
        )
    };

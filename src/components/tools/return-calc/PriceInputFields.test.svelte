import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import {PriceInputFields} from "./PriceInputFields";

jest.mock("./BuyInputFields", () => ({
    BuyInputFields: ({onBuyQtyChange}: { onBuyQtyChange: (value: string) => void }) => (
        <div data-testid="buy-input-fields">
            <input data-testid="buy-price-input" type="number"/>
            <input data-testid="buy-qty-input" type="number" onChange={(e) => onBuyQtyChange(e.target.value)}/>
        </div>
    )
}));

jest.mock("./SellInputFields", () => ({
    SellInputFields: ({onSellQtyChange}: { onSellQtyChange: (value: string) => void }) => (
        <div data-testid="sell-input-fields">
            <input data-testid="sell-price-input" type="number"/>
            <input data-testid="sell-qty-input" type="number" onChange={(e) => onSellQtyChange(e.target.value)}/>
        </div>
    )
}));

describe("PriceInputFields", () => {
    it("should set sellQty to the same value as buyQty", () => {
        const onBuyQtyChangeMock = jest.fn();
        const onSellQtyChangeMock = jest.fn();

        render(
            <PriceInputFields
                buy="100"
                buyQty="1"
                sell="200"
                sellQty="2"
                onBuyChange={() => {
                }}
                onBuyQtyChange={onBuyQtyChangeMock}
                onSellChange={() => {
                }}
                onSellQtyChange={onSellQtyChangeMock}
            />
        );

        fireEvent.change(screen.getByTestId("buy-qty-input"), {target: {value: "3"}});

        expect(onBuyQtyChangeMock).toHaveBeenCalledWith("3");
        expect(onSellQtyChangeMock).toHaveBeenCalledWith("3");
    });

    it("should not change buyQty when sellQty is set", () => {
        const onBuyQtyChangeMock = jest.fn();
        const onSellQtyChangeMock = jest.fn();

        render(
            <PriceInputFields
                buy="100"
                buyQty="1"
                sell="200"
                sellQty="2"
                onBuyChange={() => {
                }}
                onBuyQtyChange={onBuyQtyChangeMock}
                onSellChange={() => {
                }}
                onSellQtyChange={onSellQtyChangeMock}
            />
        );

        fireEvent.change(screen.getByTestId("sell-qty-input"), {target: {value: "4"}});

        expect(onBuyQtyChangeMock).not.toHaveBeenCalled();
        expect(onSellQtyChangeMock).toHaveBeenCalledWith("4");
    });
});
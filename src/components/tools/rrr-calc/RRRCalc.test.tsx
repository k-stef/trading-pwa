import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {RRRCalc} from './RRRCalc';

const setup = (entryPrice: string, stopLossPrice: string, takeProfitPrice: string, quantity: string) => {
    render(<RRRCalc/>);
    const entryPriceInput = screen.getByLabelText(/entry price/i);
    const stopLossPriceInput = screen.getByLabelText(/stop-loss price/i);
    const takeProfitPriceInput = screen.getByLabelText(/take-profit price/i);
    const quantityInput = screen.getByLabelText(/quantity/i);

    fireEvent.change(entryPriceInput, {target: {value: entryPrice}});
    fireEvent.change(stopLossPriceInput, {target: {value: stopLossPrice}});
    fireEvent.change(takeProfitPriceInput, {target: {value: takeProfitPrice}});
    fireEvent.change(quantityInput, {target: {value: quantity}});
};

describe('RRRCalc Component', () => {

    test('renders RRRCalc component correctly', () => {
        render(<RRRCalc/>);
        expect(screen.getByLabelText(/Entry Price/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Stop-Loss Price/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Take-Profit Price/i)).toBeInTheDocument();
        expect(screen.getByText(/Risk Reward Ratio \(Fees Included\) :/i)).toBeInTheDocument();
    });

    test('shows error when stop loss is not lower than entry', () => {
        render(<RRRCalc/>);

        const entryPriceInput = screen.getByLabelText(/entry price/i);
        const stopLossPriceInput = screen.getByLabelText(/stop-loss price/i);
        const takeProfitPriceInput = screen.getByLabelText(/take-profit price/i);

        fireEvent.change(entryPriceInput, {target: {value: '10'}});
        fireEvent.change(stopLossPriceInput, {target: {value: '10'}});
        fireEvent.change(takeProfitPriceInput, {target: {value: '14'}});

        expect(screen.getByText(/stop-loss price must be lower than entry price./i)).toBeInTheDocument();
    });

    test('shows error when take profit is not higher than entry', () => {
        render(<RRRCalc/>);

        const entryPriceInput = screen.getByLabelText(/entry price/i);
        const stopLossPriceInput = screen.getByLabelText(/stop-loss price/i);
        const takeProfitPriceInput = screen.getByLabelText(/take-profit price/i);

        fireEvent.change(entryPriceInput, {target: {value: '10'}});
        fireEvent.change(stopLossPriceInput, {target: {value: '8'}});
        fireEvent.change(takeProfitPriceInput, {target: {value: '10'}});

        expect(screen.getByText(/take-profit price must be higher than entry price./i)).toBeInTheDocument();
    });

    describe('for quantity = 1', () => {
        test('calculates RRR correctly', () => {
            setup('10', '8', '14', '1');

            expect(screen.getByText(/0.50/i)).toBeInTheDocument();
        });

        test('calculates risk correctly', () => {
            setup('10', '8', '14', '1');

            expect(screen.getByText(/4.00 €/i)).toBeInTheDocument();
            expect(screen.getByText(/40.00 %/i)).toBeInTheDocument();
        });

        test('calculates reward before taxes correctly', () => {
            setup('10', '8', '14', '1');

            expect(screen.getByText(/2.00 €/i)).toBeInTheDocument();
            expect(screen.getByText(/20.00 %/i)).toBeInTheDocument();
        });

        test('calculates reward after taxes correctly', () => {
            setup('10', '8', '14', '1');

            expect(screen.getByText(/1.50 €/i)).toBeInTheDocument();
            expect(screen.getByText(/15.00 %/i)).toBeInTheDocument();
        });
    })
    describe("for quantity = 2", () => {
        test('calculates RRR correctly', () => {
            setup('10', '8', '14', '2');

            expect(screen.getByText(/1.00/i)).toBeInTheDocument();
        });

        test('calculates risk correctly', () => {
            setup('10', '8', '14', '2');

            expect(screen.getAllByText(/6.00 €/i)).toHaveLength(2)
            expect(screen.getAllByText(/30.00 %/i)).toHaveLength(2)
        });

        test('calculates reward before taxes correctly', () => {
            setup('10', '8', '14', '2');

            expect(screen.getAllByText(/6.00 €/i)).toHaveLength(2)
            expect(screen.getAllByText(/30.00 %/i)).toHaveLength(2)
        });

        test('calculates reward after taxes correctly', () => {
            setup('10', '8', '14', '2');

            expect(screen.getByText(/4.50 €/i)).toBeInTheDocument();
            expect(screen.getByText(/22.50 %/i)).toBeInTheDocument();
        });
    })

});
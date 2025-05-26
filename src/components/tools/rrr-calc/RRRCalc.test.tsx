import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {RRRCalc} from './RRRCalc';

test('renders RRRCalc component correctly', () => {
    render(<RRRCalc/>);
    expect(screen.getByLabelText(/Entry Price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Stop-Loss Price/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Take-Profit Price/i)).toBeInTheDocument();
    expect(screen.getByText(/Risk Reward Ratio \(Fees Included\) :/i)).toBeInTheDocument();
});

test('calculates RRR correctly', () => {
    render(<RRRCalc/>);

    const entryPriceInput = screen.getByLabelText(/entry price/i);
    const stopLossPriceInput = screen.getByLabelText(/stop-loss price/i);
    const takeProfitPriceInput = screen.getByLabelText(/take-profit price/i);

    fireEvent.change(entryPriceInput, {target: {value: '10'}});
    fireEvent.change(stopLossPriceInput, {target: {value: '8'}});
    fireEvent.change(takeProfitPriceInput, {target: {value: '14'}});

    expect(screen.getByText(/1.00/i)).toBeInTheDocument();
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
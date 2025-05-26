import React from 'react';
import {render, screen} from '@testing-library/react';
import {RRRCalc} from './RRRCalc';

test('renders RRRCalc component correctly', () => {
    render(<RRRCalc/>);
    expect(screen.getByText(/Risk Reward Ratio \(Fees Included\) :/i)).toBeInTheDocument();
});

// test('calculates RRR correctly', () => {
//     render(<RRRCalc/>);
//
//     const entryPriceInput = screen.getByPlaceholderText(/entry price/i);
//     const stopLossPriceInput = screen.getByPlaceholderText(/stop loss price/i);
//     const takeProfitPriceInput = screen.getByPlaceholderText(/take profit price/i);
//
//     fireEvent.change(entryPriceInput, {target: {value: '100'}});
//     fireEvent.change(stopLossPriceInput, {target: {value: '90'}});
//     fireEvent.change(takeProfitPriceInput, {target: {value: '110'}});
//
//     expect(screen.getByText(/1.00/i)).toBeInTheDocument();
// });
//
// test('shows error when stop loss is not lower than entry', () => {
//     render(<RRRCalc/>);
//
//     const entryPriceInput = screen.getByPlaceholderText(/entry price/i);
//     const stopLossPriceInput = screen.getByPlaceholderText(/stop loss price/i);
//     const takeProfitPriceInput = screen.getByPlaceholderText(/take profit price/i);
//
//     fireEvent.change(entryPriceInput, {target: {value: '100'}});
//     fireEvent.change(stopLossPriceInput, {target: {value: '110'}});
//     fireEvent.change(takeProfitPriceInput, {target: {value: '110'}});
//
//     expect(screen.getByText(/stop-loss price must be lower than entry price./i)).toBeInTheDocument();
// });
//
// test('shows error when take profit is not higher than entry', () => {
//     render(<RRRCalc/>);
//
//     const entryPriceInput = screen.getByPlaceholderText(/entry price/i);
//     const stopLossPriceInput = screen.getByPlaceholderText(/stop loss price/i);
//     const takeProfitPriceInput = screen.getByPlaceholderText(/take profit price/i);
//
//     fireEvent.change(entryPriceInput, {target: {value: '100'}});
//     fireEvent.change(stopLossPriceInput, {target: {value: '90'}});
//     fireEvent.change(takeProfitPriceInput, {target: {value: '90'}});
//
//     expect(screen.getByText(/take-profit price must be higher than entry price./i)).toBeInTheDocument();
// });
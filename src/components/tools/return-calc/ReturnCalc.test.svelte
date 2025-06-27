import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {ReturnCalc} from './ReturnCalc';

const setupTestEnvironment = () => {
    render(<ReturnCalc/>);
    fireEvent.change(screen.getByLabelText(/Buy Price/i), {target: {value: '10'}});
    fireEvent.change(screen.getByLabelText(/Buy Quantity/i), {target: {value: '2'}});
    fireEvent.change(screen.getByLabelText(/Sell Price/i), {target: {value: '15'}});
    fireEvent.change(screen.getByLabelText(/Sell Quantity/i), {target: {value: '2'}});
};

describe('ReturnCalc Component', () => {
    describe('ReturnCalc Component - No Fee', () => {
        it('calculates returns correctly before taxes', () => {
            setupTestEnvironment();
            fireEvent.click(screen.getByText(/No fee/i));

            expect(screen.getByText(/10\.00 €/i)).toBeInTheDocument()
            expect(screen.getByText(/50\.00 %/i)).toBeInTheDocument()
        });

        it('calculates returns correctly after taxes', () => {
            setupTestEnvironment();
            fireEvent.click(screen.getByText(/No fee/i));

            expect(screen.getByText(/7\.50 €/i)).toBeInTheDocument()
            expect(screen.getByText(/37\.50 %/i)).toBeInTheDocument()
        });
    });

    describe('ReturnCalc Component - 1€ Fee', () => {
        it('calculates returns correctly before taxes', () => {
            setupTestEnvironment();
            fireEvent.click(screen.getByText(/1 €/i));

            expect(screen.getByText(/9\.00 €/i)).toBeInTheDocument()
            expect(screen.getByText(/45\.00 %/i)).toBeInTheDocument()
        });

        it('calculates returns correctly after taxes', () => {
            setupTestEnvironment();
            fireEvent.click(screen.getByText(/1 €/i));

            expect(screen.getByText(/6\.75 €/i)).toBeInTheDocument()
            expect(screen.getByText(/33\.75 %/i)).toBeInTheDocument()
        });
    });

    describe('ReturnCalc Component - 2€ Fee', () => {
        it('calculates returns correctly before taxes', () => {
            setupTestEnvironment();
            fireEvent.click(screen.getByText(/2 €/i));

            expect(screen.getByText(/8\.00 €/i)).toBeInTheDocument()
            expect(screen.getByText(/40\.00 %/i)).toBeInTheDocument()
        });

        it('calculates returns correctly after taxes', () => {
            setupTestEnvironment();
            fireEvent.click(screen.getByText(/2 €/i));

            expect(screen.getByText(/6\.00 €/i)).toBeInTheDocument()
            expect(screen.getByText(/30\.00 %/i)).toBeInTheDocument()
        });
    });
});
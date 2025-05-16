import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';

const ExampleTool: React.FC = () => {
    const [inputValue, setInputValue] = useState<number | ''>('');
    const [result, setResult] = useState<number | null>(null);

    const handleCalculate = () => {
        // Example calculation: square the input value
        if (typeof inputValue === 'number') {
            setResult(inputValue * inputValue);
        }
    };

    return (
        <Paper style={{ padding: '16px', margin: '16px' }}>
            <Typography variant="h5">Example Tool</Typography>
            <TextField
                label="Enter a number"
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(Number(e.target.value))}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={handleCalculate}>
                Calculate
            </Button>
            {result !== null && (
                <Typography variant="h6" style={{ marginTop: '16px' }}>
                    Result: {result}
                </Typography>
            )}
        </Paper>
    );
};

export default ExampleTool;
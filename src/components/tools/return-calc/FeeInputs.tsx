import React, {Dispatch, SetStateAction} from "react";
import {Button, Grid} from "@mui/material";

type FeeInputsProps = {
    selectedFeeButton: number;
    setSelectedFeeButton: Dispatch<SetStateAction<number>>
};

export const FeeInputs: React.FC<FeeInputsProps> = ({selectedFeeButton, setSelectedFeeButton}: FeeInputsProps) => {
    const NONE: number = 0
    const ONE: number = 1
    const TWO: number = 2

    const handleButtonClick = (value: number) => {
        setSelectedFeeButton(value);
    };

    return (
        <Grid container spacing={2} style={{justifyContent: 'center', width: '100%'}}>
            <Grid size={{xs: 4, sm: 4}}>
                <Button
                    variant={selectedFeeButton === NONE ? 'contained' : 'outlined'}
                    onClick={() => handleButtonClick(NONE)}
                    fullWidth
                >
                    No fee
                </Button>
            </Grid>
            <Grid size={{xs: 4, sm: 4}}>
                <Button
                    variant={selectedFeeButton === ONE ? 'contained' : 'outlined'}
                    onClick={() => handleButtonClick(ONE)}
                    fullWidth
                >
                    1 €
                </Button>
            </Grid>
            <Grid size={{xs: 4, sm: 4}}>
                <Button
                    variant={selectedFeeButton === TWO ? 'contained' : 'outlined'}
                    onClick={() => handleButtonClick(TWO)}
                    fullWidth
                >
                    2 €
                </Button>
            </Grid>
        </Grid>
    );
}
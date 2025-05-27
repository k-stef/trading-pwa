import React from "react";
import {Grid, Typography} from "@mui/material";

interface RatioOutputProps {
    error?: string;
    riskRewardRatio: number | null;
}

export const RatioOutput: React.FC<RatioOutputProps> = ({error, riskRewardRatio}) => {
    return (
        <>
            {error ? (
                <Grid>
                    <Typography variant="body1" color="error">
                        {error}
                    </Typography>
                </Grid>
            ) : (
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid>
                        <Typography variant="body1">
                            Risk Reward Ratio (Fees Included) :
                        </Typography>
                    </Grid>
                    <Grid>
                        {riskRewardRatio ? (
                            <Typography variant="body1" color={riskRewardRatio > 3 ? "success" : "error"}>
                                {riskRewardRatio.toFixed(2)}
                            </Typography>
                        ) : (
                            "-"
                        )}
                    </Grid>
                </Grid>
            )}
        </>
    );
};

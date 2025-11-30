import React from 'react';
import { Alert, AlertTitle } from '@mui/material';
import { formatPercentage } from '../../../utils/formatters';

interface RiskWarningProps {
  riskPercentage: number;
}

const RECOMMENDED_RISK_LIMIT = 1;

export const RiskWarning: React.FC<RiskWarningProps> = ({ riskPercentage }) => {
  if (riskPercentage <= RECOMMENDED_RISK_LIMIT) {
    return null;
  }

  return (
    <Alert severity="warning">
      <AlertTitle>High Risk!</AlertTitle>
      Your risk of {formatPercentage(riskPercentage)} exceeds the recommended limit of {formatPercentage(RECOMMENDED_RISK_LIMIT)} per trade.
    </Alert>
  );
};
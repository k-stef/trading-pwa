import React, { useEffect, useState } from 'react';
import { Grid, Alert } from '@mui/material';
import { AccountSettings } from './AccountSettings';
import { RatioInput } from './RatioInput';
import { PositionSizeDisplay } from './PositionSizeDisplay';
import { RiskWarning } from './RiskWarning';
import { RatioOutput } from './RatioOutput';
import { RiskRewardOutput } from './RiskRewardOutput';
import { calculateRisk } from '../../../utils/riskCalculations';
import { validateRiskManagerInputs } from '../../../utils/riskValidation';
import type { RiskCalculationResult } from '../../../types/riskManager';

/**
 * Calculate Risk/Reward Ratio
 */
const calculateRRR = (
  result: RiskCalculationResult | null,
  entryPrice: string,
  stopLossPrice: string,
  takeProfitPrice: string
): number | null => {
  if (!result) return null;

  const entry = Number.parseFloat(entryPrice);
  const stopLoss = Number.parseFloat(stopLossPrice);
  const takeProfit = Number.parseFloat(takeProfitPrice);

  if (Number.isNaN(entry) || Number.isNaN(stopLoss) || Number.isNaN(takeProfit)) return null;

  const risk = Math.abs(entry - stopLoss) * result.maxQuantity + result.totalFees;
  const reward = Math.abs(takeProfit - entry) * result.maxQuantity - result.totalFees;

  return risk === 0 ? null : reward / risk;
};

/**
 * Calculate total risk amount
 */
const calculateRiskAmount = (
  result: RiskCalculationResult | null,
  entryPrice: string,
  stopLossPrice: string
): number => {
  if (!result) return 0;
  const entry = Number.parseFloat(entryPrice);
  const stopLoss = Number.parseFloat(stopLossPrice);
  if (Number.isNaN(entry) || Number.isNaN(stopLoss)) return 0;
  
  return Math.abs(entry - stopLoss) * result.maxQuantity + result.totalFees;
};

/**
 * Calculate total reward amount
 */
const calculateRewardAmount = (
  result: RiskCalculationResult | null,
  entryPrice: string,
  takeProfitPrice: string
): number => {
  if (!result) return 0;
  const entry = Number.parseFloat(entryPrice);
  const takeProfit = Number.parseFloat(takeProfitPrice);
  if (Number.isNaN(entry) || Number.isNaN(takeProfit)) return 0;
  
  return Math.abs(takeProfit - entry) * result.maxQuantity - result.totalFees;
};

const RiskManager: React.FC = () => {
  // State Management
  const [accountSize, setAccountSize] = useState<number>(10000);
  const [riskPercentage, setRiskPercentage] = useState<number>(1.0);
  const [entryPrice, setEntryPrice] = useState<string>("");
  const [stopLossPrice, setStopLossPrice] = useState<string>("");
  const [takeProfitPrice, setTakeProfitPrice] = useState<string>("");
  const [calculationResult, setCalculationResult] = useState<RiskCalculationResult | null>(null);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  // Real-time calculations
  useEffect(() => {
    // Skip validation if required fields are empty (initial state)
    if (!entryPrice || !stopLossPrice) {
      setValidationErrors([]);
      setCalculationResult(null);
      return;
    }

    const entry = Number.parseFloat(entryPrice);
    const stopLoss = Number.parseFloat(stopLossPrice);
    const takeProfit = Number.parseFloat(takeProfitPrice);

    // Validate inputs
    const validation = validateRiskManagerInputs(
      accountSize.toString(),
      riskPercentage.toString(),
      entryPrice,
      stopLossPrice
    );

    if (!validation.isValid) {
      setValidationErrors(validation.error ? [validation.error] : []);
      setCalculationResult(null);
      return;
    }

    // Additional validation
    const errors: string[] = [];
    if (takeProfitPrice && !Number.isNaN(takeProfit) && takeProfit <= entry) {
      errors.push("Take-Profit price must be higher than Entry price.");
    }
    if (stopLoss >= entry) {
      errors.push("Stop-Loss price must be lower than Entry price.");
    }

    if (errors.length > 0) {
      setValidationErrors(errors);
      setCalculationResult(null);
      return;
    }

    // Calculate
    const result = calculateRisk(accountSize, riskPercentage, entry, stopLoss);
    setCalculationResult(result);
    setValidationErrors([]);
  }, [accountSize, riskPercentage, entryPrice, stopLossPrice, takeProfitPrice]);

  // Derived values
  const riskRewardRatio = calculateRRR(calculationResult, entryPrice, stopLossPrice, takeProfitPrice);
  const riskAmount = calculateRiskAmount(calculationResult, entryPrice, stopLossPrice);
  const rewardAmount = calculateRewardAmount(calculationResult, entryPrice, takeProfitPrice);
  
  const riskRatio = calculationResult?.positionSize
    ? ((riskAmount / calculationResult.positionSize) * 100).toFixed(2)
    : "0.00";
  
  const rewardRatioBeforeTaxes = calculationResult?.positionSize
    ? ((rewardAmount / calculationResult.positionSize) * 100).toFixed(2)
    : "0.00";
  
  const rewardRatioAfterTaxes = calculationResult?.positionSize
    ? ((rewardAmount / calculationResult.positionSize) * 100 * 0.75).toFixed(2)
    : "0.00";

  return (
    <Grid container spacing={3} direction="column">
      {/* Account Settings */}
      <Grid>
        <AccountSettings
          accountSize={accountSize}
          riskPercentage={riskPercentage}
          onAccountSizeChange={setAccountSize}
          onRiskPercentageChange={setRiskPercentage}
        />
      </Grid>

      {/* Price Inputs (without quantity) */}
      <Grid>
        <RatioInput
          entryPrice={entryPrice}
          stopLossPrice={stopLossPrice}
          takeProfitPrice={takeProfitPrice}
          quantity=""
          setEntryPrice={setEntryPrice}
          setStopLossPrice={setStopLossPrice}
          setTakeProfitPrice={setTakeProfitPrice}
          setQuantity={() => {}}
        />
      </Grid>

      {/* Validation Errors */}
      {validationErrors.length > 0 && (
        <Grid>
          {validationErrors.map((error, index) => (
            <Alert key={index} severity="error" sx={{ mb: index < validationErrors.length - 1 ? 1 : 0 }}>
              {error}
            </Alert>
          ))}
        </Grid>
      )}

      {/* Risk Warning */}
      {calculationResult?.isHighRisk && (
        <Grid>
          <RiskWarning riskPercentage={riskPercentage} />
        </Grid>
      )}

      {/* Position Size Display */}
      {calculationResult && validationErrors.length === 0 && (
        <Grid>
          <PositionSizeDisplay
            quantity={calculationResult.maxQuantity}
            positionValue={calculationResult.positionSize}
          />
        </Grid>
      )}

      {/* Risk/Reward Ratio Output */}
      {validationErrors.length === 0 && (
        <Grid>
          <RatioOutput
            error={validationErrors[0]}
            riskRewardRatio={riskRewardRatio}
          />
        </Grid>
      )}

      {/* Detailed Risk/Reward Output */}
      {calculationResult && validationErrors.length === 0 && (
        <Grid>
          <RiskRewardOutput
            calcRisk={riskAmount}
            calcReward={rewardAmount}
            calcRiskRatio={riskRatio}
            calcRewardRatioBeforeTaxes={rewardRatioBeforeTaxes}
            calcRewardRatioAfterTaxes={rewardRatioAfterTaxes}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default RiskManager;
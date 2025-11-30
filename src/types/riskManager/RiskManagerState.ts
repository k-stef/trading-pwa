/**
 * Main state interface for Risk Manager component
 */
export interface RiskManagerState {
  /** Total account balance in EUR */
  accountBalance: string;
  /** Desired risk percentage (0.5 - 5.0) */
  riskPercentage: string;
  /** Entry price per unit */
  entryPrice: string;
  /** Stop-loss price per unit */
  stopLossPrice: string;
  /** Calculated maximum quantity to trade */
  maxQuantity: number;
  /** Calculated risk amount in EUR */
  riskAmount: number;
  /** Validation error message, if any */
  error?: string;
}
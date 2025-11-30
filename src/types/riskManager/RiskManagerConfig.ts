/**
 * Configuration interface for Risk Manager constants
 */
export interface RiskManagerConfig {
  /** Transaction fee in EUR (default: 1.0) */
  transactionFee: number;
  /** Tax rate as decimal (default: 0.25 for 25%) */
  taxRate: number;
  /** Minimum allowed risk percentage (default: 0.5) */
  minRiskPercentage: number;
  /** Maximum allowed risk percentage (default: 5.0) */
  maxRiskPercentage: number;
  /** Risk warning threshold percentage (default: 2.0) */
  riskWarningThreshold: number;
}
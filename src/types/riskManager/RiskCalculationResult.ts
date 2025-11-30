/**
 * Result interface for risk calculations
 */
export interface RiskCalculationResult {
  /** Maximum quantity that can be traded */
  maxQuantity: number;
  /** Total risk amount in EUR */
  riskAmount: number;
  /** Risk per unit in EUR */
  riskPerUnit: number;
  /** Total transaction fees in EUR */
  totalFees: number;
  /** Position size in EUR (entry price * quantity) */
  positionSize: number;
  /** Whether risk exceeds warning threshold */
  isHighRisk: boolean;
}
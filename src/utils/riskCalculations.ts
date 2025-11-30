/**
 * Risk Calculation Utilities
 * 
 * This module contains all calculation functions for the Risk Manager.
 * All calculations include transaction fees and follow the specified formulas.
 */

import type { RiskCalculationResult } from '../types/riskManager';

/**
 * Risk Manager Configuration Constants
 */
export const RISK_CONFIG = {
  transactionFee: 1.0,
  taxRate: 0.25,
  minRiskPercentage: 0.5,
  maxRiskPercentage: 5.0,
  riskWarningThreshold: 2.0,
} as const;

/**
 * Calculate the maximum quantity that can be traded based on account balance and risk parameters.
 * 
 * Formula:
 * 1. Calculate risk amount: accountBalance * (riskPercentage / 100)
 * 2. Calculate risk per unit: |entryPrice - stopLossPrice|
 * 3. Calculate max quantity before fees: riskAmount / riskPerUnit
 * 4. Account for transaction fees (2 fees: entry + exit)
 * 5. Round down to whole number: Math.floor(quantity)
 * 
 * @param accountBalance - Total account balance in EUR
 * @param riskPercentage - Desired risk percentage (0.5 - 5.0)
 * @param entryPrice - Entry price per unit
 * @param stopLossPrice - Stop-loss price per unit
 * @returns Maximum quantity (rounded down to whole number)
 */
export function calculateMaxQuantity(
  accountBalance: number,
  riskPercentage: number,
  entryPrice: number,
  stopLossPrice: number
): number {
  const riskAmount = accountBalance * (riskPercentage / 100);
  const riskPerUnit = Math.abs(entryPrice - stopLossPrice);
  
  if (riskPerUnit === 0) {
    return 0;
  }
  
  // Account for transaction fees (entry + exit = 2 fees)
  const totalFees = 2 * RISK_CONFIG.transactionFee;
  const availableRisk = riskAmount - totalFees;
  
  if (availableRisk <= 0) {
    return 0;
  }
  
  const maxQuantity = availableRisk / riskPerUnit;
  
  // Round down to whole number
  return Math.floor(maxQuantity);
}

/**
 * Calculate the total risk amount in EUR.
 * 
 * Formula: accountBalance * (riskPercentage / 100)
 * 
 * @param accountBalance - Total account balance in EUR
 * @param riskPercentage - Desired risk percentage (0.5 - 5.0)
 * @returns Risk amount in EUR
 */
export function calculateRiskAmount(
  accountBalance: number,
  riskPercentage: number
): number {
  return accountBalance * (riskPercentage / 100);
}

/**
 * Calculate the risk per unit (difference between entry and stop-loss).
 * 
 * Formula: |entryPrice - stopLossPrice|
 * 
 * @param entryPrice - Entry price per unit
 * @param stopLossPrice - Stop-loss price per unit
 * @returns Risk per unit in EUR
 */
export function calculateRiskPerUnit(
  entryPrice: number,
  stopLossPrice: number
): number {
  return Math.abs(entryPrice - stopLossPrice);
}

/**
 * Calculate total transaction fees for a trade.
 *
 * Formula: 2 * transactionFee (entry + exit)
 *
 * @returns Total fees in EUR
 */
export function calculateTotalFees(): number {
  // Two transactions: entry and exit
  return 2 * RISK_CONFIG.transactionFee;
}

/**
 * Calculate the position size (total value of the position).
 * 
 * Formula: entryPrice * quantity
 * 
 * @param entryPrice - Entry price per unit
 * @param quantity - Number of units
 * @returns Position size in EUR
 */
export function calculatePositionSize(
  entryPrice: number,
  quantity: number
): number {
  return entryPrice * quantity;
}

/**
 * Check if the risk percentage exceeds the warning threshold.
 * 
 * @param riskPercentage - Risk percentage to check
 * @returns True if risk is high (>= warning threshold)
 */
export function isHighRisk(riskPercentage: number): boolean {
  return riskPercentage >= RISK_CONFIG.riskWarningThreshold;
}

/**
 * Perform complete risk calculation and return all relevant metrics.
 * 
 * @param accountBalance - Total account balance in EUR
 * @param riskPercentage - Desired risk percentage (0.5 - 5.0)
 * @param entryPrice - Entry price per unit
 * @param stopLossPrice - Stop-loss price per unit
 * @returns Complete risk calculation result
 */
export function calculateRisk(
  accountBalance: number,
  riskPercentage: number,
  entryPrice: number,
  stopLossPrice: number
): RiskCalculationResult {
  const maxQuantity = calculateMaxQuantity(
    accountBalance,
    riskPercentage,
    entryPrice,
    stopLossPrice
  );
  
  const riskAmount = calculateRiskAmount(accountBalance, riskPercentage);
  const riskPerUnit = calculateRiskPerUnit(entryPrice, stopLossPrice);
  const totalFees = calculateTotalFees();
  const positionSize = calculatePositionSize(entryPrice, maxQuantity);
  const highRisk = isHighRisk(riskPercentage);
  
  return {
    maxQuantity,
    riskAmount,
    riskPerUnit,
    totalFees,
    positionSize,
    isHighRisk: highRisk,
  };
}
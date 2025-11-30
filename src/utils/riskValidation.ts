/**
 * Risk Manager Input Validation
 * 
 * This module contains validation functions for Risk Manager inputs.
 */

import type { ValidationResult } from '../types/riskManager';
import { RISK_CONFIG } from './riskCalculations';

/**
 * Validate all Risk Manager inputs.
 * 
 * Validation rules:
 * - Account balance must be a positive number
 * - Risk percentage must be between minRiskPercentage and maxRiskPercentage
 * - Entry price must be a positive number
 * - Stop-loss price must be a positive number
 * - Entry price and stop-loss price must be different
 * 
 * @param accountBalance - Account balance as string
 * @param riskPercentage - Risk percentage as string
 * @param entryPrice - Entry price as string
 * @param stopLossPrice - Stop-loss price as string
 * @returns Validation result with isValid flag and optional error message
 */
export function validateRiskManagerInputs(
  accountBalance: string,
  riskPercentage: string,
  entryPrice: string,
  stopLossPrice: string
): ValidationResult {
  // Parse inputs
  const balance = Number.parseFloat(accountBalance);
  const risk = Number.parseFloat(riskPercentage);
  const entry = Number.parseFloat(entryPrice);
  const stopLoss = Number.parseFloat(stopLossPrice);

  // Check if all inputs are valid numbers
  if (Number.isNaN(balance) || Number.isNaN(risk) || Number.isNaN(entry) || Number.isNaN(stopLoss)) {
    return {
      isValid: false,
      error: 'All fields must contain valid numbers',
    };
  }

  // Validate account balance
  if (balance <= 0) {
    return {
      isValid: false,
      error: 'Account balance must be greater than 0',
    };
  }

  // Validate risk percentage range
  if (risk < RISK_CONFIG.minRiskPercentage || risk > RISK_CONFIG.maxRiskPercentage) {
    return {
      isValid: false,
      error: `Risk must be between ${RISK_CONFIG.minRiskPercentage}% and ${RISK_CONFIG.maxRiskPercentage}%`,
    };
  }

  // Validate entry price
  if (entry <= 0) {
    return {
      isValid: false,
      error: 'Entry price must be greater than 0',
    };
  }

  // Validate stop-loss price
  if (stopLoss <= 0) {
    return {
      isValid: false,
      error: 'Stop-loss price must be greater than 0',
    };
  }

  // Validate that entry and stop-loss are different
  if (entry === stopLoss) {
    return {
      isValid: false,
      error: 'Entry price and stop-loss must be different',
    };
  }

  // All validations passed
  return {
    isValid: true,
  };
}

/**
 * Validate a single numeric input.
 * 
 * @param value - Value to validate as string
 * @param fieldName - Name of the field for error messages
 * @param min - Minimum allowed value (optional)
 * @param max - Maximum allowed value (optional)
 * @returns Validation result
 */
export function validateNumericInput(
  value: string,
  fieldName: string,
  min?: number,
  max?: number
): ValidationResult {
  const num = Number.parseFloat(value);

  if (Number.isNaN(num)) {
    return {
      isValid: false,
      error: `${fieldName} must be a valid number`,
    };
  }

  if (min !== undefined && num < min) {
    return {
      isValid: false,
      error: `${fieldName} must be at least ${min}`,
    };
  }

  if (max !== undefined && num > max) {
    return {
      isValid: false,
      error: `${fieldName} must be at most ${max}`,
    };
  }

  return {
    isValid: true,
  };
}

/**
 * Check if a string value is empty or only whitespace.
 * 
 * @param value - Value to check
 * @returns True if empty or whitespace
 */
export function isEmpty(value: string): boolean {
  return value.trim().length === 0;
}

/**
 * Check if any of the provided values are empty.
 * 
 * @param values - Array of string values to check
 * @returns True if any value is empty
 */
export function hasEmptyValues(...values: string[]): boolean {
  return values.some(isEmpty);
}
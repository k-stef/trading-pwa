/**
 * Formatting Utilities
 * 
 * This module contains formatting functions for displaying numbers in the Risk Manager.
 */

/**
 * Format a number as currency (EUR).
 * 
 * @param value - Numeric value to format
 * @param decimals - Number of decimal places (default: 2)
 * @returns Formatted currency string (e.g., "1,234.56 €")
 */
export function formatCurrency(value: number, decimals: number = 2): string {
  return `${value.toFixed(decimals)} €`;
}

/**
 * Format a number as percentage.
 * 
 * @param value - Numeric value to format (e.g., 2.5 for 2.5%)
 * @param decimals - Number of decimal places (default: 2)
 * @returns Formatted percentage string (e.g., "2.50 %")
 */
export function formatPercentage(value: number, decimals: number = 2): string {
  return `${value.toFixed(decimals)} %`;
}

/**
 * Format a quantity (whole number).
 * 
 * @param value - Numeric value to format
 * @returns Formatted quantity string (e.g., "1,234")
 */
export function formatQuantity(value: number): string {
  return value.toLocaleString('de-DE');
}

/**
 * Format a number with specified decimal places.
 * 
 * @param value - Numeric value to format
 * @param decimals - Number of decimal places (default: 2)
 * @returns Formatted number string
 */
export function formatNumber(value: number, decimals: number = 2): string {
  return value.toFixed(decimals);
}

/**
 * Parse a formatted currency string back to a number.
 * 
 * @param value - Currency string (e.g., "1,234.56 €")
 * @returns Numeric value
 */
export function parseCurrency(value: string): number {
  const cleaned = value.replaceAll(/[€\s,]/g, '').trim();
  return Number.parseFloat(cleaned);
}

/**
 * Parse a formatted percentage string back to a number.
 *
 * @param value - Percentage string (e.g., "2.50 %")
 * @returns Numeric value
 */
export function parsePercentage(value: string): number {
  const cleaned = value.replaceAll(/[%\s]/g, '').trim();
  return Number.parseFloat(cleaned);
}
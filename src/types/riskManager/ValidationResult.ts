/**
 * Result interface for input validation
 */
export interface ValidationResult {
  /** Whether the inputs are valid */
  isValid: boolean;
  /** Error message if validation fails */
  error?: string;
}
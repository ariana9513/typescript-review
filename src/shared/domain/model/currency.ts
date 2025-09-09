/**
 * Module for handling currency codes and formatting amounts.
 *
 * @remarks
 * This module defines a `Currency` class that encapsulates a currency code
 * and provides a method to format amounts according to that currency.
 * @module Currency
 */

/**
 * Type representing a three-letter currency code.
 * Each letter must be an uppercase English alphabet character (A-Z).
 */
type UpperCaseLetter = | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L'
    | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';

/**
 * Type alias for a three-letter currency code.
 */
    export type CurrencyCode = `${UpperCaseLetter}-${UpperCaseLetter}${UpperCaseLetter}`;

/**
 * Value object representing a currency with a three-letter code.
 * Provides a method to format amounts in that currency.
 */
    export class Currency {
        private readonly _code: CurrencyCode;

    /**
     * Creates a new Currency instance.
     * @param {CurrencyCode} code - A three-letter currency code (e.g., 'USD', 'EUR').
     */
        constructor(code: CurrencyCode) {
            this._code = code;
        }

    /**
     * Gets the currency code.
     * @returns {string} The three-letter currency code as a string.
     */
        public get code():string {
            return this._code;
        }

    /**
     * Gets the currency code.
     *
     * @remarks
     * This method uses the `toLocaleString` function to format the amount
     * It defaults to 'en-US' locale if none is provided.
     * @param {number} amount - The amount to format.
     * @param {string} [locale='en-US'] - The locale to use for formatting {default is 'en-us'}.
     * @returns {string} The formatted currency string.
     */
        public forAmount = (amount: number, locale: string = 'en-US'): string => {
            return amount.toLocaleString(locale, {
                style: 'currency',
                currency: this._code,
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });
        }

        public toString = () => this._code;
    }

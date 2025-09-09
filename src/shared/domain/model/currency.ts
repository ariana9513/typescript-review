type UpperCaseLetter = | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

    export type CurrencyCode = `${UpperCaseLetter}-${UpperCaseLetter}${UpperCaseLetter}`;

    export class Currency {
        private readonly _code: CurrencyCode;

        constructor(code: CurrencyCode) {
            this._code = code;
        }

        public get code():string {
            return this._code;
        }

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
/**
 * DateTime Value Object
 *
 * @remarks
 * This class represents a date and time value object. It ensures that the date is not in the future.
 * It provides methods to format the date in different ways.
 *
 * @example
 * ```typescript
 * const dateTime1 = new DateTime('2023-10-05T14:48:00.000Z'
 * console.log(dateTime1.toString()); // Outputs: 2023-10-05T14:48:00.000Z
 * console.log(dateTime1.format('en-GB')); // Outputs: 05/10/2023, 14:48:00
 */
export class DateTime {
    private readonly _date: Date;

    /**
     * Creates a new DateTime instance.
     * @param value
     */
    constructor(value?: Date | string) {
        const now = new Date();
        if (value) {
            const parsedDate = new Date(value);
            if (isNaN(parsedDate.getTime())) throw new Error(`Invalid date format: ${value}.`);
            if (parsedDate > now) throw new Error(`Date cannot be in the future: ${value}.`);
            this._date = parsedDate;
        } else this._date = now;
    }

    public get value(): Date {
        return this._date;
    }

    public toString(): string {
        return this._date.toISOString();
    }

    public format(locale: string = 'en-US'): string {
        return this._date.toLocaleDateString(locale, {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
    }
}
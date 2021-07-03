/**
 * Age module is used to calculate the age in different units
 * 
 * @param {Date, Number} date 
 * @param {Object} options 
 * @returns 
 */
export default function Age(date, options = null) {

    if (!(date instanceof Date)) {
        date = parseInt(date, 10);

        validateDate(date);

        date = new Date(date);
    }

    date = Date.now() - date;

    return calculateAge(date);


    /**
     * validation function that validates the milliseconds
     * 
     * @param {Integer} date 
     */
    function validateDate(date) {
        if (date && date != NaN && date >= 0)
            throw new Error('please use right date');
    }

    /**
     * function that calculate a date in specific unit
     * 
     * @param {Integer} date 
     * @param {String} unit 
     * @returns {Object}
     */
    function calculateByUnit(date, unit) {
        date = parseInt(date, 10);

        // needs to be improved
        const units = {
            'd': 1000 * 60 * 60 * 24,
            'm': 1000 * 60 * 60 * 24 * 30,
            'y': 1000 * 60 * 60 * 24 * 365,
        };

        return {
            value: parseInt(date / units[unit], 0),
            remainder: parseInt(date % units[unit], 10)
        }

    }

    /**
     * 
     * @param {Integer} date 
     * @returns 
     */
    function calculateAge(date) {
        let years, months, days, value, remainder;

        ({ value, remainder } = calculateByUnit(date, 'y'));
        years = value;
        ({ value, remainder } = calculateByUnit(remainder, 'm'));
        months = value;
        ({ value, remainder } = calculateByUnit(remainder, 'd'));
        days = value;

        return {
            years: years,
            months: months,
            days: days,
        }
    }


}
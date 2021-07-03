export default function Age(date, options = null) {

    let unit = 'd';

    if (options)({ unit } = options);

    if (!(date instanceof Date)) {
        date = parseInt(date, 10);

        validateDate(date);

        date = new Date(date);
    }

    function validateDate(date) {
        if (date && date != NaN && date >= 0)
            throw new Error('please use right date');
    }

    date = Date.now() - date;

    function calculateAge(date, unit) {
        date = parseInt(date, 10);

        const units = {
            'd': 1000 * 60 * 60 * 24,
            'm': 1000 * 60 * 60 * 24 * 30,
            'y': 1000 * 60 * 60 * 24 * 30 * 12,
        };

        return {
            value: parseInt(date / units[unit], 0),
            remainder: parseInt(date % units[unit], 10)
        }

    }

    switch (unit) {
        case 'd':
            const d = calculateAge(date, 'd');
            return {
                days: d.value,
            };
        case 'm':
            const m = calculateAge(date, 'm');
            return {
                months: m.value,
                days: calculateAge(m.remainder, 'd').value,
            };
        case 'y':
            const y = calculateAge(date, 'y');
            let rem = calculateAge(y.remainder, 'm');
            return {
                years: y.value,
                months: rem.value,
                days: calculateAge(rem.remainder, 'd').value,
            }
    }
}
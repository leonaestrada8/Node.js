const jest = require('jest');

const moment = require('moment');

class DateManipulation {
    constructor(dateStr) {
        this.date = moment(dateStr, 'YYYY-MM-DD HH:mm:ss');
    }

    addDays(days) {
        this.date.add(days, 'days');
        return this.date.format('YYYY-MM-DD HH:mm:ss');
    }

    subtractDays(days) {
        this.date.subtract(days, 'days');
        return this.date.format('YYYY-MM-DD HH:mm:ss');
    }

    getDayOfWeek() {
        const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        return daysOfWeek[this.date.day()];
    }
}

module.exports = DateManipulation;

//const DateManipulation //= require('./date-manipulation');

test('addDays should add the specified number of days', () => {
    const dateManipulation = new DateManipulation('2023-08-16 00:00:00');
    expect(dateManipulation.addDays(5)).toBe('2023-08-21 00:00:00');
});

test('subtractDays should subtract the specified number of days', () => {
    const dateManipulation = new DateManipulation('2023-08-16 00:00:00');
    expect(dateManipulation.subtractDays(3)).toBe('2023-08-13 00:00:00');
});

test('getDayOfWeek should return the correct day of the week', () => {
    const dateManipulation = new DateManipulation('2023-08-16 00:00:00');
    expect(dateManipulation.getDayOfWeek()).toBe('Wednesday');
});

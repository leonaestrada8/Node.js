function timeConversion(s) {
    // Extract hours, minutes, seconds and AM/PM
    let [hours, minutes, secondsPeriod] = s.split(':');
    let seconds = secondsPeriod.slice(0,2);
    let period = secondsPeriod.slice(2);

    hours = parseInt(hours);
    minutes = parseInt(minutes);
    seconds = parseInt(seconds);

    // Adjust hours if it's PM
    if (period === 'PM') {
        if (hours != 12) {
            hours += 12;
        }
    } else {  // period == 'AM'
        if (hours === 12) {
            hours = 0;
        }
    }

    // Return as formatted string
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Testing
let time = "12:00:00AM";
console.log(timeConversion(time));

time = "12:00:00PM";
console.log(timeConversion(time));

time = "04:20:00PM";
console.log(timeConversion(time));

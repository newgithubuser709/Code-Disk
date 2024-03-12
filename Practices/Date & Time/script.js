var month_el = document.getElementById("month_el"),
    date_el = document.getElementById("date_el"),
    year_el = document.getElementById("year_el"),

    day_el = document.getElementById("day_el"),

    hours_el = document.getElementById("hours_el"),
    minutes_el = document.getElementById("minutes_el"),
    seconds_el = document.getElementById("seconds_el");

setInterval(() => {

    const activeDate = new Date();

    const month = activeDate.getMonth() + 1;
    const date = activeDate.getDate();
    const year = activeDate.getFullYear();

    const day = activeDate.getDay();


    const h = activeDate.getHours();
    var AmOrPm = (h >= 12 ? 'pm' : 'am');
    const hours = h % 12 || 12;

    const minutes = activeDate.getMinutes();
    const seconds = activeDate.getSeconds();

    month_el.innerText = month;
    date_el.innerText = date;
    year_el.innerText = year;

    day_el.innerText = day;

    hours_el.innerText = (hours + " :");
    minutes_el.innerText = (minutes + " :");
    seconds_el.innerText = seconds + " " + AmOrPm;

    // hours_el.innerText = (13 ? "0" + 1 + " :" : hours_el.innerText)

    // month int to str 
    if (month_el.innerText == 1) {
        month_el.innerText = "january";
    } else if (month_el.innerText == 2) {
        month_el.innerText = "february";
    } else if (month_el.innerText == 3) {
        month_el.innerText = "march";
    } else if (month_el.innerText == 4) {
        month_el.innerText = "april";
    } else if (month_el.innerText == 5) {
        month_el.innerText = "may";
    } else if (month_el.innerText == 6) {
        month_el.innerText = "june";
    } else if (month_el.innerText == 7) {
        month_el.innerText = "july";
    } else if (month_el.innerText == 8) {
        month_el.innerText = "agust";
    } else if (month_el.innerText == 9) {
        month_el.innerText = "september";
    } else if (month_el.innerText == 10) {
        month_el.innerText = "october";
    } else if (month_el.innerText == 11) {
        month_el.innerText = "november";
    } else {
        month_el.innerText = "december";
    };

    // day int to str 
    if (day_el.innerText == 1) {
        day_el.innerText = "monday";
    } else if (day_el.innerText == 2) {
        day_el.innerText = "tuesday";
    } else if (day_el.innerText == 3) {
        day_el.innerText = "wednesday";
    } else if (day_el.innerText == 4) {
        day_el.innerText = "thursday";
    } else if (day_el.innerText == 5) {
        day_el.innerText = "friday";
    } else if (day_el.innerText == 6) {
        day_el.innerText = "saturday";
    } else {
        day_el.innerText = "sunday";
    }

    // time 0 add in min,sec,hour if less then 10  

    if (hours < 10) {
        hours_el.innerText = ("0" + hours_el.innerText)
    } else {
        hours_el.innerText = (hours_el.innerText)
    };

    if (minutes < 10) {
        minutes_el.innerText = ("0" + minutes_el.innerText)
    } else {
        minutes_el.innerText = (minutes_el.innerText)
    };

    if (seconds < 10) {
        seconds_el.innerText = ("0" + seconds_el.innerText)
    } else {
        seconds_el.innerText = (seconds_el.innerText)
    };

}, 1000);
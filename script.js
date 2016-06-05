$(document).ready(function () {
  (function update_time(){
    // Use moment.js to output the current time as a string
    // hh is for the hours in 12-hour format,
    // mm - minutes, ss-seconds (all with leading zeroes),
    // d is for day of week and A is for AM/PM
    var now = moment().format("hhmmssA");
    
    var hour = now[0]+now[1]; // digit in front single digit and 12h time
    var min = now[2]+now[3];
    var sec = now[4]+now[5];
    $('#hour .time').html(hour);
    $('#minute .time').html(min);
    $('#second .time').html(sec);
    
    setTimeout(update_time, 1000);
  })();
});
$(document).ready(function () {
  (function update_time() {
    // Use moment.js to output the current time as a string
    // hh is for the hours in 12-hour format,
    // mm - minutes, ss-seconds (all with leading zeroes),
    var now = moment().format("hhmmss");
    
    var time = {
      hour: now[0] + now[1],
      min: now[2] + now[3],
      sec: now[4] + now[5]
    };
    
    $('#clock .hour').html(time.hour);
    $('#clock .min').html(time.min);
    $('#clock .sec').html(time.sec);
    
    setTimeout(update_time, 1000);
  })();
  
  // The moring alarm
  var morning = {
    selecthour: "#morning .time .hour",
    selectmin: "#morning .time .min",
    selectsec: "#morning .time .sec",
    hour: 7,
    min: 0,
    sec: 0
  };
  
  // The evening alarm
  var evening = {
    selecthour: "#evening .time .hour",
    selectmin: "#evening .time .min",
    selectsec: "#evening .time .sec",
    hour: 9,
    min: 0,
    sec: 0
  };
  
  var alarms = [morning, evening];
  
  // Checks and updates the hour on the morning or evening alarms
  var update_hour = function (alarm) {
    if (alarm.hour < 0) {
      alarm.hour = 0;
    }
    
    if (alarm.hour > 11) {
      alarm.hour = 11;
    }
    
    if (alarm.hour == 0) {
      $(alarm.selecthour).html(12);
    } else if (alarm.hour < 10) {
      var withzero = "0" + alarm.hour
      $(alarm.selecthour).html(withzero);
    } else {
      $(alarm.selecthour).html(alarm.hour);
    }
  };
  
  // Checks and updates the minute on the morning or evening alarms
  var update_min = function (alarm) {
    if (alarm.min < 0) {
      alarm.min = 0;
    }
    
    if (alarm.min > 59) {
      alarm.min = 59;
    }
    
    if (alarm.min < 10) {
      var withzero = "0" + alarm.min
      $(alarm.selectmin).html(withzero);
    } else {
      $(alarm.selectmin).html(alarm.min);
    }
  };
  
  // Checks and updates the second on the morning or evening alarms
  var update_sec = function (alarm) {
    if (alarm.sec < 0) {
      alarm.sec = 0;
    }
    
    if (alarm.sec > 59) {
      alarm.sec = 59;
    }
    
    if (alarm.sec < 10) {
      var withzero = "0" + alarm.sec
      $(alarm.selectsec).html(withzero);
    } else {
      $(alarm.selectsec).html(alarm.sec);
    }
  };
  
  for (var i = 0; i < alarms.length; i++) {
    update_hour(alarms[i]);
    update_min(alarms[i]);
    update_sec(alarms[i]);
  }
  
  $('#morning .up .hour').click(function () {
    morning.hour++
    update_hour(morning);
  });
  
  $('#morning .up .min').click(function () {
    morning.min++
    update_min(morning);
  });
  
  $('#morning .up .sec').click(function () {
    morning.sec++
    update_sec(morning);
  });
  
  $('#morning .down .hour').click(function () {
    morning.hour--
    update_hour(morning);
  });
  
  $('#evening .down .sec').click(function () {
    evening.sec--
    update_sec(evening);
  });
  
});
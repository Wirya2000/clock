// Calling showTime function at every second
let speed = 1;
let timer = setInterval(showTime, 1000/speed);
let counter = 0;
let time = new Date();
let isPaused = false;
let global_hour = 09;
let global_minute = 00;
let global_second = 00;
let skip_interval = 5;


// Defining showTime funcion
function showTime() {
	// Getting current time and date
    if(!isPaused) {
        time.setHours(global_hour, global_minute, global_second);
        var numberOfMlSeconds = time.getTime();
        time = new Date(numberOfMlSeconds + 1000 * counter);
        let hour = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        am_pm = "AM";

        // Setting time for 12 Hrs format
        if (hour >= 12) {
            if (hour > 12) hour -= 12;
            am_pm = "PM";
        } else if (hour == 0) {
            hr = 12;
            am_pm = "AM";
        }

        hour =
            hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;

        let currentTime =
            hour +
            ":" +
            min +
            ":" +
            sec ;
            // am_pm;

        // Displaying the time
        document.getElementById(
            "clock"
        ).innerHTML = currentTime;
        counter++;
    }
}

showTime();

document.getElementById("btn-reset").addEventListener("click", resetTime);

function resetTime() {
    global_hour = 09;
    global_minute = 00;
    global_second = 00;
    time.setHours(09, 00, 0);
    let hour = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        am_pm = "AM";
        hour =
        hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    let currentTime =
            hour +
            ":" +
            min +
            ":" +
            sec ;
            // am_pm;

        // Displaying the time
        document.getElementById(
            "clock"
        ).innerHTML = currentTime;
    counter = 0;
}

$('#pause').on('click', function(e) {
    e.preventDefault();
    isPaused = true;
  });
  
  $('#play').on('click', function(e) {
    e.preventDefault();
    isPaused = false;
  });

  $('html').keydown(function(e){
if(e.keyCode == 37) { // left
    counter -= skip_interval;
    }
    else if(e.keyCode == 39) { // right
    counter += skip_interval;
    }
else if(e.keyCode == 38) { // up
    }
else if(e.keyCode == 40) { // down
    }
else if(e.keyCode == 32) { // space
    if (isPaused) {
        e.preventDefault();
        isPaused = false;
    } else {
        e.preventDefault();
        isPaused = true;
    }
}
});

function setCustomTime() {
    global_hour = $("#txt_hour").val();
    global_minute = $("#txt_minute").val();
    global_second = $("#txt_second").val();
    // p_hour = p_hour.toString();
    // p_hour.padStart(2, "0");
    // p_minute.padStart(2, "0")
    // p_second.padStart(2, "0")
    time.setHours(global_hour, global_minute, global_second);
    let hour = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        am_pm = "AM";
        hour =
        hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    let currentTime =
            hour +
            ":" +
            min +
            ":" +
            sec ;
            // am_pm;

        // Displaying the time
        document.getElementById(
            "clock"
        ).innerHTML = currentTime;
    counter = 0;
}

$('#btn_1x').on('click', function(e) {
    speed = 1;
    clearInterval(timer);
    timer = setInterval(showTime, 1000/speed);
  });
  
  $('#btn_2x').on('click', function(e) {
    speed = 2;
    clearInterval(timer);
    timer = setInterval(showTime, 1000/speed);
  });

  $('#btn_5x').on('click', function(e) {
    speed = 5;
    clearInterval(timer);
    timer = setInterval(showTime, 1000/speed);
  });

  $('#btn_10x').on('click', function(e) {
    speed = 10;
    clearInterval(timer);
    timer = setInterval(showTime, 1000/speed);
  });

  $('#btn-set-skip').on('click', function(e) {
    skip_interval = parseInt($("#txt_hour").val());
  });
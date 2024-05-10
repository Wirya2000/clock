// Calling showTime function at every second
setInterval(showTime, 1000);
counter = 0;
let time = new Date();
let isPaused = false;


// Defining showTime funcion
function showTime() {
	// Getting current time and date
    if(!isPaused) {
        time.setHours(09, 00, 0);
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
        counter -= 5
      }
      else if(e.keyCode == 39) { // right
        counter += 5;
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
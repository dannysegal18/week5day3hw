 //Create a time data function
 function currentTime() {
    //Declare variables
    var d = new Date(); //Get current date
    var hr = d.getHours(); //Get current hours
    var min = d.getMinutes(); //Get current minutes
    var sec = d.getSeconds(); //Get current seconds
    var ampm; //Declare empty variable to store AM or PM

    //Add 0 to single digits for seconds
    if (sec < 10) {
        sec = "0" + sec;
    }
    //Add 0 to single digits for minutes
    if (min < "10") {
        min = "0" + min;
    }
    //Determine AM or PM string
    if (hr == 12) {
        ampm = "PM"; //Set to PM
    } else if ( hr > 12) {
        hr -= 12; //Deduct 12 from hours greater than 12 (military time)   
        ampm = "PM"; //Set to PM
    } else {
        ampm = "AM"; //Set to AM
    }
    //Assemble time format to display
    var time = hr + ":" + min + ":" + sec + " " + ampm;
    //Display current local time and time zone on HTML elemets
    document.getElementById("clock").innerText = time; //adding time   
    //Run time data function every 1 second
    setInterval(currentTime, 1000); //setting timmer
}
//Intial run of time data function
currentTime(); {
var utchr = d.getUTCHours (); //Get current Greenwich Mean Time (GMT)
var timeDiff; //To store time difference between GMT hour and Local hour
var adjTimeDiff; //To store time difference converted to positive number
var timeZone; //To store the 4 time zones (PT,MT,CT,ET)

// Get current Greenwich Mean Time (GMT)
var utchr = new Date().getUTCHours();

// Define local time offset in hours (adjust this based on your local time zone)
var localOffset = -8; 

// Calculate local time
var localHour = utchr + localOffset;

// Convert GMT to standard time (12-hour format)
function convertGMTtoStandardTime(gmtHours) {
var period = (gmtHours < 12) ? 'AM' : 'PM';
var adjustedHours = (gmtHours % 12) || 12; // Ensure hours are in 1-12 format
return adjustedHours + ':00 ' + period;
}

// Calculate time difference between GMT hour and local hour
var timeDiff = localHour - utchr;

// Convert time difference to positive (adjusted time difference)
var adjTimeDiff = Math.abs(timeDiff);

// Determine time zone based on the converted time difference
var timeZone;
if (timeDiff === 0) {
timeZone = 'GMT';
} else if (timeDiff === -5) {
timeZone = 'ET';
} else if (timeDiff === -6) {
timeZone = 'CT';
} else if (timeDiff === -7) {
timeZone = 'MT';
} else if (timeDiff === -8) {
timeZone = 'PT';
}

// Add time zone to the very end of the assembly time format
var assemblyTimeFormat = convertGMTtoStandardTime(utchr) + ' (' + timeZone + ')';

console.log(assemblyTimeFormat);
}  
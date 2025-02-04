var chronometer = new Chronometer();
var btnLeft     = document.getElementById('btnLeft');
var btnRight    = document.getElementById('btnRight');
var minDec      = document.getElementById('minDec');
var minUni      = document.getElementById('minUni');
var secDec      = document.getElementById('secDec');
var secUni      = document.getElementById('secUni');
var milDec      = document.getElementById('milDec');
var milUni      = document.getElementById('milUni');


function printTime(minutes, seconds, milliseconds) {
    if (minutes > 0) {
        this.printMinutes(minutes);
    } 
        this.printSeconds(seconds);
}

function printMinutes(minutes) {
    minDec.innerHTML = minutes[0];
    minUni.innerHTML = minutes[1];
}

function printSeconds(seconds) {
    secDec.innerHTML = seconds[0];
    secUni.innerHTML = seconds[1];
}

function printMilliseconds(milliseconds) {
    milDec.innerHTML = milliseconds[0];
    milUni.innerHTML = milliseconds[1];
}

function printSplit(minutes, seconds, milliseconds) {
    var split = minutes + ":" + seconds + ":" + milliseconds
    var listItem = document.createElement('li');
    listItem.innerHTML = split;
    document.getElementById('splits').appendChild(listItem);
    
}

function clearSplits() {
    document.getElementById('splits').innerHTML = "";

}

function setStopBtn() {
    btnLeft.innerHTML = "STOP";
    btnLeft.className = "btn stop";
}

function setSplitBtn() {
    btnRight.innerHTML = "SPLIT";
    btnRight.className = "btn split";
}

function setStartBtn() {
    btnLeft.innerHTML = "START";
    btnLeft.className = "btn start";
}

function setResetBtn() {
    btnRight.innerHTML = "RESET";
    btnRight.className = "btn reset";
}

// Start/Stop Button
btnLeft.addEventListener('click', function () {
    if(btnLeft.className.indexOf('start') > 0) {
        chronometer.startClick();
        setStopBtn();
        setSplitBtn();
    } else {
        chronometer.stopClick();
        setStartBtn();
        setResetBtn();
    }  
});

// Reset/Split Button
btnRight.addEventListener('click', function() {
    if (btnRight.className.indexOf('reset') > 0) {
        chronometer.resetClick();   
    } else {
        chronometer.splitClick(); 
    }
});

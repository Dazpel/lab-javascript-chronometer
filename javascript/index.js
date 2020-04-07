const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

function setTime() {

  setInterval(() => {
    miliSec = chronometer.twoDigitsNumber(chronometer.getMiliseconds());
    milDec.innerText = miliSec[0];
    milUni.innerText = miliSec[1];
  }, 10);

  setInterval(() => {
    minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
    seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());

    if (Number(minutes) !== 0) {
      minDec.innerText = minutes[0];
      minUni.innerText = minutes[1];
      secDec.innerText = seconds[0];
      secUni.innerText = seconds[1];
    } else {
      secDec.innerText = seconds[0];
      secUni.innerText = seconds[1];
    }
  }, 1000);

  
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // CHANGE CLASS
  if (btnLeft.className === 'btn start') {
    btnLeft.classList.toggle('start', false);
    btnLeft.classList.toggle('stop');
    btnLeft.innerText = 'STOP';
    btnRight.innerText = 'SPLIT';
    btnRight.classList.toggle('reset', false);
    btnRight.classList.toggle('split');
    chronometer.startClick();
  } else {
    btnLeft.classList.toggle('stop', false);
    btnLeft.classList.toggle('start');
    btnLeft.innerText = 'START';
    btnRight.innerText = 'RESET';
    btnRight.classList.toggle('split', false);
    btnRight.classList.toggle('reset');
    chronometer.stopClick();
  }

  setTime();
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  var list = document.getElementById('splits');

  if (btnRight.className === 'btn split') {
    var currTime = chronometer.splitClick();
    const newSplit = `<li>${currTime}</li>`;
    list.insertAdjacentHTML('beforeend', newSplit);
  } else {
    chronometer.currentTime = 0;
    chronometer.miliseconds = 0;
    list.innerHTML = '';
  }
});

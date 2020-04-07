class Chronometer {
  constructor() {
    this.currentTime = 0
    this.miliseconds = 0
    this.intervalId = 0
    this.intervalMili = 0
  }
  startClick(callback) {
    
    this.intervalId = setInterval( () => this.currentTime ++, 1000);

    this.intervalMili = setInterval( () => this.miliseconds ++, 10);


  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }

  getMiliseconds(){
     return (this.miliseconds == 100) ? this.miliseconds = 0 : this.miliseconds
  }

  twoDigitsNumber(digit) {
    return ('0'+ digit).slice(-2)
  }
  stopClick() {
    clearInterval(this.intervalId)
    clearInterval(this.intervalMili)
  }
  resetClick() {
    this.currentTime = 0
    this.miliseconds = 0 
  }
  splitClick() {
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(this.getSeconds())}`
  }
}

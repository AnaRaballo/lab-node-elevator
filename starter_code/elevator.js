class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "";
    this.intervalId;
  }

  start() {
    this.intervalId = setInterval(update(), 1000);
   }
  stop() {
    clearInterval(this.intervalId);
   }
  update() {
    this.log();
   }
  _passengersEnter() { 
    this.waitingList.forEach(function(person) {
    if(this.person.originFloor === this.floor){
      this.passengersEnter.push(person);
      this.waitingList.splice(index, 1);
      this.requests.push(person.destinationFloor);
      console.log(`${person.name} has entered the elevator`)
    } 
  })
}    

  _passengersLeave() {
    this.waitingList.forEach(function(person, index){
      if(this.person.destinationFloor === this.floor){
        this.waitingList.splice(index, 1);
        console.log(`${person.name} has entered the elevator`)
      } 
    })
    console.log(`${person.name} has left the elevator`)
   }

  floorUp() { 
    if (this.floor < this.MAXFLOOR) {
      this.direction = "Up";
      this.floor ++;
    }
  }
  floorDown() {
    if (this.floor > 0) {
      this.direction = "Down";
      this.floor --;
    }
   }
  call() { }
  log() {
    console.log(`Direction ${this.direction} | Floor ${this.floor}`);
   }
}

module.exports = Elevator;

function CoffeeMachine(beans) {
  this.beans = beans;

  /* Instance member level   
  this.makeCoffee = (shots) => {
    console.log("making... coffee");
  }; 
  */
}
// Prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log("making coffee.. ");
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);

console.log("machine1 >>", machine1);
console.log("machine2 >>", machine2);

function LatteMachine(milk) {
  this.milk = milk;
}

LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);

console.log("latteMachine >>", latteMachine);
latteMachine.makeCoffee();

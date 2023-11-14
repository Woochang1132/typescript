/**
 * Let's make a calculator 🧮
 * 임의의 값을 받는 것이 아닌 정해진 값을 받는다.
 */

type OperationState = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder'

function calculate(state : OperationState, num1 : number , num2 : number) : number{
    switch(state){
        case 'add' :
            return num1 + num2;
        case 'substract' :
            return num1 - num2;
        case 'multiply' :
            return num1 * num2;
        case 'divide' :
            return num1 / num2;
        case 'remainder':
            return num1 % num2;
        default :
            throw Error('unKnown command');            
        }
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1 


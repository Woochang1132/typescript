interface Employee{
    pay() : void;
}

class FullTimeEmployee implements Employee{
    pay(){
        console.log(`full time!!`);
    }
    workFullTIme(){

    }
}

class PartTimeEmployee implements Employee{
    pay(): void {
        console.log(`part time!!`)
    }
    workPartTime(){}
}

// 세부적인 타입을 인자로 받아서 정말 광범위 타입으로 다시 리턴함수는 좋지 않다.
/* function payBad(employee : Employee) : Employee{
    employee.pay();
    return employee;
}
 */
function pay<T extends Employee>(employee : T): T{
    employee.pay();
    return employee
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTIme();
bob.workPartTime();

const ellieAfterPay = pay(ellie);
ellieAfterPay.workFullTIme();

const obj = {
    name : 'woochang',
    age : 20
}

const obj2 ={
    animal : '🐆'
};

// object T의 키중에서 하나의 값이여야 하고
// return 되는 value 또한, T에 해당 키를 넣은 값이고
function getValue<T,K extends keyof T>(obj : T, key: K ) : T[K] {
    // key를 주입하면 value가 나올 수 있도록?
        return obj[key]
    
}

console.log(getValue(obj, 'name'))


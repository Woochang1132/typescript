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



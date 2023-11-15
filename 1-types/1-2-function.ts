{
/*     
    // TypeScript
    function add(num1: number, num2 : number) : number{
        return num1 + num2 ;
    }

    // JavaScript
    function jsFecchNum(id){
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        })
    }

    // TypeScript
    function fectchNum(id: string) : Promise<number>{
        return new Promise((resolve, reject) => {
            resolve(100);
        })
    }
 */
    // JavaScript => TypeScript
    // Optional parameter, ? string 타입을 보내도 되고 안 보내도 된다.

    function printName(firstName : string, lastName?: string){
        console.log(firstName);
        console.log(lastName);
    }
    printName("woochang");

    // Default parameter
    function printMessage(message : string = 'default message'){
        console.log(message)
    }
    printMessage();

    //Rest parameter
    function addNumbers(...numbers:number[]):number{
        return numbers.reduce((a,b) => a+b)
    }

    console.log(addNumbers(1,2))
    console.log(addNumbers(3,4,5))
}

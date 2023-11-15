{
    // Type Assertions
    function jsStrFunc() : any{
        return 'hello';
    }
    const result = jsStrFunc();
    console.log((result as string).length)
    console.log((<string>result).length)

 /*    
    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)) 
*/

    function findNumbers() : number[] | undefined{
        return undefined;
    }
    const numbers = findNumbers();
    numbers!.push(2);

/*   
    다음과 같이 button 요소가 학인되면 사용될 수 있도록 가능
    const button = document.querySelector('class');
        if(button){
            button.classList
    } */
}
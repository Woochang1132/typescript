{
    //JavaScript
    // let => es6, 도입
    // const
    // Primitive: number, string, boolean, bigint, symbol, null, undefined
    // Object : function, array ...

     
    //number
    const num:number=3;
    
    // string
    const str:string ='hello';

    //boolean
    const boal: boolean = false;

    // undefined
    let age: number | undefined
    age = undefined;
    age =1;
    function find(): number | undefined {
        return undefined
    }
    
    // null
    let person : string | null;
    person = null;

    // unknown
    let notSure : unknown = 0;
    notSure = 'he';

    // any
    let anyting : any = 0;
    anyting = "hello"

    // void
    function print(): void {
        console.log('hello');
        return;
    }

    // never
    function throwError(message: string): never{
        // message -> server(log)
        // 에러를 던지거나
        // 어떠한 것도 리턴하지 않는 경우에 never
        throw new Error(message);
    }

    // Object 
    let obj : object = [1,4];
    function acceptSomeObject(obj : object){

    }
    acceptSomeObject({name : 'woochang'});
    acceptSomeObject({animal : 'dog'})
}
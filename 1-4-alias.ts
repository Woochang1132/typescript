{
    /* 
        타입을 지정할 수 있다.
    */
   type Text = string;
   const name : Text = 'woochang';

   type Student = {
     name : string,
     age : number
   }
   const student : Student = {
    name : 'woochang',
    age : 30
   }
   console.log("student >>", student)

   // String Literal Types
   type Name = 'name';
   let woochangName : Name;
   woochangName = 'name'; // 지정한 string 내용 타입만 지정이 가능하다.

   type JSON = 'json'
   const json : JSON = 'json';
}
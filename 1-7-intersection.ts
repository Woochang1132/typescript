{
    /* 
        Intersection Types : &
    */
   type Student = {
        name : string,
        score : number,
   }

   type Worker = {
        empolyeeId : number;
        work : () => void;
   }

   function interWork(person: Student & Worker){
    console.log(person.name, person.score, person.work());
   }

   interWork({
    name : 'woochang',
    score : 1,
    empolyeeId : 123,
    work: () => {
        console.log("work")
    }
   })
}
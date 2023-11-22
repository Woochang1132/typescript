type Student = {
    passed : boolean;
}

const students: Student[] = [{passed : true}, {passed : true}, {passed : false}];
const reuslt = students.every(student => {
    return student.passed;
})

//console.log("result >>", reuslt)


class Animal{}

class Dog extends Animal{
    isDog : boolean = true; 
}

class Cat extends Animal{
    isCat : boolean = true;
}

const animals : Animal[] = [
    new Dog(),
    new Dog()    
]

function isDogAssertion(animal : Animal) : animal is Dog{
    return (animal as Dog).isDog !== undefined;
}

console.log(animals.every<Dog>(isDogAssertion));
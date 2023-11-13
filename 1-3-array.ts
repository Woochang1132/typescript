{
    //Array
    const fruits: string[] = ['a','b'];
    const scores: Array<number> = [1,3,4];
    function printArray(fruits : readonly string[]){
        // 해당 배열을 그대로 사용만 하고 push, delete 추가/삭제 안 됨
        // fruits.push
        // fruits.delete
    }
    // Tuple
    let student: [string, number];
    student = ['name', 123];
    // 방법1
    student[0]

    // 방법2, 구조분해 활용하기
    const [name, age] = student;
    console.log(name);
}
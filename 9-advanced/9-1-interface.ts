{

type PositionType = {
    x : number,
    y : number
}

// interface에서만, 동일한 이름으로 결합이 가능하다.
interface PositionInterface{
    x : number,
    y : number
}

// 사용하는 곳에서는 결합된 결과물을 사용해야 한다.
interface PositionInterface{
    z : number
}

//  object * 둘 다 가능한 경우

const obj1 : PositionType = {
    x : 1,
    y : 2
}

const obj2 : PositionInterface = {
    x : 1,
    y : 2,
    z : 3
}

// class * 
class Pos1 implements PositionType{
    x : number;
    y : number;
}

class Pos2 implements PositionInterface{
    x : number;
    y : number;
    z : number
}

// Extends, 확장 둘 다 가능
interface ZPositionInterface extends PositionInterface{
    z : number ; // 
}

type ZPositionType = PositionType & {z : number}

}

// Type aliases can use computed properties
type Person = {
    name : string,
    age : number,
}

type Name = Person['name']; // string 타입으로 결정된다.

type NumberType = number;
type Direction = 'left' | 'right';


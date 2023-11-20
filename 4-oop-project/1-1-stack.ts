// Stack LIFO 
// 구현된 push, pop 사용하지 않고
// 문자열로 구현

interface Stack {
    readonly _size : number;
    push(value : string): void;
    pop(): string;
}

type StackNode = {
    value : string,
    next ?: StackNode
}

class StackImp implements Stack{
    _size: number = 0;
    private head ?: StackNode
    
    get size(){
        return this._size;
    }

    push(value: string): void {
        const node : StackNode = {
            value : value,
            next : this.head
        }
        this.head = node;
        this._size++; 
    }

    pop(): string {
        if(this.head == null){
            throw new Error('head state is null');
        }
        const node = this.head;
        this.head = node.next; // node.next도 결국엔 StackNode를 담고 있다.

        this._size--; 
        return node.value;
    }
}

const stackResult = new StackImp()

stackResult.push('최우창');
stackResult.push('최진영');
stackResult.push('최무식');

stackResult.pop();

console.log("stackResult >>", stackResult)
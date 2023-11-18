// Stack LIFO 
// 구현된 push, pop 사용하지 않고
// 문자열로 구현


interface Stack {
    readonly size : number;
    push(value : string): void;
    pop(): string;
}

type StackNode = {
    readonly value : string;
    readonly next?: StackNode;
}

class StackImp implements Stack{
    private _size: number = 0;
    private head?: StackNode;

    constructor(private capacity : number){

    }
    get size(){
        return this._size;
    }
    
    push(value: string): void {
        if(this.size === this.capacity){
            throw new Error('Stack is full')
        }
        // Node로 감싸여져 있고 value가 전달 받은 value로 대체된다.
        const node : StackNode = {value : value, next : this.head}
        this.head = node;
        this._size++;
    }
    pop(): string {
        if(this.head == null){
            throw new Error('Stack is Empty!')
        }
        const node = this.head;
        this.head = node.next;
        this._size--;
        return node.value;
    }
  
}

const stack = new StackImp(10);
stack.push('Ellie1');
stack.push('Bob 2');
stack.push('Steve 3');

while(stack.size !==0){
    console.log(stack.pop())
}


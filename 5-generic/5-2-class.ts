interface Either{
    left: () => number;
    right: () => number;
}

class SimpleEither implements Either{
    constructor(private leftValue : number ,private rightValue : number){}

    left(): number{
        return this.leftValue;
    }
    right(): number{
        return this.rightValue;
    } 
}

const either = new SimpleEither(4,5);
either.left();
either.right();
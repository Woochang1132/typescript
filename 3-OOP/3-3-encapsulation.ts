
{
    type CoffeeCup = {
        shots : number;
        hasMilk : boolean
    }
    
    //public
    //private
    //protected
    class CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT = 7; // class level
        private coffeeBeans : number = 0; // instance(object)level
    
        //외부에서 new 연산자를 통해 객체 만드는 것을 방지한다.
      private constructor(coffeeBeans : number){
            this.coffeeBeans = coffeeBeans;
        }
    
        static makeMachine(coffeeBeans: number) : CoffeeMaker{
            return new CoffeeMaker(coffeeBeans);
        }

        fillCoffeeBeans(beans : number){
            if(beans < 0){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans
        }
    
        makeCoffee(shots : number): CoffeeCup {
            if(this.coffeeBeans  < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT){
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
            return {
                shots : shots,
                hasMilk: false
            }
        }
    }
       // const maker = new CoffeeMaker(32);
       const makemachine = CoffeeMaker.makeMachine(30);
       //console.log('makemachine >>', makemachine)
        const maker = CoffeeMaker.makeMachine(30);
        //maker.coffeeBeans = 3; // 내부 상태를 외부에서 바꾸는 경우가 발생하게 됨
        maker.fillCoffeeBeans(32);
        console.log("maker >>" , maker)
    }
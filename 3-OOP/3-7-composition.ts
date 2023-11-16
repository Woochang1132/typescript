
{
    type CoffeeCup = {
        shots : number,
        hasMilk? : boolean,
        hasSugar? : boolean
    }
    
    interface CoffeeMaker{
        makeCoffee(shots : number): CoffeeCup;
    }
    
    class CoffeeMachine implements CoffeeMaker{
        private static BEANS_GRAM_PER_SHOT = 7; // class level
        private coffeeBeans : number = 0; // instance(object)level
    
        //외부에서 new 연산자를 통해 객체 만드는 것을 방지한다.
      public constructor(coffeeBeans : number){
            this.coffeeBeans = coffeeBeans;
        }
    
        static makeMachine(coffeeBeans: number) : CoffeeMachine{
            return new CoffeeMachine(coffeeBeans);
        }

        clean() : void{
            console.log("cleaning the machine");
        }

        public fillCoffeeBeans(beans : number){
            if(beans < 0){
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans
        }
        private grindBeans(shots : number){
            console.log(`grinding beans for ${shots}`)
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT){
                throw new Error('Not enough coffee beans! ')
            }
            
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        }
        private preheat(): void{
            console.log("커피를 데우고 있습니다.")
        }
        private extract(shots : number) : CoffeeCup{
            console.log(`${shots}샷 만큼의 커피를 내리고 있습니다.`);

            return {
                shots : shots,
                hasMilk : false
            }
        }
    
        makeCoffee(shots : number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }
    // 싸구려 우유 거품기
    class CheapMilkSteamer{
        private steamMilk() : void {
            console.log('Steaming some milk...');
        }
        makeMilk(cup : CoffeeCup) : CoffeeCup{
            return {
                ...cup,
                hasMilk : true
            }
        }
    }
    
    // 설탕 제조기
    class AutomaticSugarMixer{
        private getSugar() {
            console.log("Getting some sugar from candy ");
            return true;
        }
        
        addSugar(cup : CoffeeCup) : CoffeeCup{
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar : sugar
            }
        }
    } 


    class CoffeeLatteMachine extends CoffeeMachine{
        constructor(
            beans: number, 
            public readonly serialNumber: string, 
            private milkFrother: CheapMilkSteamer ){
            super(beans);
        }


        makeCoffee(shots: number ): CoffeeCup{
            const coffee = super.makeCoffee(shots);
            return this.milkFrother.makeMilk(coffee);
        }
        
    }
    class SweetCoffeeMaker extends CoffeeMachine{
        constructor(private beans: number ,private sugar: AutomaticSugarMixer){
            super(beans)
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return this.sugar.addSugar(coffee);
        }   
     }

     class SweetCoffeLatteMachine extends CoffeeMachine{
        constructor(
            private beans: number, 
            private milk: CheapMilkSteamer,  
            private sugar: AutomaticSugarMixer){
                super(beans)
            }
           makeCoffee(shots : number): CoffeeCup{
            const coffee = super.makeCoffee(shots);
            const sugarAdded = this.sugar.addSugar(coffee);
            return this.milk.makeMilk(sugarAdded);
           }
     }

    const machine = new CoffeeMachine(23);
    }
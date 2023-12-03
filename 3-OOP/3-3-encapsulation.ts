
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
        //console.log("maker >>" , maker)

        class User{
                        get fullName(): string {
                return `${this.firstName} ${this.lastName}`
            }
            private interalAge = 4;
            get age() : number{
                return this.interalAge;
            }
            set age(num : number){
                if(num < 0){
                    console.log("num is less than 0")
                }
                this.interalAge = num;
            }
            // 이렇게 설정하면 this.firstName = firstName을 함축하고 있다.
constructor(private firstName : string, public lastName : string){
            }
        }
        const user = new User('Steve', 'Jobs');
                user.age = 6
        //console.log("user get >>", user.age)
        //console.log("user >>", user);
        //  get 함수에 접근할 때 => 멤버 변수에 접근하는 것처럼 이용하면 된다.

        class UserText {
            firstName: string;
            lastName: string;
            fullName: string;
            constructor(firstName: string, lastName: string){
                this.firstName = firstName;
                this.lastName = lastName;
                this.fullName = `${this.firstName} ${this.lastName}`

            }
            get Name(): string {
                return `${this.firstName} ${this.lastName}`
            } 
        }
        const userText = new UserText('Choi', 'Woochang');
        console.log(userText.fullName);
        userText.firstName = 'Ellie';
        console.log(userText.fullName);
        console.log(userText.firstName);
        console.log(userText.Name);
    }
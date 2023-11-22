class NetworkClient{
    tryConnect() : void {
        throw new Error('no network!!');
    }
}

class UserService{
    constructor(private client : NetworkClient){}
    login(){
            this.client.tryConnect();
    }
}

class App{
    constructor(private userService : UserService){}
    run() {
        try{
            this.userService.login();
        }catch(error){
            //show dialog to user(일시적인 오류가 있습니다.)
        }
        
    }
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
//service.login();
app.run();


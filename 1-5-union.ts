{
    // Union Types : OR
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction : Direction){
        console.log(direction)
    }
    move('down');

    type TileSize = 8 | 16 | 24;
    const tile : TileSize = 8;

    type SuccessState = {
        response : {
            body : string
        }
    }
    type FailState = {
        reason : string;
    }
    type LoginState = SuccessState | FailState
    // =============================================================================================
    // function loing => success, fail
    function login() : LoginState{
        return {
            response:{
                body: 'login in'
            }
        }
    }
    // ===============================================================================================
    // printLoginState(state : LoginState)
    // success => ✅ body
    // fail    => ❎ reason  
    function printLoginState(state : LoginState) : void{
        if('response' in state){
            console.log(`${state.response.body}`)
        }else{
            console.log(`${state.reason}`);
        }
    }
    
}

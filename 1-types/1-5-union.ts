{
    // Union Types : OR
    type Direction = 'left' | 'right' | 'up' | 'down';
    function moveDirection(direction : Direction){
        console.log(direction)
    }
    moveDirection('down');

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
    // ===============================================================================================
    // printLoginState(state : LoginState)
    // success => ✅ body
    // fail    => ❎ reason  
    
}

{
    // 해당 타입에 동일한 키를 설정해줘서 구분한다?
    type SuccessState = {
        result : 'success';
        response : {
            body : string
        }
    }
    type FailState = {
        result : 'fail';
        reason : string;
    }
    type LoginState = SuccessState | FailState
    // =============================================================================================
    // function loing => success, fail
    function login() : LoginState{
        return {
            result : 'success',
            response:{
                body: 'login in'
            }
        }
    }
    // ===============================================================================================
    // printLoginState(state : LoginState)
    // success => ✅ body
    // fail    => ❎ reason  
/*     
    function printLoginState(state : LoginState) : void{
        if(state.result === 'success'){
            console.log(`${state.response.body}`)
        }else{
            console.log(`${state.reason}`);
        }
    } */
}
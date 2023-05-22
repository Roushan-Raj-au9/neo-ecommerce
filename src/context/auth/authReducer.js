const AuthReducer = (state, action) => {
    switch(action.type){
        case 'REGISTER':
        case 'LOGIN':
            return{
                ...state,
                loginUser: action.payload,
                loading: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
            }

        default:
            return state
    }
}

export default AuthReducer;
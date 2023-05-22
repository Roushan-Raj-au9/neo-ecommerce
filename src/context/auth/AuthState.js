import { useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import axios from "axios";

const AuthState = ({ children }) => {
    const initialState = {
        loginUser: {},
        loading: false,
    }
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    const login = async ({email, password}) => {
        try {
            setLoading()
            const config = {
                headers:{'Content-Type': 'application/json'}
            }
            const { data } = await axios.post(`/api/auth/login`, {email, password}, config)
            dispatch({
                type: 'LOGIN',
                payload: data
            })
            let userObj ={
                name:data?.foundUser?.firstName,
                token:data?.encodedToken
            }
            localStorage.setItem('user', JSON.stringify(userObj))
        } 
        catch (error) {
            console.error(error);
        }
    }
    const register = async ({email, password, firstName, lastName}) => {
        try {
            setLoading()
            const config = {
                headers:{'Content-Type': 'application/json'}
            }
            const { data } = await axios.post(`/api/auth/signup`,{email, password, firstName, lastName}, config)
            dispatch({
                type: 'REGISTER',
                payload: data
            })
            let userObj ={
                name:data?.createdUser?.firstName,
                token:data?.encodedToken
            }
            localStorage.setItem('user', JSON.stringify(userObj))
        } 
        catch (error) {
            console.error(error);
        }
    }
    const setLoading = () => {
        dispatch({ type: 'SET_LOADING' })
    }
    return (
        <AuthContext.Provider value={{
            loginUser: state.loginUser,
            loading: state.loading,
            login,
            register,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthState;
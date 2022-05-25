import { useEffect } from "react";
import { useContext } from "react";
import Cookies from "universal-cookie";
import { userRequest } from "./apiCalls";
import { UserActions } from "./constants";
import { authReducer } from "./reducers";
const { createContext, useReducer } = require("react");

const AuthContext = createContext();

const initalState = {
    isAuth: false,
    user: null
}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initalState);
    const cookies = new Cookies();

    useEffect(() => {
        const fetchData = async () => {
            const response = await userRequest('/user/checkVerify')

            if(response.user) {
                dispatch({ type: UserActions.LOGIN, payload: response })
            } else {
                state.isAuth = false
            }

        }
        if (!state.user && cookies.get('access_token')) {
            fetchData();
        }
    }, [])

    return <AuthContext.Provider value={{ state, dispatch }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext)
}
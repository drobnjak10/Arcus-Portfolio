import { UserActions } from "./constants"



export const authReducer = (state, action) => {
    switch (action.type) {
        case UserActions.LOGIN: {
            return {
                ...state,
                user: action.payload.user,
                isAuth: true
            }
        }
        case UserActions.LOGOUT: {
            return {
                ...state, 
                isAuth: false,
                user: null
            }
        }
        default:
            return { state }
    }
}
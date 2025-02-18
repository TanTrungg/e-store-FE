import { LoginState } from "@/types/auth/AuthTypes"
import { AUTH } from "../constant/constant"

// AUTH
export const Login = (data: LoginState) =>{
    return{
        type: AUTH.LOGIN,
        data
    }
}
export const LoginSuccess = (data: any) =>{
    return{
        type: AUTH.LOGIN_SUCCESS,
        payload:{
            data,
        }
    }
}
export const LoginFail = (error: string) =>{
    return{
        type: AUTH.LOGIN_FAIL,
        payload:{
            error
        }
    }
}
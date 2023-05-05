import { AxiosError } from "axios"
import { FormDataRegisterUser } from "../schemas/register_user_schema"
import api from "../service/http"
import { FormDataLoginUser } from "../schemas/login_user_schema"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { ICarAnnouncementDetail } from "../pages/detail_announce"


interface IUserRegisterRequest{

}

export const useRequests = () => {
    const {setTrigger, trigger} = useContext(AuthContext)
    const registerUserRequest = async (payload: FormDataRegisterUser) => {
        try {
            const response = await api.post('/user', payload)
            console.log(response)
            return response
        } catch (error) {
            if(error instanceof AxiosError){
                console.log(error.response?.data)
            }else{
                console.log(error)
            }
        } 
    }
    const loginUserRequest = async (payload: FormDataLoginUser) =>{
        try {
            const response = await api.post('/login', payload)
            console.log(response)
            localStorage.setItem('kenzie-brand-cars:token', response.data.token.token)
            localStorage.setItem('kenzie-brand-cars:current-user', JSON.stringify(response.data.token.user))
            setTrigger(!trigger)
            return response
        } catch (error) {
            if(error instanceof AxiosError){
                console.log(error.response?.data)
            }else{
                console.log(error)
            }
        }
    }
    const getSpecificAnnounce = async (payload: number) => {
        try {
            const response = await api.get(`/announce/${payload}`)
            console.log(response)
            return response.data as ICarAnnouncementDetail
        } catch (error) {
            if(error instanceof AxiosError){
                console.log(error.response?.data)
            }else{
                console.log(error)
            }
        }
    }
    return{
        registerUserRequest,
        loginUserRequest,
        getSpecificAnnounce
    }

}


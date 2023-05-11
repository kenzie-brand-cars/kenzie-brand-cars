import { AxiosError } from "axios"
import { FormDataRegisterUser } from "../schemas/register_user_schema"
import api from "../service/http"
import { FormDataLoginUser } from "../schemas/login_user_schema"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { ICarAnnouncementDetail } from "../pages/detail_announce"
import { IAnnouncesReponse } from "../pages/home/components/announce_card"
import { FormFilter } from "../schemas/filter_schema"
import { EditUserFrom } from "../schemas/edit_user_schema"
import { EditAnnounceForm } from "../schemas/edit_announce_schema"
import { toast } from "react-toastify"
import { CreateAnnounceForm } from "../schemas/create_announce_schema"



interface IUserRegisterRequest{

}
export interface IFiltersResponse {
    markFilters:  Filter[];
    modelFilters: Filter[];
    fuelFilters:  FuelFilter[];
    colorFilters: Filter[];
    yearFilters:  YearFilter[];
}

export interface Filter {
    id:   number;
    name: string;
}

export interface FuelFilter {
    id:   number;
    type: string;
}

export interface YearFilter {
    id:   number;
    year: string;
}

export const useRequests = () => {
    const {setTrigger, trigger} = useContext(AuthContext)
    const registerUserRequest = async (payload: FormDataRegisterUser) => {
        try {
            const response = await api.post('/user', payload)
            return response
        } catch (error) {
            if(error instanceof AxiosError){
                console.log(error.response?.data)
            }else{
                console.log(error)
            }
            throw new Error('')
        } 
    }
    const loginUserRequest = async (payload: FormDataLoginUser) =>{
        try {
            const response = await api.post('/login', payload)
            console.log('Passou da primeira linha do trycatch da função no hook.')
            localStorage.setItem('kenzie-brand-cars:token', response.data.token)
            localStorage.setItem('kenzie-brand-cars:current-user', JSON.stringify(response.data.user))
            setTrigger(!trigger)
            return response
        } catch (error) {
            if(error instanceof AxiosError){
                console.log(error.response?.data)
            }else{
                console.log(error)
                return error
            }
            throw new Error()
        }
    }
    const editUserRequest = async (payload: any, id: string) => {
        try {
            const response = await api.patch(`/user/${id}`,payload)
            console.log(response.data)
            return response.data
        } catch (error) {
            console.log(error)
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
    const getFilterParams = async (): Promise<IFiltersResponse | void> => {
        try {
            const response = await api.get<IFiltersResponse>('/filter')
            
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    const getAllAnnounces = async (): Promise<IAnnouncesReponse[] | void> => {
        try {
            const response = await api.get<IAnnouncesReponse[]>('/announce')
            
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    const getSpecifiAnnounceById = async (id: number): Promise<IAnnouncesReponse | void> => {
        try {
            const response = await api.get<IAnnouncesReponse>(`/announce/${id}`)
            
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    const publicComment = async (idAnnounce: number, text: string): Promise<void>  =>{
        try {
            const response = await api.post(`/announce/${idAnnounce}/comments`, {id_ann: idAnnounce, text: text})
            
        } catch (error) {
            console.log(error)
        }
    }
    const getFilterAnnounces = async(payload: FormFilter): Promise<IAnnouncesReponse[] | void> =>{
        try {
            const queryParams = Object.entries(payload)
            .filter(([key, value]) => value !== null)
            .map(([key, value]) => `${key}=${value}`)
            .join('&');
            const response = await api.get<IAnnouncesReponse[]>(`/announce/?${queryParams}`)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    const createAnnounce = async (payload: CreateAnnounceForm) => {
        const galeryFake = []
        for(let i= 0; i < 4; i++){
            galeryFake.push(payload.gallery)
        }
        const payloadCorrect = {...payload, gallery:{images: galeryFake}}
        try {
            const response = await api.post('/announce',payloadCorrect)
            console.log(response)
        } catch (error) {
            console.log(error)
            throw new Error('Algum erro')
        }
    }
    const updateAnnounce = async (payload: EditAnnounceForm, id: string) => {
        try {
            const response = await api.patch(`/announce/${id}`, payload)
            return response
        } catch (error) {
            console.log(error)
            throw new Error('')
        }
    }
    const deleteAnnounce = async (id: string) =>{
        try {
            const response = await api.delete(`/announce/${id}`)
            return response
        } catch (error) {
            throw new Error('Algum erro')
        }
    }
    return{
        registerUserRequest,
        loginUserRequest,
        editUserRequest,
        getSpecificAnnounce,
        getFilterParams,
        getAllAnnounces,
        getSpecifiAnnounceById,
        publicComment,
        getFilterAnnounces,
        createAnnounce,
        updateAnnounce,
        deleteAnnounce
    }

}


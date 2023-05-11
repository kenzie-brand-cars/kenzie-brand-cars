import { createContext, useEffect, useState } from "react";
import  api  from "../service/http";

interface IAuthContextProps {
    userAuthenticated: boolean,
    currentUser: IUser | undefined,
    loading: boolean,
    modalState: boolean,
    setModalState: React.Dispatch<React.SetStateAction<boolean>>
    trigger: boolean
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>
    profileName: string
    setProfileName: React.Dispatch<React.SetStateAction<string>>
    profilePage: boolean
    setProfilePage: React.Dispatch<React.SetStateAction<boolean>>
    
}

interface IAuthContextProviderProps {
    children: React.ReactNode
}

export interface IUser {
    id: string;
    name: string;
    email: string;
    cpf: string;
    phone: string;
    birthDate: string;
    description: string;
    type: string;
    admin: boolean;
}

export const AuthContext = createContext({} as IAuthContextProps)


export const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {
    const [userAuthenticated, setUserAuthenticated] = useState<boolean>(false)
    const [currentUser, setCurrentUser] = useState<IUser>()
    const [loading, setLoading] = useState<boolean>(true)
    const [profileName, setProfileName] = useState('')
    const [profilePage, setProfilePage] = useState(false)
    const [modalState, setModalState] = useState<boolean>(false);
    const [trigger, setTrigger] = useState<boolean>(false)
    const verifyAuthUser = () => {
        const currentToken = localStorage.getItem('kenzie-brand-cars:token')
        const currentUser = localStorage.getItem('kenzie-brand-cars:current-user')
        if (currentToken && currentUser) {
            setUserAuthenticated(true)
            setCurrentUser(JSON.parse(currentUser))
        }
        api.defaults.headers.common.Authorization = currentToken
    }
    useEffect(() => {
        verifyAuthUser()
        setTimeout(() => {
            setLoading(false)

        }, 2000)
    }, [trigger])
    return (
        <AuthContext.Provider value={{
            userAuthenticated, 
            currentUser, 
            loading, 
            modalState, 
            setModalState, 
            trigger,
            setTrigger,
            profileName,
            setProfileName,
            profilePage,
            setProfilePage
        }}>
            {children}
        </AuthContext.Provider>
    )
}
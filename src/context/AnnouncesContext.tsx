
import { iAnnounce } from "../pages/profile_view_user_page";
import { IAnnouncesReponse } from "../pages/home/components/announce_card";
import { createContext, useState } from "react";

interface AnnouncesContextProps{
    announces: IAnnouncesReponse[]
    setAnnounces: React.Dispatch<React.SetStateAction<IAnnouncesReponse[]>>
    trigger: boolean
    setTrigger: React.Dispatch<React.SetStateAction<boolean>>
}
interface AnnouncesProviderProps{
    children: React.ReactNode
}
export const AnnouncesContext = createContext({} as AnnouncesContextProps)

export const AnnouncesProvider = ({children}:AnnouncesProviderProps) => {
    const [announces, setAnnounces] = useState<IAnnouncesReponse[]>([])
    const [trigger, setTrigger] = useState<boolean>(false)
    return(
        <AnnouncesContext.Provider value={{announces, setAnnounces, trigger, setTrigger}}>
            {children}
        </AnnouncesContext.Provider>
    )
}
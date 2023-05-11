import { createContext, useState } from "react";


interface INavbarContextProps {
    showNavbarMobile: boolean
    setShowNavbarMobile: React.Dispatch<React.SetStateAction<boolean>>
}

interface INavbarProviderProps {
    children: React.ReactNode
}

export const NavbarContext = createContext({} as INavbarContextProps)

export const NavbarProvider = ({ children }: INavbarProviderProps) => {
    const [showNavbarMobile, setShowNavbarMobile] = useState<boolean>(false)
    return (
        <NavbarContext.Provider value={{
            showNavbarMobile,
            setShowNavbarMobile
        }}>
            {children}
        </NavbarContext.Provider>
    )
}
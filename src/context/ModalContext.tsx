import { createContext, useState } from "react";


interface IModalContext {
    modalType: "user" | "announce"| "create" | "accountCreated"
    setModalType: React.Dispatch<React.SetStateAction<"user" | "announce"| "create" | "accountCreated">>
    display: boolean
    setDisplay: React.Dispatch<React.SetStateAction<boolean>>
}
interface IModalProvider {
    children: React.ReactNode
}

export const ModalContext = createContext({} as IModalContext)


export const ModalProvider = ({ children }: IModalProvider) => {
    const [modalType, setModalType] = useState<"user" | "announce" | "create" | "accountCreated">("user")
    const [display, setDisplay] = useState<boolean>(false)
    return (
        <ModalContext.Provider value={{
            modalType,
            setModalType,
            display,
            setDisplay
        }}>
            {children}
        </ModalContext.Provider>
    )
}
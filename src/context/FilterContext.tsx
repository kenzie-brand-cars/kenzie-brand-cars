import { createContext, useEffect, useState } from "react";

interface IFilterContext {
    displayFilter: boolean
    setDisplayFilter: React.Dispatch<React.SetStateAction<boolean>>
}
interface IFilterProviderMobile {
    children: React.ReactNode
}
export const FilterContextMobile = createContext({} as IFilterContext)

export const FilterProviderMobile = ({ children }: IFilterProviderMobile) => {
    const [displayFilter, setDisplayFilter] = useState<boolean>(false)
    return (
        <FilterContextMobile.Provider value={{
            displayFilter,
            setDisplayFilter
        }}>
            {children}
        </FilterContextMobile.Provider>
    )
}
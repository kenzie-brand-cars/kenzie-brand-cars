import { StyledModalUser } from "./style"

interface IModalUser {
    title?: string,
    subtitle?: string
    display: boolean
    children: React.ReactNode
}

export const ModalBase = ({children,subtitle,title,display}: IModalUser) => {
    return (
        <StyledModalUser display={display}>
            <div className="modal-body">
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                {children}
            </div>
        </StyledModalUser>
    )
}

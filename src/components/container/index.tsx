import { useContext } from "react"
import { Footer } from "../footer"
import { ModalBase } from "../modal"

import { StyledContainer } from "./style"
import { ModalContext } from "../../context/ModalContext"
import { FormModalUser } from "../form_user"
import { FormEditAnnounceModal } from "../form_edit_announce"
import { FormCreateAnnounceModal } from "../form_create_announce"
import { FormAccountCreaeted } from "../form_accounter_created"


interface IContainerProps {
    children: React.ReactNode,
}

export const Container = ({ children }: IContainerProps) => {
    const {modalType, display} = useContext(ModalContext)
    return (
        <StyledContainer>
            <div className="content">
                {modalType === "user" && (
                    <ModalBase title="Editar Perfil" subtitle="Informações Pessoais" display={display}>
                        <FormModalUser/>
                    </ModalBase>
                )}
                {modalType === "announce" && (
                    <ModalBase title="Editar Anúncio" subtitle="Informações do Anúncio" display={display}>
                        <FormEditAnnounceModal/>
                    </ModalBase>
                )}
                {modalType === "create" && (
                    <ModalBase title="Criar Anúncio" subtitle="Informações Pessoais" display={display}>
                        <FormCreateAnnounceModal/>
                    </ModalBase>
                )}
                {modalType === "accountCreated"&& (
                    <ModalBase display={display}>
                        <FormAccountCreaeted/>
                    </ModalBase>
                )}
                {/* <ModalBase title={modalType === 'user'? 'Editar Perfil': 'Editar Anuncio'} subtitle={modalType === 'user'? "Informações Pessoais": "Informações do Anúncio"} display={display}>
                    {modalType === "user"? (
                        <FormModalUser/>
                    ):<FormEditAnnounceModal/>}
                </ModalBase> */}
                <div className="content-children">
                    {children}
                </div>
                <Footer />
            </div>
        </StyledContainer>
    )

}
import { useParams } from "react-router-dom"
import { Container } from "../../components/container"
import { useContext, useEffect } from "react"
import { AuthContext } from "../../context/AuthContext"
import { StyledProfileViewUserPage } from "./style"
import { CircleInitials } from "../../components/circle_initials"
import { CardAnnounce } from "./components/card_announce/card-announce"
import Modal from "../../components/navbar/components/modal_profile"



export const ProfileViewUserPage = () => {
    const { currentUser, modalState } = useContext(AuthContext)

    useEffect(() => {
        console.log(modalState)
      }, [modalState]);

    const { id } = useParams()

    return (
        <Container>
            {modalState ? 
            <>
                <Modal/> 
            </>
            : 
            <></>}
            <StyledProfileViewUserPage>
                <div className="bg-brand-color">
                    <div className="card">
                        <CircleInitials size={4} first={currentUser?.name[0].toUpperCase() as string} second={currentUser?.name[1].toUpperCase() as string} />
                        <p>{currentUser?.name} <span className="account-type">{currentUser?.type === "buyer" ? "Comprador" : "Anunciante"}</span></p>
                        <p className="profile-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque esse, error ad facere tenetur vel tempora fuga, labore officiis id tempore eius culpa. Veniam fuga pariatur voluptate iste, eum nihil.</p>
                        <button className="btn-create-announce">Criar Anuncio</button>
                    </div>
                </div>
                <div className="announcements">
                    <h2>Anuncios</h2>
                    <div className="car-announcements-carrousel">
                        <CardAnnounce/>
                        <CardAnnounce/>
                        <CardAnnounce/>
                        <CardAnnounce/>
                        <CardAnnounce/>
                        <CardAnnounce/>
                        <CardAnnounce/>
                        <CardAnnounce/>
                    </div>
                </div>
                <div className="pagination">
                    <p>1 de 2</p>
                    <p className="forward">Seguinte</p>
                </div>
            </StyledProfileViewUserPage>
        </Container>
    )
}
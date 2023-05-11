import { useParams } from "react-router-dom"
import { Container } from "../../components/container"
import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../../context/AuthContext"
import { StyledProfileViewUserPage } from "./style"
import { CircleInitials } from "../../components/circle_initials"
import { CardAnnounce } from "./components/card_announce/card-announce"
import CreateAnnounceModal from "./components/modal_announce"
import api from "../../service/http"

export interface iOwner {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
}
  
export interface iAnnounce {
  id: number;
  mark: string;
  model: string;
  year: string;
  km: number;
  fuel: string;
  price: number;
  description: string;
  image: string;
  publishedAt: boolean;
  softDeleted: boolean;
  withinFipe: boolean;
  deletedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  owner: {
    id: string;
    name: string;
    email: string;
    cpf: string;
    phone: string;
  };
  color: string;
}
  
  
  export const ProfileViewUserPage = () => {
      const [showModal, setShowModal] = useState(false);
      const [announceCreated, setAnnounceCreated] = useState(false);
      const { currentUser, modalState, profilePage, setProfilePage } = useContext(AuthContext)
      const [announces, setAnnounces] = useState<Array<iAnnounce>>([]);

      useEffect(() => {
        async function loadAnnounces() {
          try {
            const response = await api.get('/announce');
            const filteredAnnounces = response.data.filter((item:any)=> item.owner.id === currentUser?.id);
            setAnnounces(filteredAnnounces);
          } catch (error) {
            console.log(error);
          }
        }
        loadAnnounces();
        setProfilePage(true)
      }, [modalState, announceCreated]);

    const { id } = useParams()

    const handleCreateAnnounceClick = () => {
      setShowModal(true);
    }
    const handleCloseAnnounceClick = () => {
      setShowModal(false);
      setTimeout(() => {
        setAnnounceCreated(true)
      }, 1000);
      setAnnounceCreated(false)
    }

    return (
        <Container>
            {showModal ? 
            <>
                <CreateAnnounceModal handleClick={handleCloseAnnounceClick}/> 
            </>
            : 
            <></>}
            {announces ? 
            <StyledProfileViewUserPage>
                <div className="bg-brand-color">
                    <div className="card">
                        <CircleInitials size={4} first={currentUser?.name[0].toUpperCase() as string} second={currentUser?.name[1].toUpperCase() as string} />
                        <p>{currentUser?.name} <span className="account-type">{currentUser?.type === "buyer" ? "Comprador" : "Anunciante"}</span></p>
                        <p className="profile-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque esse, error ad facere tenetur vel tempora fuga, labore officiis id tempore eius culpa. Veniam fuga pariatur voluptate iste, eum nihil.</p>
                        <button className="btn-create-announce" onClick={handleCreateAnnounceClick}>Criar Anuncio</button>
                    </div>
                </div>
                <div className="announcements">
                    <h2>Anuncios</h2>
                    <div className="car-announcements-carrousel">
                        {announces.map((cardItem) => (
                            <CardAnnounce cardItem={cardItem} />
                        ))}
                    </div>
                </div>
                <div className="pagination">
                    <p>1 de 2</p>
                    <p className="forward">Seguinte</p>
                </div>
            </StyledProfileViewUserPage>
            :
            <></>
            }
        </Container>
    )
}
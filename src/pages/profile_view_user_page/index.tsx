import { useParams } from "react-router-dom"
import { Container } from "../../components/container"
import { useContext, useState, useEffect } from "react"
import { AuthContext } from "../../context/AuthContext"
import { StyledProfileViewUserPage } from "./style"
import { CircleInitials } from "../../components/circle_initials"
import { CardAnnounce } from "./components/card_announce/card-announce"
import CreateAnnounceModal from "./components/modal_announce"
import api from "../../service/http"

interface iOwner {
    name: string;
    email: string;
    cpf: string;
    phone: string;
    birthDate: Date;
    description: string;
    type: string;
    admin: boolean;
  }
  
  export interface iAnnounce {
    id: number;
    year: number;
    km: number;
    price_fipe: number;
    price: number;
    description: string;
    image: string;
    withinFipe: boolean;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    softDeleted: boolean;
    publishedAt: boolean;
    mark: string;
    model: string;
    fuel: string;
    color: string;
    owner: iOwner;
  }
  
  
  export const ProfileViewUserPage = () => {
      const [showModal, setShowModal] = useState(false);
      const { currentUser, modalState } = useContext(AuthContext)
      const [announces, setAnnounces] = useState<Array<iAnnounce>>([]);

      useEffect(() => {
        
        api.get('/announce')
          .then(response => {
            
            setAnnounces(response.data);
          })
          .catch(error => {
            console.log(error); 
          });
      }, [modalState]);

      useEffect(() => {
        
      }, [announces]);

    const { id } = useParams()

    const handleCreateAnnounceClick = () => {
      setShowModal(true);
    }

    return (
        <Container>
            {showModal ? 
            <>
                <CreateAnnounceModal/> 
            </>
            : 
            <></>}
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
                        {announces.map((announce) => (
                            <CardAnnounce announce={announce} />
                        ))}
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
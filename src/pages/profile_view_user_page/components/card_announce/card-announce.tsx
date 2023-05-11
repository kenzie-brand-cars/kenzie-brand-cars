import { CircleInitials } from "../../../../components/circle_initials"
import carImage from '../../../../assets/car-image.png'
import { StyledCardAnnounce } from "./style"
import { AuthContext } from "../../../../context/AuthContext"
import { useContext } from "react"
import { iOwner } from "../.."
import { iAnnounce } from "../.."
import { ModalContext } from "../../../../context/ModalContext"
import { AnnouncesContext } from "../../../../context/AnnouncesContext"
import { useNavigate } from "react-router-dom"
import { IAnnouncesReponse } from "../../../home/components/announce_card"


interface CardItem {
    id: number;
    mark: string;
    model: string;
    year: string;
    km: number;
    fuel: string;
    price: number;
    price_fipe?: number;
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
  
  interface iCardAnnounceProps {
    cardItem?: IAnnouncesReponse;
  }



export const CardAnnounce = ({ cardItem }: iCardAnnounceProps) => {  
    const {profilePage} = useContext(AuthContext)  
    const {setDisplay,setModalType} = useContext(ModalContext)
    const {setAnnounceChoseId} = useContext(AnnouncesContext)
    const navigate = useNavigate()
    // const history = useHi()
    const handleOpenModalEditAnnounce = () =>{
        setDisplay(true)
        setModalType('announce')
        setAnnounceChoseId(cardItem!.id.toString())
    }
    return (
        <StyledCardAnnounce>
            <div className="card-announce">
                <div className="car-image-container">
                    <img src={cardItem?.image} alt="" />
                </div>
                <div className="car-info">
                    <p>{cardItem?.model}</p>
                    <p>{cardItem?.description}</p>
                    <div className="owner-accounce"><CircleInitials size={2} first={`${cardItem?.owner?.name[0].toUpperCase()}`} second={`${cardItem?.owner?.name[1].toUpperCase()}`} /> <span>{cardItem?.owner?.name}</span></div>
                    <div className="car-info-detail">
                        <div className="left-side">
                            <span>{cardItem?.km}</span>
                            <span>{cardItem?.year}</span>
                        </div>
                        <div className="right-side">
                            <span>{cardItem?.price}</span>
                        </div>
                    </div>
                </div>
                {profilePage ? 
                    <div className="profile_buttons">
                        <button className="edit_button" onClick={()=> handleOpenModalEditAnnounce()}>Editar</button>
                        <button className="detail_button" onClick={()=> navigate(`/announce-detail/${cardItem!.id}`)}>Ver detalhes</button>
                    </div>
                    :
                <></>
                }
            </div>
        </StyledCardAnnounce>
    )
}
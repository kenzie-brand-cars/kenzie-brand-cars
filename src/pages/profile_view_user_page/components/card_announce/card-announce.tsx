import { CircleInitials } from "../../../../components/circle_initials"
import carImage from '../../../../assets/car-image.png'
import { StyledCardAnnounce } from "./style"
import { AuthContext } from "../../../../context/AuthContext"
import { useContext } from "react"
import { iOwner } from "../.."
import { iAnnounce } from "../.."


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
    cardItem?: CardItem;
  }



export const CardAnnounce = ({ cardItem }: iCardAnnounceProps) => {  
    const {profilePage} = useContext(AuthContext)  
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
                        <button className="edit_button">Editar</button>
                        <button className="detail_button">Ver detalhes</button>
                    </div>
                    :
                <></>
                }
            </div>
        </StyledCardAnnounce>
    )
}
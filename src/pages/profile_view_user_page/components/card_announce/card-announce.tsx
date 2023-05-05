import { CircleInitials } from "../../../../components/circle_initials"
import carImage from '../../../../assets/car-image.png'
import { StyledCardAnnounce } from "./style"
import { iAnnounce } from "../.."
import { AuthContext } from "../../../../context/AuthContext"
import { useContext } from "react"

interface iCardAnnounceProps {
    announce: iAnnounce;
}

export const CardAnnounce = (props: iCardAnnounceProps) => {
    const {currentUser} = useContext(AuthContext)
    console.log(props)
    return (
        <StyledCardAnnounce>
            <div className="card-announce">
                <div className="car-image-container">
                    <img src={carImage} alt="" />
                </div>
                <div className="car-info">
                    <p>{props.announce.model}</p>
                    <p>{props.announce.description}</p>
                    <div className="owner-accounce"><CircleInitials size={2} first={`${currentUser?.name[0].toUpperCase()}`} second={`${currentUser?.name[1].toUpperCase()}`} /> <span>{currentUser?.name}</span></div>
                    <div className="car-info-detail">
                        <div className="left-side">
                            <span>{props.announce.km}</span>
                            <span>{props.announce.year}</span>
                        </div>
                        <div className="right-side">
                            <span>{props.announce.price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </StyledCardAnnounce>
    )
}
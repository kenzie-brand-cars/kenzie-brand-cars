import { useNavigate } from "react-router-dom"

import { StyledAdvertiserCard } from "./style"
import { Owner } from "../.."


interface IAdvertiserCard {
    owner: Owner
    className?: string
}

export const AdvertiserCard = ({ className, owner }: IAdvertiserCard) => {
    const navigate = useNavigate()
    const handleNavigateToProfileUser = (id: string) =>{
        console.log(id)
        // navigate('/') nessa linha entra a rota da pagina que o pedro ta criando
    }
    return (
        <StyledAdvertiserCard className={className}>
            <div className="profile-initials">

                {owner.name.split(' ').length > 0 ? (
                    <h2>
                        {owner.name.split(' ')[0][0]} {owner.name.split(' ')[1][0]}
                    </h2>
                ) :
                    <h2>
                        {owner.name.split(' ')[0][0]}
                    </h2>
                }

            </div>
            <h3>{owner.name}</h3>
            <p>{owner.description}</p>
            <button onClick={()=>handleNavigateToProfileUser(owner.id)}>Ver todos anuncios</button>
        </StyledAdvertiserCard>
    )
}
import { useContext, useState } from "react"
import { CardContainer } from "../card_container"
import { StyledCreateComentCard } from "./style"
import { AuthContext } from "../../../../context/AuthContext"
import { useRequests } from "../../../../hooks/RequestsHooks"


interface ICreateComentCard{
    idAnnounce:number
}


export const CreateComentCard = ({idAnnounce}:ICreateComentCard) => {
    const {currentUser} = useContext(AuthContext)
    const {publicComment} = useRequests()
    const [comment, setComment] = useState<string>('')
    const handleSendComment = async() =>{
        await publicComment(idAnnounce, comment)
        window.location.reload()
    }
    return (
        <CardContainer>
            <StyledCreateComentCard>
                <div className="create-coment-header">
                    <h2 className="profile-initials">
                    {currentUser!.name.split(' ').length > 1 ? (
                    <>
                        {currentUser!.name.split(' ')[0][0]}{currentUser!.name.split(' ')[1][0]}
                    </>
                ) :
                    <>
                        {currentUser!.name[0]}
                    </>
                }
                    </h2>
                    <p>{currentUser!.name}</p>
                </div>
                <textarea name="" id="" cols={30} rows={7} placeholder="Digite seu comentario aqui" onChange={(e)=>setComment(e.target.value)}></textarea>
                <button onClick={handleSendComment}>Comentar</button>
                <div className="shortcuts">
                    <p>Gostei muito!</p>
                    <p>Incrivel</p>
                    <p>Recomendarei para os meus amigos</p>
                </div>
            </StyledCreateComentCard>
        </CardContainer>

    )

}
import { Comment } from "../.."
import { CardContainer } from "../card_container"
import { StyledAnnouncementComents } from "./style"

interface IAnnouncementComentsProps {
    coments: Comment[]
}

export const AnnouncementComents = ({coments}: IAnnouncementComentsProps) => {
    return (
        <CardContainer>

            <StyledAnnouncementComents>
                <h2>Comentários</h2>
                {coments.map((comment)=> (
                <div className="coment" key={comment.text}>
                    <div className="comment-header">
                        <p className="profile-initials">
                        {comment.author.name.split(' ').length > 1 ? (
                    <>
                        {comment.author.name.split(' ')[0][0]}{comment.author.name.split(' ')[1][0]}
                    </>
                ) :
                    <>
                        {comment.author.name.split(' ')[0][0]}
                    </>
                }
                        </p>
                        <p>{comment.author.name}</p>
                        <div className="divisor"></div>
                        <p className="created-at">há 3 dias</p>
                    </div>
                    <p className="coment-conent">
                        {comment.text}
                    </p>
                </div>

                ))}
            </StyledAnnouncementComents>
        </CardContainer>
    )
}
import { StyledAdvertiserCard } from "./style"


interface IAdvertiserCard{
    className?:string
}

export const AdvertiserCard = ({className}: IAdvertiserCard) => {
    return (
        <StyledAdvertiserCard className={className}>
            <div className="profile-initials">
                <h2 >
                    S L
                </h2>
            </div>
            <h3>Samuel Leão</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates asperiores quae est vitae impedit pariatur doloribus debitis ducimus adipisci eum! Ex aliquam corrupti iste unde reprehenderit eum quis explicabo perspiciatis?</p>
            <button>Ver todos anuncios</button>
        </StyledAdvertiserCard>
    )
}
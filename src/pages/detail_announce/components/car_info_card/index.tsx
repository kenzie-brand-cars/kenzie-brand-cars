import { CardContainer } from "../card_container";
import { StyledCarInfoCard } from "./style"

interface ICarInfoCardProps {
    year: number;
    km: number;
    price_fipe: number;
    price: number;
    // description: string;
    // image:       string;
    mark: string;
    model: string;
    fuel: string;
    color: string;
}


export const CarInfoCard = ({
    year,
    km,
    price_fipe,
    price,
    mark,
    model,
    fuel,
    color
}: ICarInfoCardProps) => {
    return (
        <CardContainer>

            <StyledCarInfoCard>
                <h2 className="car-title">
                    {`${mark} ${model} ${color} ${fuel}`}
                </h2>
                <div className="car-detail-info">
                    <p className="car-detail-info--year-and-km">
                        <span className="tag">{year}</span>
                        <span className="tag">{km} KM</span>
                    </p>
                    <span className="car-price">{price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
                    <button className="btn-buy">
                        Comprar
                    </button>

                </div>
            </StyledCarInfoCard>
        </CardContainer>
    )
}
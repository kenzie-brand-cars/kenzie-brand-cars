import { CardStyle } from "./style";
import { ICard } from "../../../../providers/homeContext";

type CardProps = {
  item: ICard;
};

export function Card({ item }: CardProps) {
  return (
    <CardStyle>
      <div className="div--img">
        <img src={`${item.image}`} alt="car img" />
      </div>
      <h2 className="h2--car-name">{`${item.mark} - ${item.model}`}</h2>
      <p>{item.description}</p>
      <div className="div--name-logo">
        <div className="div--seller-logo">
          {item.owner
            .split(" ")
            .slice(0, 2)
            .map((parte) => parte.charAt(0).toUpperCase())
            .join("")}
        </div>
        <div className="div--seller-name">{item.owner}</div>
      </div>
      <div className="div--price--description">
        <div className="div--descriptions">
          <div className="div--description-tag">{item.km} KM</div>
          <div className="div--description-tag">{item.year}</div>
        </div>
        <div>
          <h2 className="h2--price">R$ {item.price},00</h2>
        </div>
      </div>
    </CardStyle>
  );
}

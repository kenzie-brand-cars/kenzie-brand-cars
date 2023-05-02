import { HomeContext } from "../../../../../../providers/homeContext";
import { useContext } from "react";
import { SelectDivStyle2 } from "../style";

export default function Cor() {
  const { handleFilterValueSelect } = useContext(HomeContext);

  return (
    <div>
      <h2>Cor</h2>
      <SelectDivStyle2>
        <p onClick={() => handleFilterValueSelect("color", "blue")}>Azul</p>
        <p onClick={() => handleFilterValueSelect("color", "white")}>Branco</p>
        <p onClick={() => handleFilterValueSelect("color", "grey")}>Cinza</p>
        <p onClick={() => handleFilterValueSelect("color", "silver")}>Prata</p>
        <p onClick={() => handleFilterValueSelect("color", "black")}>Preto</p>
        <p onClick={() => handleFilterValueSelect("color", "green")}>Verde</p>
      </SelectDivStyle2>
    </div>
  );
}

import { HomeContext } from "../../../../../../providers/homeContext";
import { useContext, useState } from "react";
import { FiltterButtonStyle } from "../../../../../../styles/buttons";
import { SelectDivStyle } from "../style";

export default function Km() {
  const { handleFilterValueSelect } = useContext(HomeContext);
  const [isSelected1, setIsSelected1] = useState(false);
  const [isSelected2, setIsSelected2] = useState(false);

  const handleButton1Click = () => {
    setIsSelected1(!isSelected1);
    setIsSelected2(false);
  };
  const handleButton2Click = () => {
    setIsSelected2(!isSelected2);
    setIsSelected1(false);
  };

  return (
    <div>
      <h2>Km</h2>
      <SelectDivStyle>
        <FiltterButtonStyle
          className={isSelected1 ? "selected" : ""}
          onClick={() => {
            handleButton1Click();
            handleFilterValueSelect("km", "minimum");
          }}
        >
          Mínima
        </FiltterButtonStyle>
        <FiltterButtonStyle
          className={isSelected2 ? "selected" : ""}
          onClick={() => {
            handleButton2Click();
            handleFilterValueSelect("km", "maximum");
          }}
        >
          Máxima
        </FiltterButtonStyle>
      </SelectDivStyle>
    </div>
  );
}

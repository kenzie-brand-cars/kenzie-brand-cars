import { HomeContext } from "../../../../../../providers/homeContext";
import { useContext } from "react";
import { SelectDivStyle2 } from "../style";

export default function Modelo() {
  const { handleFilterValueSelect } = useContext(HomeContext);

  return (
    <div>
      <h2>Modelo</h2>
      <SelectDivStyle2>
        <p onClick={() => handleFilterValueSelect("model", "civic")}>Civic</p>
        <p onClick={() => handleFilterValueSelect("model", "corolla")}>
          Corolla
        </p>
        <p onClick={() => handleFilterValueSelect("model", "cruze")}>Cruze</p>
        <p onClick={() => handleFilterValueSelect("model", "fit")}>Fit</p>
        <p onClick={() => handleFilterValueSelect("model", "gol")}>Gol</p>
        <p onClick={() => handleFilterValueSelect("model", "ka")}>Ka</p>
        <p onClick={() => handleFilterValueSelect("model", "onix")}>Onix</p>
        <p onClick={() => handleFilterValueSelect("model", "porsche")}>
          Porsche 718
        </p>
      </SelectDivStyle2>
    </div>
  );
}

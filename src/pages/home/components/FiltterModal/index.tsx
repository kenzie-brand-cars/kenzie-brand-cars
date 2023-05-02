import { useContext } from "react";
import Sidebar from "../Main/Sidebar";
import { FilterLabelStyle, FilterDivStyle } from "./style";
import { HomeContext } from "../../../../providers/homeContext";

export default function FiltterModal() {
  const { setModalFiltter } = useContext(HomeContext);
  const handleButtonClick = () => {
    setModalFiltter(false);
  };
  return (
    <FilterDivStyle>
      <FilterLabelStyle>
        <span>Filtro</span>
        <div onClick={() => handleButtonClick()}>X</div>
      </FilterLabelStyle>
      <Sidebar />
    </FilterDivStyle>
  );
}

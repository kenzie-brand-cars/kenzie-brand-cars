import Marca from "./SidebarFilters/Marca";
import Modelo from "./SidebarFilters/Modelo";
import Cor from "./SidebarFilters/Cor";
import Ano from "./SidebarFilters/Ano";
import Combustivel from "./SidebarFilters/Combustivel";
import Km from "./SidebarFilters/Km";
import Preco from "./SidebarFilters/Preco";
import { SidebarStyle } from "./style";
import { CleanFiltterButtonStyle } from "../../../../../styles/buttons";
import { useMediaQuery } from "react-responsive";
import { useContext } from "react";
import { HomeContext } from "../../../../../providers/homeContext";

export default function Sidebar() {
  const { setModalFiltter } = useContext(HomeContext);
  const mobileResoluction = useMediaQuery({ maxWidth: 761 });
  const handleButtonClick = () => {
    setModalFiltter(false);
  };
  return (
    <SidebarStyle>
      <Marca />
      <Modelo />
      <Cor />
      <Ano />
      <Combustivel />
      <Km />
      <Preco />
      {!mobileResoluction ? (
        <CleanFiltterButtonStyle>Limpar Filtros</CleanFiltterButtonStyle>
      ) : (
        <div className="align_div_class">
          <CleanFiltterButtonStyle onClick={() => handleButtonClick()}>
            Ver Anúncios
          </CleanFiltterButtonStyle>
        </div>
      )}
    </SidebarStyle>
  );
}

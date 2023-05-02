import { Card } from "../../Card";
import { CardListStyle, CardsSection } from "./style";
import { useContext, useEffect, useState } from "react";
import { HomeContext } from "../../../../../providers/homeContext";
import Pagination from "../../Pagination";
import { ICard } from "../../../../../providers/homeContext";
import { ShowFiltterButtonStyle } from "../../../../../styles/buttons";

export default function CardsList() {
  const { pagesItemsList, axiosFilterRequest, setModalFiltter } =
    useContext(HomeContext);

  const handleButtonClick = () => {
    setModalFiltter(true);
  };

  useEffect(() => {
    axiosFilterRequest();
  }, []);
  return (
    <CardsSection>
      <CardListStyle id="footer-anchor">
        {pagesItemsList ? (
          pagesItemsList.map((dataIten: ICard) => (
            <Card item={dataIten} key={dataIten.id} />
          ))
        ) : (
          <></>
        )}
      </CardListStyle>
      <div className="mobile_filter_button">
        <ShowFiltterButtonStyle onClick={() => handleButtonClick()}>
          <span>Filtros</span>
        </ShowFiltterButtonStyle>
      </div>

      <Pagination />
    </CardsSection>
  );
}

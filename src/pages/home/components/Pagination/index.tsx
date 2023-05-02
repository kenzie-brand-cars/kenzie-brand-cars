import { useContext, useState } from "react";
import { HomeContext } from "../../../../providers/homeContext";
import { PaginationDivStyle } from "./style";

export default function Pagination() {
  const { currentPage, totalPages } = useContext(HomeContext);

  return (
    <PaginationDivStyle>
      {currentPage !== 1 ? <ButtonBackward /> : <></>}
      <span>
        {currentPage} de {totalPages}
      </span>
      {currentPage !== totalPages ? <ButtonForward /> : <></>}
    </PaginationDivStyle>
  );
}

function ButtonBackward() {
  const { handlePageClick, currentPage } = useContext(HomeContext);
  return (
    <button
      onClick={(event) => {
        handlePageClick(currentPage - 1);
      }}
    >
      Anterior
    </button>
  );
}

function ButtonForward() {
  const { handlePageClick, currentPage, totalPages } = useContext(HomeContext);
  return (
    <button
      onClick={(event) => {
        handlePageClick(currentPage + 1);
      }}
    >
      Seguinte
    </button>
  );
}

import Sidebar from "./Sidebar";
import CardsList from "./CardsList";
import { MainStyle } from "./style";
import { useMediaQuery } from "react-responsive";
import { useContext, useEffect } from "react";
import { HomeContext } from "../../../../providers/homeContext";

export default function Main() {
  const { setModalFiltter } = useContext(HomeContext);
  const mobileResoluction = useMediaQuery({ maxWidth: 761 });
  function resetMobile() {
    if (mobileResoluction) {
      setModalFiltter(false);
    }
  }
  useEffect(() => {
    resetMobile();
  }, [mobileResoluction]);
  return (
    <MainStyle>
      {!mobileResoluction && <Sidebar />}
      <CardsList />
    </MainStyle>
  );
}

import HeaderHome from "./components/Header";
import { Navbar } from "../../components/navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useContext, useEffect } from "react";
import { HomeContext } from "../../providers/homeContext";
import FiltterModal from "./components/FiltterModal";
import { useMediaQuery } from "react-responsive";
import { AuthContext } from "../../context/AuthContext";
import Modal from "../../components/navbar/components/modal_profile";

export default function HomePage() {
  const { userAuthenticated, modalState, setModalState} = useContext(AuthContext)
  const { modalFiltter, setModalFiltter } = useContext(HomeContext);
  const mobileResoluction = useMediaQuery({ minWidth: 760 });
  function resetMobile() {
    if (mobileResoluction) {
      setModalFiltter(false);
    }
  }
  useEffect(() => {
    resetMobile();
  }, [mobileResoluction]);

  return (
    <>
      <Navbar setModalState={setModalState} userAuthenticated={userAuthenticated}/>
      {modalState ? 
            <>
                <Modal/> 
            </>
            : 
            <></>}
      {modalFiltter ? (
        <FiltterModal />
      ) : (
        <>
          <HeaderHome />
          <Main />
          <Footer />
        </>
      )}
    </>
  );
}

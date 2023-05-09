import { createContext, useState, useEffect } from "react";
import {toast} from 'react-toastify'
import { data } from '../mockeData'

interface HomeProviderPropsInterface {
  children: React.ReactNode;
}
export interface ICard {
  id: number;
  description: string;
  year: number;
  km: number;
  price: number;
  image: string;
  model: string;
  mark: string;
  owner: string;
}
interface IFiltterData {
  mark: string | null;
  model: string | null;
  fuel: string | null;
  color: string | null;
  year: number | null;
  price: number | null;
  km: number | null;
}

type IHomeContextTypes = {
  modalFiltterClassProperty: string;
  setFiltterClassProperty: React.Dispatch<React.SetStateAction<string>>;
  modalFiltter: boolean;
  setModalFiltter: React.Dispatch<React.SetStateAction<boolean>>;
  setCardsList: React.Dispatch<React.SetStateAction<ICard[]>>;
  setPagesItemsList: React.Dispatch<React.SetStateAction<ICard[]>>;
  pagesItemsList: ICard[];
  cardsList: ICard[];
  currentPage: number;
  totalPages: number;
  handleFilterValueSelect: (
    key: keyof IFiltterData,
    value: string | null
  ) => void;
  axiosFilterRequest: () => void;
  handlePageClick: (pageNumber: number) => void;
  notifySucces: (message: string) => void;
  notifyError: (message: string) => void;
};

export const HomeContext = createContext<IHomeContextTypes>({
  modalFiltterClassProperty: "none",
  setFiltterClassProperty: () => {},
  modalFiltter: false,
  setModalFiltter: () => {},
  currentPage: 1,
  totalPages: 0,
  pagesItemsList: [],
  cardsList: [],
  setCardsList: () => {},
  handleFilterValueSelect: () => {},
  axiosFilterRequest: () => {},
  handlePageClick: () => {},
  setPagesItemsList: () => {},
  notifySucces: () => {},
  notifyError: () => {},
});

export default function HomeProvider({ children }: HomeProviderPropsInterface) {
  const notifySucces = (message: string) => toast.success(message);
  const notifyError = (message: string) => toast.error(message);

  const [modalFiltterClassProperty, setFiltterClassProperty] = useState("none");
  const [modalFiltter, setModalFiltter] = useState(false);

  const [pagesItemsList, setPagesItemsList] = useState<ICard[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);

  const [cardsList, setCardsList] = useState<ICard[]>([]);
  const [filterData, setFilterData] = useState<IFiltterData>({
    mark: null,
    model: null,
    fuel: null,
    color: null,
    year: null,
    price: null,
    km: null,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPagesItemsList(cardsList.slice(startIndex, endIndex));
    setTotalPages(Math.ceil(cardsList.length / itemsPerPage));
  };

  function handleFilterValueSelect(
    key: keyof IFiltterData,
    value: string | null
  ) {
    if (filterData[key] === value) {
      setFilterData((filterData) => ({
        ...filterData,
        [key]: null,
      }));
    } else {
      setFilterData((filterData) => ({
        ...filterData,
        [key]: value,
      }));
    }
    axiosFilterRequest();
  }

  useEffect(() => {
    axiosFilterRequest();
  }, [filterData]);

  function axiosFilterRequest() {
    const filteredParams = Object.entries(filterData)
      .filter(
        ([key, value]) => value !== null && value !== undefined && value !== ""
      )
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");
    const url = "http://localhost:3001/" + filteredParams;
    console.log(url);
    console.log("chamar o axios");
    setCardsList(data);
    const startIndex = 1;
    const endIndex = startIndex + itemsPerPage;
    setCurrentPage(1);
    setPagesItemsList(data.slice(0, endIndex - 1));
    setTotalPages(Math.ceil(data.length / itemsPerPage));
  }

  return (
    <HomeContext.Provider
      value={{
        modalFiltter,
        setModalFiltter,
        modalFiltterClassProperty,
        setFiltterClassProperty,
        notifySucces,
        notifyError,
        handleFilterValueSelect,
        setCardsList,
        cardsList,
        currentPage,
        totalPages,
        handlePageClick,
        pagesItemsList,
        setPagesItemsList,
        axiosFilterRequest,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}

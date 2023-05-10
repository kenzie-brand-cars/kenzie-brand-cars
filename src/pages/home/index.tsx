import { Container } from "../../components/container"
import { StyledHomePage } from "./style"
import photoBanner from '../../assets/car-banner.png'
import { Filter } from "./components/filter"
import { useContext, useEffect, useState } from "react"
import { IFiltersResponse, useRequests } from "../../hooks/RequestsHooks"
import { AnnounceCard, IAnnouncesReponse } from "./components/announce_card"
import { AnnouncesContext, AnnouncesProvider } from "../../context/AnnouncesContext"


export const HomePage = () => {
    const { getFilterParams, getAllAnnounces, getFilterAnnounces } = useRequests()
    const [filters, setFilters] = useState<IFiltersResponse>({} as IFiltersResponse)
    // const [announces, setAnnounces] = useState<IAnnouncesReponse[]>([])
    const {announces, setAnnounces, trigger} = useContext(AnnouncesContext)
    //Terei quee fazer outro useEffect aqui para trabalhar em conjuto com o contexto
    useEffect(() => {
        const handleGetFIlter = async () => {
            const response = await getFilterParams()
            console.log(response)
            if (response) {
                setFilters(response)
            }
        }
        handleGetFIlter()
    }, [])
    useEffect(()=> {
        const handleGetAllAnnounces = async () => {
            const response = await getAllAnnounces()
            if (response) {
                setAnnounces(response)
            }
            console.log(response)
        }
        handleGetAllAnnounces()
    },[])
    return (
            <Container>
                <StyledHomePage>
                    <div className="banner">
                        <img src={photoBanner} alt="" />
                        <div className="filter">
                            <h2>Motors Shop</h2>
                            <p>A melhor plataforma de anúncios de carros do pais</p>
                        </div>
                    </div>
                    <div className="dashboard">
                        <Filter
                            colorFilters={filters?.colorFilters}
                            fuelFilters={filters?.fuelFilters}
                            markFilters={filters?.markFilters}
                            modelFilters={filters?.modelFilters}
                            yearFilters={filters?.yearFilters}
                        />
                        <div className="display-announces">
                            {announces.map((announce) => (
                                <AnnounceCard announce={announce} className="card" />
                            ))}
                        </div>
                    </div>
                </StyledHomePage>
            </Container>
    )
}
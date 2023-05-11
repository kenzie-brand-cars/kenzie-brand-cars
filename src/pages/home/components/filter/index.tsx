import { yupResolver } from "@hookform/resolvers/yup";
import { IFiltersResponse, useRequests } from "../../../../hooks/RequestsHooks"
import { FormFilter, schema } from "../../../../schemas/filter_schema";
import { StyledFilter } from "./style"
import { useForm } from "react-hook-form";
import { AnnouncesContext } from "../../../../context/AnnouncesContext";
import { useContext } from "react";
import { IAnnouncesReponse } from "../announce_card";
import { FilterContextMobile } from "../../../../context/FilterContext";
import { NavbarContext } from "../../../../context/NavBarContext";





export const Filter = ({...filters} :IFiltersResponse) => {
    const {getFilterAnnounces} = useRequests()
    const {announces, setAnnounces, trigger} = useContext(AnnouncesContext)
    const {displayFilter, setDisplayFilter} = useContext(FilterContextMobile)
    const {showNavbarMobile, setShowNavbarMobile} = useContext(NavbarContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormFilter>({
        resolver: yupResolver(schema)
      });
      const handleSubmitFilter = async (data: FormFilter) =>{
        const response = await getFilterAnnounces(data)
        if(response){
            setAnnounces(response)
        }
        setDisplayFilter(!displayFilter)
        setShowNavbarMobile(!showNavbarMobile)
      }
      const handleResetFilters = () =>{
          reset()
      }
    return (
        <StyledFilter display={displayFilter}>
            <form onSubmit={handleSubmit(handleSubmitFilter)} >
            <div className="mark">
                <h2>Marca</h2>
                <ul>
                    {filters.markFilters?.map((mark)=> (
                        <label key={mark.name}>
                            <input type="radio"  {...register("mark")} value={mark.name}/><span>{mark.name}</span>
                        </label>
                    ))}
                </ul>
            </div>
            <div className="model">
                <h2>Modelo</h2>
                <ul>
                    {filters.modelFilters?.map((model)=> (
                        <label key={model.name}>
                            <input type="radio" {...register("model")} value={model.name}/><span>{model.name}</span>
                        </label>
                    ))}
                </ul>
            </div>
            <div className="color">
                <h2>Cor</h2>
                <ul>
                    {filters.colorFilters?.map((color)=> (
                        <label key={color.name}>
                            <input type="radio" {...register("color")} value={color.name}/><span>{color.name}</span>
                        </label>
                    ))}
                </ul>
            </div>
            <div className="year">
                <h2>Ano</h2>
                <ul>
                    {filters.yearFilters?.map((year)=> (
                        <label key={year.year}>
                            <input type="radio" {...register("year")} value={year.year}/><span>{year.year}</span>
                        </label>
                    ))}
                </ul>
            </div>
            <div className="fuel">
                <h2>Combustível</h2>
                <ul>
                    {filters.fuelFilters?.map((fuel)=> (
                        <label key={fuel.type}>
                            <input type="radio" {...register("fuel")} value={fuel.type}/><span>{fuel.type}</span>
                        </label>
                    ))}
                </ul>
            </div>
            <button type="submit" className="btn-filter">Aplicar Filtros</button>
            <button onClick={handleResetFilters} className="btn-filter">Limpar Filtros</button>
            </form>
        </StyledFilter>
    )
}
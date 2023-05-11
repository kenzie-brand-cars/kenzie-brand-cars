import {GrFormClose} from 'react-icons/gr'
import { ModalContext } from '../../context/ModalContext'
import { useContext } from 'react'
import { EditAnnounceForm, schema } from '../../schemas/edit_announce_schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { useRequests } from '../../hooks/RequestsHooks';
import { AnnouncesContext } from '../../context/AnnouncesContext';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';


export const FormEditAnnounceModal = () => {
    const {updateAnnounce, deleteAnnounce} = useRequests()
    const {announceChoseId} = useContext(AnnouncesContext)
    const {setTrigger, trigger} = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm<EditAnnounceForm>({
        resolver: yupResolver(schema),
        shouldUnregister: true
      });
    const {setDisplay} = useContext(ModalContext)
      const handleSubmitEditAnnounce = async (data: EditAnnounceForm) =>{
        await updateAnnounce(data, announceChoseId)
       toast.success('Anuncio atualizado com sucesso')
        setDisplay(false)
        setTrigger(!trigger)
      }
      const handleDeleteAnnounce = async () =>{
       await deleteAnnounce(announceChoseId)
       toast.success('Anuncio excluído com sucesso')
       setDisplay(false)
        setTrigger(!trigger)
      }
    return (
        <form onSubmit={handleSubmit(handleSubmitEditAnnounce)}>
            <span onClick={()=> setDisplay(false)} className="btn-close"><GrFormClose size={30}/></span>
            <label>
                <span>Marca</span>
                <input type="text" placeholder="Mercedez Benz" {...register("mark")}/>
            </label>
            <label>
                <span>Modelo</span>
                <input type="text" placeholder="A 200 CGI ADVANCE SEDAN" {...register("model")}/>
            </label>
            <div className="double-inputs">
                <label>
                    <span>Ano</span>
                    <input type="text" placeholder="2018" {...register("year")} />
                </label>
                <label>
                    <span>Combustível</span>
                    <input type="text" placeholder="Gasolina" {...register("fuel")} />
                </label>
            </div>
            <div className="double-inputs">
                <label>
                    <span>Quilometragem</span>
                    <input type="text" placeholder="30.000" {...register("km")} />
                </label>
                <label>
                    <span>Cor</span>
                    <input type="text" placeholder="Branco" {...register("color")} />
                </label>
            </div>
            <div className="double-inputs">
                <label>
                    <span>Preço tabela FIPE</span>
                    <input type="text" placeholder="R$ 48.000,00" {...register("price_fipe")} />
                </label>
                <label>
                    <span>Preço</span>
                    <input type="text" placeholder="R$ 40.000,00" {...register("price")} />
                </label>
            </div>
            <label>
                <span>Descrição</span>
                <input type="text" placeholder="GasoLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500slina" {...register("description")}/>
            </label>
            <label>
                <span>Publicado</span>
                <div className="double-inputs">
                    <input type="radio" className="inputs-radio-styled published" value="yes" {...register("publishedAt")}/>
                    <input type="radio" className="inputs-radio-styled unpublished" value="no" {...register("publishedAt")}/>
                </div>
            </label>
            <label>
                <span>Imagem de capa</span>
                <input type="text" placeholder="https://image.com" />
            </label>
            <label>
                <span>1º Imagem de galeria</span>
                <input type="text" placeholder="https://image.com" />
            </label>
            <label>
                <span>2º Imagem de galeria</span>
                <input type="text" placeholder="https://image.com" />
            </label>
            <div className="btn-panel column">
                <button type="submit" className="confirm">Salvar alterações</button>
                <button onClick={handleDeleteAnnounce} type="button" className="exclude">Excluir anúncio</button>
            </div>
        </form>
    )
}

import { useContext } from 'react'
import {GrFormClose} from 'react-icons/gr'
import { ModalContext } from '../../context/ModalContext'
import { EditUserFrom, schema } from '../../schemas/edit_user_schema'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRequests } from '../../hooks/RequestsHooks'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export const FormModalUser = () => {
    const {currentUser , setCurrentUser,setTrigger, trigger} = useContext(AuthContext)
    const {setDisplay} = useContext(ModalContext)
    const {editUserRequest} = useRequests()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<EditUserFrom>({
        resolver: yupResolver(schema),
        shouldUnregister: true
      });
      const handleEditUserSubmit = async (data: EditUserFrom) =>{
          const userUpdated = await editUserRequest(data, currentUser!.id)
          localStorage.setItem('kenzie-brand-cars:current-user', JSON.stringify(userUpdated))
          setTrigger(!trigger)
      }
      const handleLogout = () => {
          localStorage.clear()
          window.location.reload()
      }
    return (
        <form onSubmit={handleSubmit(handleEditUserSubmit)}>
            <span onClick={()=> setDisplay(false)} className="btn-close"><GrFormClose size={30}/></span>
            <label>
                <span>Nome</span>
                <input type="text" placeholder="Samuel Leão" {...register("name")}/>
            </label>
            <label>
                <span>Email</span>
                <input type="text" placeholder="samuelleao@mail.com" {...register("email")}/>
            </label>
            <label>
                <span>CPF</span>
                <input type="text" placeholder="(084) 900.880.090-00" {...register("cpf")}/>
            </label>
            <label>
                <span>Celular</span>
                <input type="text" placeholder="(084) 90909-0909" {...register("phone")}/>
            </label>
            <label>
                <span>Data de nascimento</span>
                <input type="date" {...register("birthDate")}/>
            </label>
            <label>
                <span>Descrição</span>
                <input type="text" placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ad inventore cum doloremque sint laborum, repellat, rem alias placeat eius animi dolores magnam. Eius officia in nihil sint. Quibusdam, nisi." {...register("description")}/>
            </label>
            <div className="btn-panel">
                <button onClick={()=> handleLogout()} type="button" className="logout">Logout</button>
                <button onClick={()=> console.log('Clickou')} type="button" className="exclude">Excluir Conta</button>
                <button type='submit' className="confirm">Editar Dados</button>
            </div>
        </form>
    )
}
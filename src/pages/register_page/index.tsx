import { useForm } from "react-hook-form"
import { Container } from "../../components/container"
import { Navbar } from "../../components/navbar"
import { useRequests } from "../../hooks/RequestsHooks"
import { StyledRegisterPage } from "./style"
import { FormDataRegisterUser, schema } from "../../schemas/register_user_schema"
import { yupResolver } from '@hookform/resolvers/yup';
import { redirect, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { ModalContext } from "../../context/ModalContext"
import { toast } from "react-toastify"



export const RegisterPage = () => {
    const navigate = useNavigate()
    const {registerUserRequest} = useRequests()
    const {setModalType, setDisplay} = useContext(ModalContext)
    const { register, handleSubmit, formState: { errors } } = useForm<FormDataRegisterUser>({
        resolver: yupResolver(schema)
      });
    const handleRegister = async (data:FormDataRegisterUser ) =>{
        try {
            await registerUserRequest(data)
            navigate("/")
            toast.success('Conta criada com sucesso', {position: "bottom-right"})
        } catch (error) {
            toast.error('Ocorreu um erro ao tentar cirar sua conta tente novamente mais tarde.', {position: "bottom-right"})
        }

    }

    return (
        <Container>
            <StyledRegisterPage>
                <h2>Cadastro</h2>
                <p>Informações pessoais</p>
                <form className="" onSubmit={handleSubmit(handleRegister)}>
                    <label>
                        <p>Nome:</p>
                        <input type="text" placeholder="Ex: Samuel Leão" {...register('name')}/>
                        {errors.name && <span>{errors.name.message}</span>}
                    </label>
                    <label>
                        <p>Email:</p>
                        <input type="text" placeholder="Ex: samuel@kenzie.com" {...register('email')} />
                        {errors.email && <span>{errors.email.message}</span>}
                    </label>
                    <label>
                        <p>CPF:</p>
                        <input type="text" placeholder="Ex: 000.000.000-00" {...register('cpf')}/>
                        {errors.cpf && <span>{errors.cpf.message}</span>}
                    </label>
                    <label>
                        <p>Celular:</p>
                        <input type="text" placeholder="Ex: (DDD) 90000-0000" {...register('phone')}/>
                        {errors.phone && <span>{errors.phone.message}</span>}

                    </label>
                    <label>
                        <p>Data de nascimento:</p>
                        <input type="date" placeholder="00/00/00" {...register('birthDate')}/>
                        {errors.birthDate && <span>{errors.birthDate.message}</span>}
                    </label>
                    <label>
                        <p>Descrição:</p>
                        <input type="text" placeholder="Digitar descrição" {...register('description')}/>
                        {errors.description && <span>{errors.description.message}</span>}
                    </label>
                    <p>Informações de endereço</p>
                    <label>
                        <p>CEP:</p>
                        <input type="text" placeholder="00000.000" {...register('address.zipCode')}/>
                        {errors.address?.zipCode && <span>{errors.address.zipCode.message}</span>}

                    </label>
                    <div className="double-input">
                        <label>
                            <p>Estado</p>
                            <input type="text" placeholder="Digitar Estado" {...register('address.state')}/>
                        {errors.address?.state && <span>{errors.address.state.message}</span>}

                        </label>
                        <label>
                            <p>Cidade</p>
                            <input type="text" placeholder="Digitar Cidade" {...register('address.city')}/>
                        {errors.address?.city && <span>{errors.address.city.message}</span>}

                        </label>
                    </div>
                    <label>
                        <p>Rua</p>
                        <input type="text" placeholder="Digitar o nome da sua rua" {...register('address.street')}/>
                        {errors.address?.street && <span>{errors.address.street.message}</span>}

                    </label>
                    <label>
                        <p>Bairro</p>
                        <input type="text" placeholder="Digitar o nome da sua rua" {...register('address.neighborhood')}/>
                        {errors.address?.neighborhood && <span>{errors.address.neighborhood.message}</span>}

                    </label>
                    <div className="double-input">
                        <label>
                            <p>Número</p>
                            <input type="text" placeholder="Digitar Estado" {...register('address.number')}/>
                        {/* {errors.address?.number && <span>{errors.address.number.message}</span>} */}

                        </label>
                        <label>
                            <p>Complemento</p>
                            <input type="text" placeholder="Digitar Cidade" {...register('address.complement')}/>
                        {errors.address?.complement && <span>{errors.address.complement.message}</span>}

                        </label>
                    </div>
                    <p>Tipo de conta</p>
                    <div className="container-btn-account">
                        <input className="inputs-radio-styled buyer" type="radio" value="buyer" {...register('type')}/>
                        <input className="inputs-radio-styled announcer" type="radio" value="seller" {...register('type')}/>
                    </div>
                    <label>
                        <p>Senha</p>
                        <input type="password" placeholder="Digitar Senha" {...register('password')}/>
                        {errors.password && <span>{errors.password.message}</span>}
                    </label>
                    <label>
                        <p>Confirmar Senha</p>
                        <input type="password" placeholder="Digitar Senha" {...register('confirmPassword')}/>
                        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

                    </label>
                    <button type="submit" className="btn-submit">Finalizar Cadastro</button>
                </form>
            </StyledRegisterPage>
        </Container>
    )
}
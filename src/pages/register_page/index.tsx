import { useForm } from "react-hook-form"
import { Container } from "../../components/container"
import { Navbar } from "../../components/navbar"
import { useRequests } from "../../hooks/RequestsHooks"
import { StyledRegisterPage } from "./style"
import { FormDataRegisterUser, schema } from "../../schemas/register_user_schema"
import { yupResolver } from '@hookform/resolvers/yup';
import { redirect, useNavigate } from "react-router-dom"



export const RegisterPage = () => {
    const navigate = useNavigate()
    const {registerUserRequest} = useRequests()
    const { register, handleSubmit, formState: { errors } } = useForm<FormDataRegisterUser>({
        resolver: yupResolver(schema)
      });
    const handleRegister = (data:FormDataRegisterUser ) =>{
        console.log(data)
        registerUserRequest(data)
        navigate('')
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
                    </label>
                    <label>
                        <p>Email:</p>
                        <input type="text" placeholder="Ex: samuel@kenzie.com" {...register('email')} />
                    </label>
                    <label>
                        <p>CPF:</p>
                        <input type="text" placeholder="Ex: 000.000.000-00" {...register('cpf')}/>
                    </label>
                    <label>
                        <p>Celular:</p>
                        <input type="text" placeholder="Ex: (DDD) 90000-0000" {...register('phone')}/>
                    </label>
                    <label>
                        <p>Data de nascimento:</p>
                        <input type="date" placeholder="00/00/00" {...register('birthDate')}/>
                    </label>
                    <p>{errors.birthDate?.message}</p>
                    <label>
                        <p>Descrição:</p>
                        <input type="text" placeholder="Digitar descrição" {...register('description')}/>
                    </label>
                    <p>Informações de endereço</p>
                    <label>
                        <p>CEP:</p>
                        <input type="text" placeholder="00000.000" {...register('address.zipCode')}/>
                    </label>
                    <div className="double-input">
                        <label>
                            <p>Estado</p>
                            <input type="text" placeholder="Digitar Estado" {...register('address.state')}/>
                        </label>
                        <label>
                            <p>Cidade</p>
                            <input type="text" placeholder="Digitar Cidade" {...register('address.city')}/>
                        </label>
                    </div>
                    <label>
                        <p>Rua</p>
                        <input type="text" placeholder="Digitar o nome da sua rua" {...register('address.street')}/>
                    </label>
                    <label>
                        <p>Bairro</p>
                        <input type="text" placeholder="Digitar o nome da sua rua" {...register('address.neighborhood')}/>
                    </label>
                    <div className="double-input">
                        <label>
                            <p>Número</p>
                            <input type="text" placeholder="Digitar Estado" {...register('address.number')}/>
                        </label>
                        <label>
                            <p>Complemento</p>
                            <input type="text" placeholder="Digitar Cidade" {...register('address.complement')}/>
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
                    </label>
                    <label>
                        <p>Confirmar Senha</p>
                        <input type="password" placeholder="Digitar Senha" {...register('confirmPassword')}/>
                    </label>
                    <button type="submit" className="btn-submit">Finalizar Cadastro</button>
                </form>
            </StyledRegisterPage>
        </Container>
    )
}
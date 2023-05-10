import { StyledLoginContent } from './style'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useRequests } from '../../../../hooks/RequestsHooks'
import { FormDataLoginUser, schema } from '../../../../schemas/login_user_schema'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom';

export default function LoginContent() {
  const { loginUserRequest } = useRequests()
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormDataLoginUser>({
    resolver: yupResolver(schema)
  });

  const handleLogin = async (data: FormDataLoginUser) =>{
    console.log(data)
    await loginUserRequest(data)
    navigate('/home')
    toast.success('Login feito com sucesso',{
      position: 'bottom-right'
    })
  }

  const navigate = useNavigate()
  return (
    <StyledLoginContent>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <label>Usuário:</label>
        <input type="text" id="username" placeholder="Digite seu usuário" {...register('email')}/>

        <label>Senha:</label>
        <input type="password" id="password" placeholder="Digite sua senha" {...register('password')}/>

        <Link to="/user/reset_password">Esqueci minha senha</Link>

        <button className='submit_button' type="submit">Entrar</button>
        <p className='account_message'>Ainda não possui conta?</p>
        <button className='register_button' type="button" onClick={() => navigate('/register')}>Cadastrar</button>
      </form>
    </StyledLoginContent>
  )
}

import React from 'react'
import { StyledHeaderLogin } from './style'

export default function Header_Login() {
  return (
    <StyledHeaderLogin>
        <img className='logo_header' src="https://cdn.discordapp.com/attachments/733520580355293286/1098635263250538719/Motors_shop.png" alt="" />
        <img className='burguer_icon' src="https://cdn-icons-png.flaticon.com/512/6499/6499731.png" alt="" />
        <div className='login_desktop'>
          <p>Fazer Login</p>
          <button>Cadastrar</button>
        </div>
    </StyledHeaderLogin>
  )
}

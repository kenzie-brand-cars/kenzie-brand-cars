import React, { useState } from 'react';
import { StyledFormDiv,StyledBackgroundDiv } from './style';

export default function Modal() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [description, setDescription] = useState('');
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log({ name, email, cpf, phone, birthdate, description });
    };

  return (
    <>
        <StyledBackgroundDiv>
        </StyledBackgroundDiv>
        <StyledFormDiv>
                <h1>Editar Perfil</h1>
                <p className='personal_info'>Informações pessoais:</p>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nome:
                        <input placeholder="Exemplo: João Da Silva" type="text" value={name} onChange={(event) => setName(event.target.value)} />
                    </label>
                    <label>
                        Email:
                        <input placeholder="samuel@kenzie.com.br" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </label>
                    <label>
                        CPF:
                        <input placeholder="XXXXXXXXX-XX" type="text" value={cpf} onChange={(event) => setCpf(event.target.value)} />
                    </label>
                    <label>
                        Celular:
                        <input placeholder="(XX) XXXXXXXX" type="text" value={phone} onChange={(event) => setPhone(event.target.value)} />
                    </label>
                    <label>
                        Data de Nascimento:
                        <input placeholder="Ex: 10/03/1984" type="date" value={birthdate} onChange={(event) => setBirthdate(event.target.value)} />
                    </label>
                    <label>
                        Descrição:
                        <textarea placeholder="Descrição." value={description} onChange={(event) => setDescription(event.target.value)} />
                    </label>
                    <div className='footer_btns'>
                        <button className="cancel_btn">Cancelar</button>
                        <button className="delete_profile_btn">Excluir Perfil</button>
                        <button type='submit' className="save_profile_btn">Salvar alterações</button>
                    </div>
                </form>
        </StyledFormDiv>
    </>
  )
}

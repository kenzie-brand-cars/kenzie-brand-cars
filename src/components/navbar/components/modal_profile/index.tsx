import React, { useState, useContext } from 'react';
import { StyledFormDiv,StyledBackgroundDiv } from './style';
import axios from 'axios';
import { AuthContext } from '../../../../context/AuthContext';
import api from '../../../../service/http';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export default function Modal() {
    const [formName, setName] = useState('');
    const [formEmail, setEmail] = useState('');
    const [formPassword, setPassword] = useState('');
    const [formCpf, setCpf] = useState('');
    const [formPhone, setPhone] = useState('');
    const [formBirthdate, setBirthdate] = useState('');
    const [formDescription, setDescription] = useState('');
    const [formStreet, setStreet] = useState('');
    const [formNumber, setNumber] = useState('');
    const [formComplement, setComplement] = useState('');
    const [formNeighborhood, setNeighborhood] = useState('');
    const [formCity, setCity] = useState('');
    const [formState, setState] = useState('');
    const [formZipCode, setZipCode] = useState('');
    const {currentUser} = useContext(AuthContext);
    const {setModalState} = useContext(AuthContext)
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const userEditData = {
            name: formName,
            email: formEmail,
            password: formPassword,
            cpf: formCpf,
            phone: formPhone,
            birthDate: formBirthdate,
            description: formDescription,
            type: "buyer",
            admin: "false",
            address:
              {
                street: formStreet,
                number: formNumber,
                complement: formComplement,
                neighborhood: formNeighborhood,
                city: formCity,
                state: formState,
                zipCode: formZipCode
              }
      }
      try {
        const response = await api.patch(`/user/${currentUser?.id}`, userEditData)
        console.log(response)
        toast.success('Usuário editado com sucesso',{
            position: 'bottom-right'
        })
        setTimeout(() => {
            setModalState(false);
        }, 2000);
        } catch (error) {
            if(error instanceof AxiosError){
                console.log(error.response?.data)
            }else{
                console.log(error)
            }
        }
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
                        <input placeholder="Exemplo: João Da Silva" type="text" value={formName} onChange={(event) => setName(event.target.value)} />
                    </label>
                    <label>
                        Nova senha:
                        <input placeholder="Digite a nova senha." type="password" value={formPassword} onChange={(event) => setPassword(event.target.value)} />
                    </label>
                    <label>
                        Email:
                        <input placeholder="samuel@kenzie.com.br" type="email" value={formEmail} onChange={(event) => setEmail(event.target.value)} />
                    </label>
                    <label>
                        CPF:
                        <input placeholder="XXXXXXXXX-XX" type="text" value={formCpf} onChange={(event) => setCpf(event.target.value)} />
                    </label>
                    <label>
                        Celular:
                        <input placeholder="(XX) XXXXXXXX" type="text" value={formPhone} onChange={(event) => setPhone(event.target.value)} />
                    </label>
                    <label>
                        Data de Nascimento:
                        <input placeholder="Ex: 10/03/1984" type="date" value={formBirthdate} onChange={(event) => setBirthdate(event.target.value)} />
                    </label>
                    <label>
                        Descrição:
                        <textarea placeholder="Descrição." value={formDescription} onChange={(event) => setDescription(event.target.value)} />
                    </label>
                    <label>
                        Street:
                        <input type="text" value={formStreet} onChange={(event) => setStreet(event.target.value)} />
                    </label>
                    <label>
                        Number:
                        <input type="text" value={formNumber} onChange={(event) => setNumber(event.target.value)} />
                    </label>
                    <label>
                        Complement:
                        <input type="text" value={formComplement} onChange={(event) => setComplement(event.target.value)} />
                    </label>
                    <label>
                        Neighborhood:
                        <input type="text" value={formNeighborhood} onChange={(event) => setNeighborhood(event.target.value)} />
                    </label>
                    <label>
                        City:
                        <input type="text" value={formCity} onChange={(event) => setCity(event.target.value)} />
                    </label>
                    <label>
                        State:
                        <input type="text" value={formState} onChange={(event) => setState(event.target.value)} />
                    </label>
                    <label>
                        Zip Code:
                        <input type="text" value={formZipCode} onChange={(event) => setZipCode(event.target.value)} />
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

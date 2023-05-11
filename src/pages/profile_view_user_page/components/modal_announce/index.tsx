import { ChangeEvent, useState } from 'react';
import { StyledFormDiv } from '../../../../components/navbar/components/modal_profile/style';
import { StyledBackgroundDiv } from '../../../../components/navbar/components/modal_profile/style';
import api from '../../../../service/http';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

        interface FormData {
        marca: string;
        modelo: string;
        ano: number;
        combustivel: 'gasolina' | 'alcool' | 'diesel';
        quilometragem: number;
        cor: string;
        preco_tabela_fipe: number;
        preco: number;
        descricao: string;
        imagem_capa: string;
        imagem_galeria_1: string;
        imagem_galeria_2: string;
    }

    interface Props {
        handleClick: () => void;
    }

    const CreateAnnounceModal: React.FC<Props> = ({ handleClick }) => {
        const [formData, setFormData] = useState<FormData>({
            marca: '',
            modelo: '',
            ano: 0,
            combustivel: 'gasolina',
            quilometragem: 0,
            cor: '',
            preco_tabela_fipe: 0,
            preco: 0,
            descricao: '',
            imagem_capa: '',
            imagem_galeria_1: '',
            imagem_galeria_2: '',
        });

        const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
            const { name, value } = e.target;
            setFormData(prevState => ({ ...prevState, [name]: value }));
        };

        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            
            const dataVehicle = {
                year: formData.ano,
                km: formData.quilometragem,
                price_fipe: formData.preco_tabela_fipe,
                price: formData.preco,
                description: formData.descricao,
                image: formData.imagem_capa,
                mark: formData.marca,
                model: formData.modelo,
                fuel: formData.combustivel,
                color:  formData.cor,
                gallery: 
                {
                  images: 
                      [
                    formData.imagem_galeria_1,
                    formData.imagem_galeria_2,
                    formData.imagem_galeria_2,
                  ]
                  }
              }
              try {
                const response = await api.post(`/announce`, dataVehicle)
                
                toast.success('Anúncio criado com sucesso',{
                    position: 'bottom-right'
                })
                } catch (error) {
                    if(error instanceof AxiosError){
                        console.log(error.response?.data)
                    }else{
                        console.log(error)
                    }
                }
                handleClick()
        };
    
      return (
        <>
        <StyledBackgroundDiv>
        </StyledBackgroundDiv>
        <StyledFormDiv>
            <span onClick={handleClick} className='close_icon'>X</span>
            <form onSubmit={handleSubmit}>
            <label htmlFor="marca">Marca:</label>
            <input type="text" id="marca" name="marca" onChange={handleChange} value={formData.marca} />
        
            <label htmlFor="modelo">Modelo:</label>
            <input type="text" id="modelo" name="modelo" onChange={handleChange} value={formData.modelo} />
        
            <label htmlFor="ano">Ano:</label>
            <input type="number" id="ano" name="ano" onChange={handleChange} value={formData.ano} />
        
            <label htmlFor="combustivel">Combustível:</label>
            <select id="combustivel" name="combustivel" onChange={handleChange} value={formData.combustivel}>
                <option value="gasolina">Gasolina</option>
                <option value="alcool">Álcool</option>
                <option value="diesel">Diesel</option>
            </select>
        
            <label htmlFor="quilometragem">Quilometragem:</label>
            <input type="number" id="quilometragem" name="quilometragem" onChange={handleChange} value={formData.quilometragem} />
        
            <label htmlFor="cor">Cor:</label>
            <input type="text" id="cor" name="cor" onChange={handleChange} value={formData.cor} />
        
            <label htmlFor="preco_tabela_fipe">Preço Tabela FIPE:</label>
            <input type="number" id="preco_tabela_fipe" name="preco_tabela_fipe" onChange={handleChange} value={formData.preco_tabela_fipe} />
        
            <label htmlFor="preco">Preço:</label>
            <input type="number" id="preco" name="preco" onChange={handleChange} value={formData.preco} />
        
            <label htmlFor="descricao">Descrição:</label>
            <textarea id="descricao" name="descricao" onChange={handleChange} value={formData.descricao}></textarea>
        
            <label htmlFor="imagem_capa">Imagem da Capa:</label>
            <input type="text" id="imagem_capa" name="imagem_capa" onChange={handleChange} value={formData.imagem_capa} />
        
            <label htmlFor="imagem_galeria_1">1ª Imagem da Galeria:</label>
            <input type="text" id="imagem_galeria_1" name="imagem_galeria_1" onChange={handleChange} value={formData.imagem_galeria_1} />
        
            <label htmlFor="imagem_galeria_2">2ª Imagem da Galeria:</label>
            <input type="text" id="imagem_galeria_2" name="imagem_galeria_2" onChange={handleChange} value={formData.imagem_galeria_2} />
            <div className='btn_div'>
                <button type="submit" className="send_announce_btn" value="Enviar">Enviar</button>
            </div>
            </form>
            </StyledFormDiv>
        </>
      )
    }
    
    export default CreateAnnounceModal;
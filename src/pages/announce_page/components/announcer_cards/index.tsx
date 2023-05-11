import React, {useContext, useEffect, useState} from 'react'
import { ICard } from '../../../../providers/homeContext';
import { StyledAnnouncerCardDiv } from './styled'
import { HomeContext } from '../../../../providers/homeContext';
import { CardAnnounce } from '../../../profile_view_user_page/components/card_announce/card-announce';
import { AuthContext } from '../../../../context/AuthContext';
import api from '../../../../service/http';
import { useParams } from 'react-router-dom';

export default function AnnouncerCards() {
const { axiosFilterRequest, setModalFiltter } = useContext(HomeContext);
const { currentUser, setProfileName, setProfilePage } = useContext(AuthContext)
const [announces, setAnnounces] = useState([]);
const { id } = useParams();

useEffect(() => {
  async function loadAnnounces() {
    try {
      const response = await api.get('/announce');
      const filteredAnnounces = response.data.filter((item: any)=> id === item.owner.id);
      console.log(filteredAnnounces)
      setAnnounces(filteredAnnounces);
      setProfileName(filteredAnnounces[0].owner.name)
      setProfilePage(false)
    } catch (error) {
      console.log(error);
    }
  }
  loadAnnounces();
}, [id]);

  return (
    <StyledAnnouncerCardDiv>
        <h2>Anúncios</h2>
        <ul>
        {announces ? (
          announces.map((cardItem: any) => (
            <CardAnnounce cardItem={cardItem}/>
          ))
        ) : (
          <></>
        )}
        </ul>
        <div className="pagination">
                <p className='page'><span className='selected_page'>1</span> de 2</p>
                <p className="forward">Seguinte</p>
        </div>
    </StyledAnnouncerCardDiv>
  )
}

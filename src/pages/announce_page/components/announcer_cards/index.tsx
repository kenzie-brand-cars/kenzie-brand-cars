import React, {useContext} from 'react'
import { Card } from '../../../home/components/Card'
import { ICard } from '../../../../providers/homeContext';
import { StyledAnnouncerCardDiv } from './styled'
import { HomeContext } from '../../../../providers/homeContext';

export default function AnnouncerCards() {
const { pagesItemsList, axiosFilterRequest, setModalFiltter } = useContext(HomeContext);
  return (
    <StyledAnnouncerCardDiv>
        <h2>Anúncios</h2>
        <ul>
        {pagesItemsList ? (
          pagesItemsList.map((dataIten: ICard) => (
            <Card item={dataIten} key={dataIten.id} />
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

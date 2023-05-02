import React from 'react'
import Header from '../../../home/components/Header'
import { StyledAnnounceHeaderDiv, StyledAnnouncerCard } from './style'

export default function AnnouncerInfo() {
  return (
    <>
      <Header/>
      <StyledAnnounceHeaderDiv>
      </StyledAnnounceHeaderDiv>
      <StyledAnnouncerCard>
          <p className='initials_name'>SL</p>
          <div className='user_info'>
            <h2 className='username'>Samuel Leão</h2>
            <span className='announcer_type'>Anunciante</span>
          </div>
          <p className='announce_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellat earum nisi cupiditate accusamus voluptatum ducimus, nihil in quo ea. Natus dolore nostrum sint tenetur fuga explicabo neque voluptatum repellat!</p>
      </StyledAnnouncerCard>
    </>
  )
}

import React, {useContext, useEffect, useState} from 'react'
import { StyledAnnounceHeaderDiv, StyledAnnouncerCard } from './style'
import { AuthContext } from '../../../../context/AuthContext'

export default function AnnouncerInfo() {
  const {profileName} = useContext(AuthContext)
  
  return (
    <>
      
      <StyledAnnounceHeaderDiv>
      </StyledAnnounceHeaderDiv>
      <StyledAnnouncerCard>
      {profileName ? (
          <>
            <p className='initials_name'>{profileName[0].toUpperCase()}{profileName[1].toUpperCase()}</p>
            <div className='user_info'>
              <h2 className='username'>{profileName}</h2>
              <span className='announcer_type'>Anunciante</span>
            </div>
            <p className='announce_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellat earum nisi cupiditate accusamus voluptatum ducimus, nihil in quo ea. Natus dolore nostrum sint tenetur fuga explicabo neque voluptatum repellat!</p>
          </>
        ) : null}
      </StyledAnnouncerCard>
    </>
  )
}

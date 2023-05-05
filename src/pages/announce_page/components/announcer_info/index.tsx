import React, {useContext} from 'react'
import Header from '../../../home/components/Header'
import { StyledAnnounceHeaderDiv, StyledAnnouncerCard } from './style'
import { AuthContext } from '../../../../context/AuthContext'

export default function AnnouncerInfo() {
  const {currentUser} = useContext(AuthContext)

  return (
    <>
      
      <StyledAnnounceHeaderDiv>
      </StyledAnnounceHeaderDiv>
      <StyledAnnouncerCard>
          <p className='initials_name'>{currentUser?.name[0].toUpperCase()}{currentUser?.name[1].toUpperCase()}</p>
          <div className='user_info'>
            <h2 className='username'>{currentUser?.name}</h2>
            <span className='announcer_type'>Anunciante</span>
          </div>
          <p className='announce_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellat earum nisi cupiditate accusamus voluptatum ducimus, nihil in quo ea. Natus dolore nostrum sint tenetur fuga explicabo neque voluptatum repellat!</p>
      </StyledAnnouncerCard>
    </>
  )
}

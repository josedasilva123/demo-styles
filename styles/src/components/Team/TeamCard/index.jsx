import React from 'react'
import { StyledTeamCard } from './style'

const TeamCard = ({member}) => {
  return (
    <StyledTeamCard memberJob={member.job}>
      <h3> <strong>#</strong> {member.name}</h3>
      <span>{member.job}</span>
    </StyledTeamCard>
  )
}

export default TeamCard
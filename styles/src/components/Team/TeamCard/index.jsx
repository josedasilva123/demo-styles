import React from 'react'

const TeamCard = ({member}) => {
  return (
    <li>
        <h3>{member.name}</h3>
        <span>{member.job}</span>
    </li>
  )
}

export default TeamCard
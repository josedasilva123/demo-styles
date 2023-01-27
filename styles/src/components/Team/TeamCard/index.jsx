import React from 'react'

const TeamCard = ({member}) => {
  return (
    <li className={member.job === "Instrutor" ? styles.classX : styles.classY}>
        <h3>{member.name}</h3>
        <span>{member.job}</span>
    </li>
  )
}

export default TeamCard
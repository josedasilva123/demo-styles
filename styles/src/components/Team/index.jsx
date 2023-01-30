import React from "react";
import TeamCard from "./TeamCard";
import { StyledTeam } from "./style";
import styled from "styled-components";

const Team = ({ team }) => {
   return (
      <StyledTeam>
         <h2>Título de exemplo</h2>
         <ul>
            {team.map((member) => (
               <TeamCard key={member.id} member={member} />
            ))}
         </ul>
      </StyledTeam>
   );
};

export default Team;

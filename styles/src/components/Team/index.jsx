import React from "react";
import TeamCard from "./TeamCard";

const Team = ({ team }) => {
   return (
      <ul>
         {team.map((member) => (
            <TeamCard key={member.id} member={member} />
         ))}
      </ul>
   );
};

export default Team;

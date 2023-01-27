import React from "react";
import TeamCard from "./TeamCard";
import styles from "./team.module.css";

const Team = ({ team }) => {
   return (
      <ul>
         <h2 className={styles.title}>Título de exemplo</h2>
         {team.map((member) => (
            <TeamCard key={member.id} member={member} />
         ))}
      </ul>
   );
};

export default Team;

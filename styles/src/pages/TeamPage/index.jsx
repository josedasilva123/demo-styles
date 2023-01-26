import React from "react";
import Header from "../../components/Header";
import Team from "../../components/Team";

const TeamPage = ({ team, setCurrentPage }) => {
   return (
      <>
         <Header setCurrentPage={setCurrentPage} />
         <main>
            <h1>A Equipe</h1>
            <Team team={team} />
         </main>
      </>
   );
};

export default TeamPage;

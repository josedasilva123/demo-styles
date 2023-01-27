import React from "react";
import Header from "../../components/Header";
import Team from "../../components/Team";
import styles from "./style.module.css";

export const TeamPage = ({ team, setCurrentPage }) => {
   return (
      <>
         <Header setCurrentPage={setCurrentPage} 
         />
         <main className={styles.mainPage}>
            <h1 className="title one">A Equipe</h1>
            <Team team={team} />
         </main>
      </>
   );
};

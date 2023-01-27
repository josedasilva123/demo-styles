import React from "react";
import styles from "./style.module.css";

const WelcomePage = ({ setCurrentPage }) => {
   return (
      <main className={styles.mainPage}>
         <div>
         <h1 className="title one">Seja muito bem vindo a esta aplicação!</h1>
         <button onClick={() => setCurrentPage("team")}>Entrar</button>
         </div>         
      </main>
   );
};

export default WelcomePage;

import React from "react";

const Header = ({ setCurrentPage }) => {
   return (
      <header>
         <span>GenericApp</span>
         <button onClick={() => setCurrentPage("")}>Sair</button>
      </header>
   );
};

export default Header;

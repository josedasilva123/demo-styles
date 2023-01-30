import styled, { css } from "styled-components";

/* Componente Lógicos */

/* Componente de Estilo (componente com base em um elemento ou outro componente) */

/* styled tem um retorno css invisivel a primeira vez */
export const StyledTeamCard = styled.li`
   padding: 20px;
   border: 1px solid rgba(0, 0, 0, 0.2);

   ${({ memberJob }) => {
      if (memberJob === "Instrutor") {
         /* uma borda de um jeito */
         return css`
            border-left: 4px solid red;
         `;
      } else if (memberJob === "Monitor") {
         /* uma borda de outro jeito */
         return css`
            border-left: 4px solid blue;
         `;
      } else {
         return css`
            border-left: 4px solid orange;
         `;
      }
   }}

   h3 {
      text-decoration: underline;
      strong {
         color: red;
      }
   }
`;

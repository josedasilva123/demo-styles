import styled, { css } from "styled-components";

export const StyledTitle = styled.h1`
   font-family: var(--font-primary);
   color: var(--color-red);
   font-weight: 600;

   ${({ fontSize }) => {
      switch (fontSize) {
         case "one":
            return css`
               font-size: 2.4rem;
            `;
         case "two":
            return css`
               font-size: 2rem;
            `;
         case "three":
            return css`
               font-size: 1rem;
            `;
      }

      /*
        if(fontSize === "one"){
            return css`
                font-size: 2.4rem;   
            `
        } else if (fontSize === "two"){
            return css`
                font-size: 2rem;   
            `    
        } else if (fontSize === "three"){
            return css`
                font-size: 1.5rem;
            `
        }
        */
   }}
`;

/*
.title.one{
    font-size: 2.4rem;   
}

.title.two{
    font-size: 2rem;
}

.title.three{
    font-size: 1.5rem;
}
*/

import styled from "styled-components";


/* styled aplica css de foram pontual (produzindo hashs nas classes para o CSS não vaze) */
export const StyledTeam = styled.div`
    h2{
        margin-bottom: 20px;
    }

    h2::first-child{

    }

    ul{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }
`
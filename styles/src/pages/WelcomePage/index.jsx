import React from 'react'

const WelcomePage = ({setCurrentPage}) => {
  return (
    <main>
        <h1>Seja muito bem vindo a esta aplicação!</h1>
        <button onClick={() => setCurrentPage('team')}>Entrar</button>
    </main>
  )
}

export default WelcomePage
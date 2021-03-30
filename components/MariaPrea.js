import Link from 'next/link'

const MariaPrea = ({adjetivo}) => (

    <div>

      <title> Componente Maria Preá </title>

      <h1>Essa é o componente Maria Preá, o objetivo deste componente é ser reutilizado sob demanda.</h1>

      <p>Maria Preá é {adjetivo}</p>

      <Link href="/">
        <a>Voltar para a página Inicial</a>
      </Link>

    </div>
    
  )
  
  export default MariaPrea

  
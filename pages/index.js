import Link from 'next/link'

const Index = () => (

    <div>

      <title> Minha Primeira Página Next.js </title>

      <h1>Home page</h1>

      <h2>Página Inicial do meu primeiro app utilizando Next.js</h2>

      <Link href="/maria">
        <a>Ir para a página Maria</a>
      </Link>

      <br />

      <Link href="/movies">
        <a>Ir para a página Cinema</a>
      </Link>

      <br />

      <Link href="/movies2">
        <a>Ir para a página Cinema com a funcionalidade de pesquisa</a>  
      </Link>

      <br />

    </div>

  );
  
  export default Index

  
  

  
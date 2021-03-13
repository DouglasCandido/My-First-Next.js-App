import Link from 'next/link'

export async function getServerSideProps() {

    const URI = `http://www.omdbapi.com/?apikey=c9cd551f&t=fight_club&plot=long`

    const encodedURI = encodeURI(URI);

    const res = await fetch(encodedURI)

    const data = await res.json()
  
    return { 

        props: { data } 
        
    }

}

const Movies = ({ data }) => (

    <div>

        <title> Cinema </title>

        <center>

            <h1>Filmes em cartaz</h1>

        </center>

        <h2>Boa diversão! O seguinte filme está em cartaz:</h2>

        <div className="filmes">

            <ul>

                <li>

                    <p className="titulo">Título: { data["Title"] }</p>

                    <p className="ano">Ano: { data["Released"] }</p>

                    <p className="genero">Gêneros: { data["Genre"] } </p>

                    <p className="enredo">Enredo: { data["Plot"] } </p>

                    <center>

                        <img src="https://images-na.ssl-images-amazon.com/images/I/713OBFnCXjL._AC_SL1414_.jpg" alt="poster" className="poster" width="300rem" height="300rem" style={{display: "block"}}></img>
            
                    </center>

                </li>

            </ul>

        </div>

        <Link href="/">
            <a>Voltar para a Página Inicial</a>
        </Link>

    </div>

  )
  
  export default Movies
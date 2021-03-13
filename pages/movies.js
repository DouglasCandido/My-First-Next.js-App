import Link from 'next/link'
import axios from 'axios';

const retrievedData = async () => await axios.get(`http://www.omdbapi.com/?apikey=c9cd551f&s=pirates&plot=long`)
  .then(res => ({
    error: false,
    movies: res.data,
  }))
  .catch(() => ({
      error: true,
      movies: null,
    }),
  );

export const getServerSideProps = async() => {

    const data = await retrievedData();
  
    return {

      props: data,

    };

}

const Movies = ({ movies, error }) => {

    if(error) return <div>Filme não existente</div>

    return (

        <div>

            <div>

                <Link href="/movies">
                    <a>Ir para a página Cinema</a>
                </Link>

                <title> Cinema </title>

                <center>

                    <h1>Filmes em cartaz</h1>

                </center>

                <center>

                    <h2>Boa diversão! Os seguintes filmes estão em cartaz:</h2>

                </center>

            </div>

            { 
        
            movies.Search.map((m) => 

            <div>

                <center>
                
                    <strong> 
                        
                        {m.Title} 
                        
                    </strong> 
                    
                    <br />
                    
                    <img src={m.Poster} alt="A visualização do poster não está disponível para este filme."></img> 
                    
                    <br />

                    Ano de lançamento: {m.Year}
                
                </center>

                ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                <br />

            </div> 
            
            )
        
            }
    
        </div>

    );

};

export default Movies
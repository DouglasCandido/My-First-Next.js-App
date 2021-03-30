import Link from 'next/link'
import useSWR from 'swr'
import React, { useState } from 'react';

const fetcher = async (url) => {

    const fetched = await fetch(url);

    const res = await fetched.json();

    return res;

}

const Movies2 = () => {

    const [search, setSearch] = useState("Batman");

    const { data, error } = useSWR(`http://www.omdbapi.com/?apikey=c9cd551f&s=${search}&plot=long`, fetcher);


    if(error) return <div> Filme não existente </div>

    else if (!data) return <div> Carregando ... </div>

    return (

        <div>

            <div>

                <Link href="/">
                    <a>Ir para a página Inicial</a>
                </Link>

                <title> Cinema </title>

                <div>

                    <center>

                        <p>Pesquise por um filme no campo de texto abaixo, clique dentro do campo de texto abaixo e digite o nome do filme a ser pesquisado no campo de texto abaixo, irá pesquisar automaticamente após tirar o mouse de cima do campo de texto.</p>

                        <input type="text" placeholder="Digite o nome do filme" name="input_search" onMouseLeave={e => setSearch(e.target.value)}></input>

                    </center>

                </div>

                <center>

                    <h1>Filmes em cartaz</h1>

                </center>

                <center>

                    <h2>Boa diversão! Os seguintes filmes estão em cartaz:</h2>

                </center>

            </div>

            { 
        
                data.Search.map((m) => 

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

                    --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

                    <br />

                </div> 
                
                )
        
            }
   
        </div>

    );

};

export default Movies2


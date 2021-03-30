import Link from 'next/link'
import useSWR from 'swr'
import React, { useState } from 'react';

const Movies2 = () => {

    const [contador, setContador] = useState(1)

    const [search, setSearch] = useState("");

    const { data } = useSWR(`http://www.omdbapi.com/?apikey=c9cd551f&s=${search}&plot=long&page=${contador}`, fetcher);

    console.log(data);

    return (

        <div>

            <div>

                <Link href="/">
                    <a>Ir para a página Inicial</a>
                </Link>

                <title> Cinema </title>

                <div>

                    <center>

                        <h3>Pesquise por um filme no campo de texto abaixo, clique dentro do campo de texto abaixo e digite o nome do filme a ser pesquisado.</h3>

                        <input type="search" placeholder="Digite o nome do filme" name="input_search" onChange={e => setSearch(e.target.value)} />

                    </center>

                </div>

                <center>

                    <h1>Filmes em cartaz</h1>

                </center>

                <center>

                    <h2>Boa diversão! Os seguintes filmes estão em cartaz:</h2>

                </center>

            </div>

            <center>

                {contador > 1 ? <button onClick={() => setContador(contador - 1)}>Página anterior</button> : null }

                <button onClick={() => setContador(contador + 1)}>Página seguinte</button>

                <p> Página atual: {contador} </p>

            </center>

            <ul>

                { 

                    data && 

                    (data.Search) ? 
                    
                        data.Search.map((m) => 

                            <li key={m.Title}>

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

                            </li> 
                        
                        )
                    

                    :
                    
                    <center><div><h2>Filme não existente.</h2></div></center>
            
                }

            </ul>
   
        </div>

    );

};

const fetcher = async (url) => {

    const fetched = await fetch(url);

    const res = await fetched.json();

    return res;

}

export default Movies2




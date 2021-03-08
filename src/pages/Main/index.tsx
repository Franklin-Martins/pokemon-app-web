import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'

import Header from '../../components/Header'
import Pagination from '../../components/Pagination'

import api from '../../services/api'

import './style.css'

interface PokemonAtributes{
    id: string;
    name: string;
    url: string;
}

const Main: React.FC = ()=> {
    const [pokemons, setPokemons] = useState<PokemonAtributes[]>([]);
    const [currentPage, setCurrentPage] = useState(api.defaults.baseURL+'/pokemon');
    const [nextPage, setNextPage] = useState('');
    const [previousPage, setPreviousPage] = useState('');
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        let cancel:()=>void;
        console.log(currentPage)
        async function loadPokemons(){
            setLoading(true)
            const response = await api.get(currentPage, {
                cancelToken: new axios.CancelToken(c => cancel = c)
            });

            setLoading(false)
            setNextPage(response.data.next)
            setPreviousPage(response.data.previous)
            setPokemons(response.data.results.map((pokemon:PokemonAtributes) => {
                const auxList= pokemon.url.split('/');
                pokemon.id = auxList[auxList.length -2]
                console.log(pokemon.id)
                return pokemon
            }))
        }
        loadPokemons()
        return () => {
            cancel()
        }
    }, [currentPage]);

    function goToNextPage() {
        setCurrentPage(nextPage)
    }

    function goToPreviousPage(): (void | null) {
        setCurrentPage(previousPage)
    }

    return(
        <>
        <Header />
        <h2>Lista de Pokemons fornecidos pela api oficial</h2>
        <div className="grid-container">    
        {pokemons? pokemons.map((pokemon)=>{
            return(
                <div key={pokemon.name} className="grid-item">
                <Card
                id={pokemon.id}
                name={pokemon.name}
                />
                </div>
            )
        }): <div>Loading...</div> }
        </div>
        <Pagination 
            goToNextPage={nextPage? goToNextPage : null }
            goToPreviousPage={ previousPage? goToPreviousPage : null}
        />
        </>
    );
}

export default Main;
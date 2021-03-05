import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'

import Header from '../../components/Header'
import api from '../../services/api'

import './style.css'

interface PokemonAtributes{
    name: string;
    ulr: string;
}

const Main: React.FC = ()=> {
    const [pokemons, setPokemons] = useState<PokemonAtributes[]>([]);

    useEffect(()=>{
        async function loadPokemons(){
            const response = await api.get('/pokemon');

            setPokemons(response.data.results)
        }
        loadPokemons()
    }, []);

    return(
        <>
        <Header />
        <h2>Lista de Pokemons fornecidos pela api oficial</h2>
        <div className="grid-container">    
        {pokemons.map((pokemon)=>{
            return(
                <div className="grid-item">
                <Card 
                name={pokemon.name}
                />
                </div>
            )
        })}
        </div>
        </>
    );
}

export default Main;
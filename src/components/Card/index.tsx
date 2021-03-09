import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import './style.css'

interface CardProps{
    id: string;
    name: string;
}

interface TypeOfPokemonDTO{
    slot: number;
    type: {
        name: string,
        url: string
    }
}

interface TypeOfPokemon{
	name: string;
}

const colors = {
    fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

const Card: React.FC<CardProps> = ({ id, name }) =>{
	const [typesOfPokemon, setTypesOfPokemon] = useState<string[]>([])
	useEffect(()=>{
		api.get(`/pokemon/${id}`).then(response =>{
			//setTypesOfPokemon(response.data.types.map((ability:TypeOfPokemon)=> ability.type.name)
			setTypesOfPokemon(response.data.types.map((ability:TypeOfPokemonDTO)=> ability.type.name))
			
		})
	},[id])
	let color;
	switch (typesOfPokemon[0]) {
		case 'fire':
			color = '#FDDFDF'		
			break;

		case 'grass':
			color = '#DEFDE0'		
			break;

		case 'electric':
			color = '#FCF7DE'		
			break;

		case 'water':
			color = '#DEF3FD'		
			break;

		case 'ground':
			color = '#f4e7da'		
			break;

		case 'rock':
			color = '#d5d5d4'		
			break;

		case 'fairy':
			color = '#fceaff'		
			break;

		case 'poison':
			color = '#98d7a5'		
			break;

		case 'bug':
			color = '#f8d5a3'		
			break;

		case 'dragon':
			color = '#97b3e6'		
			break;

		case 'psychic':
			color = '#eaeda1'		
			break;

		case 'flying':
			color = '#F5F5F5'		
			break;

		case 'fighting':
			color = '#E6E0D4'		
			break;

		default:
			color = '#F5F5F5'
			break;

	}
	console.log(color)
    return(
        <div style={{backgroundColor: color}} className="card-container">
            <header className="card-header">
                <div className="ball"></div>
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} alt={name}/>
            </header>
			<div className="card-content">

            <title> {name} </title>
			<span> #{id} </span>
            <strong> {name} </strong>
			<p>Types </p>
			<ul>
				{ typesOfPokemon.map(type =>{
					return <li key={type}> <p> {type} </p> </li>
				}) }
			</ul>
			</div>
        </div>
    )
}

export default Card
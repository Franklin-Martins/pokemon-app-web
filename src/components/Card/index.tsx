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
			color = '#fcc6c6'		
			break;

		case 'grass':
			color = '#b1f5b6'		
			break;

		case 'electric':
			color = '#feffb0'		
			break;

		case 'water':
			color = '#c2ebfd'		
			break;

		case 'ground':
			color = '#fdd2a3'		
			break;

		case 'rock':
			color = '#d5d5d4'		
			break;

		case 'fairy':
			color = '#fceaff'		
			break;

		case 'poison':
			color = '#eac8fa'		
			break;

		case 'bug':
			color = '#fdd487'		
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
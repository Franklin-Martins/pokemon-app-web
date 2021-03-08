import React from 'react';

import './style.css'

interface CardProps{
    id: string;
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
    return(
        <div style={{backgroundColor:colors.fire}} className="card-container">
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
			<li> grass </li>
			<li> poison </li>
			</ul>
			</div>
        </div>
    )
}

export default Card
import React from 'react';

import './style.css'

interface CardProps{
    name: string;
}

const Card: React.FC<CardProps> = ({ name }) =>{
    return(
        <div className="card-container">
            <header className="card-header">
                <title> {name} </title>
                <h5> {name} </h5>
            </header>
        </div>
    )
}

export default Card
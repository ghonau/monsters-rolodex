import React from 'react';
import '../Card/card.styles.css'
export const Card = (props) => {
    return <div className='card-container'>
    <img
    alt='monster' 
    src={`https://robohash.org/${props.monster.id}?size=45x45`}
    />
    <h2>{props.monster.name}</h2>
    <h3>{props.monster.email}</h3>    
    </div>
}
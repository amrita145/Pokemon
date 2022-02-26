import React, { useState, useEffect } from 'react';
import typeColors from '../../helpers/typeColors'
import './style.css';

function Card({ pokemon }) {
    return (
        <div className="Card">
            <div className="Card__img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="Card__name">
                {pokemon.name}
            </div>
            <hr />
            <div>
                {
                    pokemon.stats.map((statData, i) => {
                        if (statData.effort){
                            return (
                                <div>{statData.stat.name}</div>
                            )
                        }
                    })
                }
            </div>
            <hr />
            <div style={{padding:'5px'}}>
                {
                    pokemon.moves.slice(0, 10).map((moveData, i) => {
                        return (
                            <span style={{marginRight:'5px'}}>{moveData.move.name}{`,`}</span>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Card;

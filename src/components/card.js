import React from 'react';
import cardUp from '../images/card_up.png';
import cardDown from '../images/card_down.png';
import './card.css';
import { Card as MaterialCard } from '@material-ui/core'

function Card(props) {
    return (
        <MaterialCard className="Card">
            <img
                key={props.key}
                src={props.facedown ? cardDown : cardUp}
                alt="card"
            />
        </MaterialCard>
    );
}

export default Card;

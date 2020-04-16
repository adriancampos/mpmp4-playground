import React from 'react';
import Card from './card.js' 
import './card.css';

function CardRow(props) {


  function allFaceDown() {
    return cardFacedowns.every(e => e == true)
  }

  // Calculate 
  const cardFacedowns = []
  for (let i = 0; i < props.n; i++) {
    cardFacedowns[i] = ((props.i >> (props.n - i - 1)) % 2 == 0)
  }

  // Apply user's flips by "simulating" them
  for (const flip in props.flips) {
    if (props.flips[flip]) {
      cardFacedowns[props.flips[flip]] = !cardFacedowns[props.flips[flip]]
    }

    // Stop when all cards are flipped
    if (allFaceDown()) {
      break
    }
  }


  // Create card elements
  const cards = []
  for (let i = 0; i < props.n; i++) {
    cards.push(Card({ facedown: cardFacedowns[i], n: props.n, key: i }))
  }

  return (
    <div key={props.i} style={{ display: "flex", flexDirection: "row", alignItems: "center" , }}
      className={"CardRow " + (allFaceDown() ? "facedown" : "")}
      title={"Permutation " + props.i}>
        
      {cards}
    </div>
  );
}

export default CardRow;

import React from 'react';
import './App.css';
import CardRow from './cardrow.js'
import Flipper from './flipper.js'
import { TextField, Toolbar, Typography, AppBar, Card as MaterialCard, Button } from '@material-ui/core';

function App() {
  const [n, setNumCards] = React.useState(4)

  const [flips, setFlips] = React.useState([])

  const rows = [];
  for (let i = 1; i < 2 ** n; i++) {
    const element = CardRow({
      n: n, i: i, flips: flips,
    });
    rows.push(element);
  }

  const [numFlips, setNumFlips] = React.useState(1);

  const flippers = [];
  for (let i = 0; i < numFlips; i++) {
    const element = Flipper({
      n: n,
      i: i,
      selectedValue: flips[i],
      onChange: ((cardIdx) => {
        var flips2 = flips.slice()
        flips2[i] = cardIdx
        setFlips(flips2)
      }),

    })
    flippers.push(element)

  }

  return (
    <div className="App">

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            MPMP4 Playground
          </Typography>
        </Toolbar>
      </AppBar>

      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", flex: 1, alignContent: "start" }}>
          {rows}
        </div>

        <MaterialCard style={{ display: "flex", flexDirection: "column", margin: "16px", padding: "16px" }} >
          <TextField
            label="Number of Cards"
            className="InputField"
            variant="outlined"
            type="number"
            onChange={(e) => setNumCards(e.target.value)} value={n}
          />
          <TextField
            label="Number of Flips"
            className="InputField"
            variant="outlined"
            type="number"
            onChange={(e) => setNumFlips(e.target.value)} value={numFlips}
          />
          {flippers}
          <Button onClick={(() => setNumFlips(parseInt(numFlips) + 1))}>Add Another Flip</Button>
        </MaterialCard>
      </div>
    </div>
  );
}

export default App;

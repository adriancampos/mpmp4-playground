import React from 'react';
import './App.css';
import CardRow from './cardrow.js'
import Flipper from './flipper.js'
import { TextField, Toolbar, Typography, AppBar, Card as MaterialCard, Button } from '@material-ui/core';
import { FaGithub } from 'react-icons/fa'
import { useQueryParam, NumberParam, withDefault, DelimitedNumericArrayParam } from "use-query-params";

function App() {
  const [n, _setNumCards] = useQueryParam("n", withDefault(NumberParam, 4));
  const setNumCards = (num) => _setNumCards(num, 'replaceIn');  // Wrap setNumCards so we can control the updateType here

  var [_flips, _setFlips] = useQueryParam("flips", withDefault(DelimitedNumericArrayParam, []))
  const setFlips = (flips) => _setFlips(flips, 'replaceIn');  // Wrap setFlips so we can control the updateType here
  // Query Param's built in withDefault isn't sufficient. We always want our array to be size at least 1 (even if empty).
  const flips = (_flips.length < 1) ? [null] : _flips

  const rows = [];
  for (let i = 1; i < 2 ** n; i++) {
    const element = CardRow({
      n: n, i: i, key: i, flips: flips,
    });
    rows.push(element);
  }

  const numFlips = flips.length;
  function setNumFlips(num) {
    // No negative flips!
    if (num < 0) {
      num = 0;
    }
    var newFlips = flips.slice();
    newFlips.length = num;
    setFlips(newFlips)
  }

  const flippers = [];
  for (let i = 0; i < numFlips; i++) {
    const element = Flipper({
      n: n,
      i: i,
      key: i,
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

          <div style={{ flex: "1 1 0" }}></div>
          <footer>
            Made for <a href="https://www.think-maths.co.uk/card-puzzle" target="_blank">Matt Parker's Maths Puzzles - Puzzle 4</a>
            <br />
            <div style={{ display: "flex" }}>
              <span style={{ flex: 1 }}>By Adrian</span>
              <span><a href="https://github.com/adriancampos/mpmp4-playground" target="_blank" style={{ color: "rgba(0, 0, 0, 0.87)" }}><FaGithub /></a></span>
            </div>
          </footer>
        </MaterialCard>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { API } from 'aws-amplify';

const App = () => {

  const [coins, updateCoins] = useState([]);
  
  const fetchCoins = async () => {
    const data = await API.get('cryptoapi', `/coins?limit=${input.limit}&start=${input.start}`);
    updateCoins(data.coins);
  }

  useEffect(
    () => {
      fetchCoins();
    }
    , []
  );

  const [input, updateInput] = useState({ start: 0, limit: 3 });  

  const updateInputValues = (type, value) => {
    updateInput({
      ...input
      , [type]: value
    });
  }

  return (
    <div className="App">
      <input />
      <input />
      <button>Fetch Coins</button>
      {
        coins.map(x => (
          <div
            key={ x.symbol }
          >
            <h2>
              { x.name } - { x.symbol}
            </h2>
            <h5>
              ${ x.price_usd }
            </h5>
          </div>
        ))
      }
    </div>
  );
}

export default App;

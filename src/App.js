import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { API } from 'aws-amplify';

const App = () => {

  const [coins, updateCoins] = useState([]);
  
  const fetchCoins = async () => {
    try {
      const data = await API.get('cryptoapi', `/coins?limit=${input.limit}&start=${input.start}`);
      updateCoins(data.coins);  
    }
    catch(err) {
      console.error(err);
    }
  }

  // const fetchCoins = () => {
  //   API.get('cryptoapi', `/coins?limit=${input.limit}&start=${input.start}`)
  //     .then(response => {
  //       console.log(response);
  //       updateCoins(response.coins);
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // }

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
      <input 
        placeholder='Start with...'
        onChange={ e => updateInputValues('start', e.target.value) }
      />
      <input 
        placeholder='Limit to...'
        onChange={ e => updateInputValues('limit', e.target.value) }
      />
      <button
        onClick={fetchCoins}
      >
        Fetch Coins
      </button>
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

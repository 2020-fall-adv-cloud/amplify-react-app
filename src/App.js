import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { API } from 'aws-amplify';

const App = () => {

  const [coins, updateCoins] = useState([]);
  
  const fetchCoins = async () => {
    const data = await API.get('cryptoapi', '/coins');
    updateCoins(data.coins);
  }

  useEffect(
    () => {
      fetchCoins();
    }
    , []
  );

  return (
    <div className="App">
      {
        coins.map(x => (
          <div>
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
